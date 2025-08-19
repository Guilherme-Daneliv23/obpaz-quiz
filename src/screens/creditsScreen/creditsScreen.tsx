import './creditsScreen.css'
import { StandardCard } from '../../components/standardCard/standardCard'
import { StandardTitle } from '../../components/standardTitle/standardTitle'
import { CreditsCard } from '../../components/creditsCard/creditsCard'
import { ButtonReturn } from '../../components/buttonReturn/buttonReturn'
import gui_image from  '../../assets/images/guilherme.jpg'
import robloxia_image from '../../assets/images/robloxia.png'

export const CreditsScreen = () => {
    return (
        <div className='credits_screen'>
            <StandardCard>
                <StandardTitle
                    title="CRÉDITOS"
                />

                <div className='credits_screen_content'>
                    <CreditsCard
                        imageCredit={gui_image}
                        text="Eu sou Guilherme Daneliv um dos criadores da primeira versão desse jogo e criador dessa adaptação do jogo para tratar sobre Cultura de Paz tema do projeto em que atuo como voluntário"
                        linkHref="#"
                    />
                    
                    <CreditsCard
                        imageCredit={robloxia_image}
                        text="Confira aqui também a primeira versão do jogo e quem participou dessa criação!"
                        linkHref="#"
                    />
                </div>

                <ButtonReturn
                    linkHref='#'
                />
            </StandardCard>
        </div>
    )
}