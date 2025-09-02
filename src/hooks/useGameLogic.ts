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
  correct_answer: string // número da resposta correta (1, 2 ou 3)
}

export function useGameLogic() {
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [feedback, setFeedback] = useState<'acerto' | 'erro' | null>(null)
  const [answered, setAnswered] = useState(false)
  const [gameFinished, setGameFinished] = useState(false)

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
