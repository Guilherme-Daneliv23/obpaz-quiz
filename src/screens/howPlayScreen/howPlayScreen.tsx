import "./howPlayScreen.css"
import { StandardCard } from "../../components/standardCard/standardCard"
import { StandardTitle } from "../../components/standardTitle/standardTitle"
import { ButtonReturn } from "../../components/buttonReturn/buttonReturn"

export const HowPlayScreen = () =>  {
    return (
        <div className="howPlay_screen">
            <StandardCard>
                <StandardTitle
                    title="COMO JOGAR"
                />

                <div className="howPlay_screen_content">
                    <p className="howPlay_screen_text">
                        Esse jogo aborda um assunto super importante na atualidade, a Cultura de Paz, de uma forma muito divertida.
                    </p>

                    <p className="howPlay_screen_text">
                        Basicamente, ele contém perguntas que estão relacionadas a artigos científicos que abordam o tema citado anteriormente. A cada pergunta respondida, o jogador pode verificar se acertou ou errou a mesma, além de receber um feedback acerca da sua resposta e um link para um artigo científico explicativo.
                    </p>
                </div>


                <ButtonReturn
                    linkHref='/home'
                />
            </StandardCard>
        </div>
    )
}