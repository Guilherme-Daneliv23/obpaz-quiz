import './gameScreen.css'
import { QuestionCard } from '../../components/questionCard/questionCard'
import { FeedbackCard } from '../../components/feedbackCard/feedbackCard'
import feedbackCorrect from '../../assets/images/correct.png'
import feedbackWrong from '../../assets/images/wrong.png'
import { useGameLogic } from '../../hooks/useGameLogic'
import { FinalGameCard } from '../../components/finalGameCard/finalGameCard'

export const GameScreen = () => {
  const {
    currentQuestion,
    handleAnswer,
    goToNext,
    score,
    feedback,
    answered,
    gameFinished,
  } = useGameLogic()

  return (
    <div className='game_screen'>
      {!gameFinished && currentQuestion && (
        <QuestionCard
          question={currentQuestion.question}
          answer1={currentQuestion.answers.A}
          answer2={currentQuestion.answers.B}
          answer3={currentQuestion.answers.C}
          onAnswer={handleAnswer}
          onNext={goToNext}
          answered={answered}
        />
      )}

      {feedback && (
        <FeedbackCard
          feedbackIcon={feedback === 'acerto' ? feedbackCorrect : feedbackWrong}
          feedbackPhrase={feedback === 'acerto' ? 'Você acertou!' : 'Você errou!'}
          text={feedback === 'acerto'
            ? 'Parabéns, você escolheu a alternativa correta.'
            : 'Tente novamente na próxima, você vai conseguir!'
          }
          feedbackLinkDoc='' // se quiser, mostre link só em certas perguntas
        />
      )}

      {gameFinished && (
        <FinalGameCard
          acertos={score}
        />
      )}
    </div>
  )
}
