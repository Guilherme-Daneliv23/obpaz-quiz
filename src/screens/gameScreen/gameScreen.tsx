import './gameScreen.css'
import { QuestionCard } from '../../components/questionCard/questionCard'
import { FeedbackCard } from '../../components/feedbackCard/feedbackCard'
import feedback_icon from '../../assets/images/correct.png'

export const GameScreen = () => {
    return (
        <div className='game_screen'>
            <QuestionCard
                question='O Manifesto sobre Cultura de Paz existe para:'
                answer1='Formar “mini-gandhis'
                answer2='Apenas para filosofar sobre a vida'
                answer3='Para compreender melhor as violências e a paz na humanidade'
            />

            <FeedbackCard
                feedbackIcon={feedback_icon}
                feedbackPhrase='Você acertou!'
                text="Lorem msldsdvl dls vsdksdvl slvsdvsdlv sd vsdlkvsd v ldkvsdvlsdvsdv dvlsdvkdv dkvlsdv sdkvl vsdlkvsdvksdv dvklsdvksd vsdlkvd vlsdvsd vdlkv sdvsdlvkdvdv sdkvsdvklsdv vsdkvsdvklvkldv d vdklv sdlveçrlreçreerlknrpfv sdv v ve vevkelv vsvlsvsl dvk vsklvs vslkvs vslkv sklv slkvsvsv sd vklsv"
                feedbackLinkDoc='https://www5.pucsp.br/ecopolitica/documentos/cultura_da_paz/docs/manifesto_2000_UNESCO_cultura_da_paz.pdf'
            />
        </div>
    )
}