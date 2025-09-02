import './finalGameCard.css'

//Components
import { StandardCard } from '../standardCard/standardCard'
import { StandardTitle } from '../standardTitle/standardTitle'
import { ButtonRedirect } from '../buttonRedirect/buttonRedirect'

export const FinalGameCard = (props: any) => {
    return (
        <StandardCard>
            <StandardTitle
                title="FIM DE JOGO"
            />
            <div className='finalGame_align'>
                <p className='finalGame_text'>
                    Você finalizou a partida com aproveitamento de:
                </p>

                <p className='finalGame_hits'>
                    {props.acertos}
                </p>

                <p className='finalGame_text'>
                    acertos
                </p>

                <div className='finalGame_button-align'>
                    <ButtonRedirect
                        linkHref='/home'
                        text='VOLTAR'
                    />

                    <ButtonRedirect
                        linkHref='/ranking'
                        text='RANKING'
                    />
                </div>               
            </div>
        </StandardCard>
    )
}