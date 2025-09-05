import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export interface Question {
  id: number,
  question: string,
  answers: {
    A: string,
    B: string,
    C: string,
  },
  correct_answer: string,
  correct_feedback: string,
  incorrect_feedback: string,
  reference: string
}



export function useGameLogic() {
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [feedback, setFeedback] = useState<'acerto' | 'erro' | null>(null)
  const [answered, setAnswered] = useState(false)
  const [gameFinished, setGameFinished] = useState(false)

  const updateBestScore = async () => {
    const {data: {user}, error: userError} = await supabase.auth.getUser()

    if(userError || !user)  {
      console.error("Erro ao obter usuário: ", userError)
      return
    }

    const {data: profile, error: fetchError} = await supabase
      .from('profiles')
      .select('best_score')
      .eq('id', user.id)
      .single()

    if(fetchError)  {
      console.error("Erro ao buscar perfil: ", fetchError)
      return
    }

    if(!profile || score > profile.best_score)  {
      const {error: updateError} = await supabase
        .from('profiles')
        .update({best_score: score})
        .eq('id', user.id)

      if(updateError) {
        console.error("Erro ao atualizar o score: ", updateError)
      } else {
        console.log("Score atualizado com sucesso!")
      }
    } else {
      console.log("Score mantido")
    }
  }

  useEffect(() => {
    const fetchQuestions = async () => {
      const { data, error } = await supabase
        .from('quiz_questions')
        .select('*')

      if (data) {
        console.log('QUESTÕES CARREGADAS:', data)
        setQuestions(data)
      }else {
        console.error(error)
      } 
    }

    fetchQuestions()
  }, [])

  const handleAnswer = (selected: string) => {
    if(answered) return
    const currentQuestion = questions[currentIndex]
    const isCorrect = selected === currentQuestion.correct_answer

    setFeedback(isCorrect ? 'acerto' : 'erro')

    if (isCorrect) {
      setScore((prev) => prev + 1)
    }
     setAnswered(true)
  }

  const goToNext = () => {
      if (currentIndex + 1 < questions.length) {
        setCurrentIndex(prev => prev + 1)
        setFeedback(null)
        setAnswered(false)
      } else {
        setGameFinished(true)
        setFeedback(null)
        updateBestScore()
      }
  }

  return {
    currentQuestion: questions[currentIndex],
    handleAnswer,
    goToNext,
    score,
    feedback,
    answered,
    gameFinished,
  }
}
