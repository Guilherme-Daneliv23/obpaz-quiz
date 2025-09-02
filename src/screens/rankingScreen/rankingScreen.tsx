import './rankingScreen.css';
import { StandardTitle } from '../../components/standardTitle/standardTitle';
import { RankingCard } from '../../components/rankingCard/rankingCard';
import { ButtonRedirect } from '../../components/buttonRedirect/buttonRedirect';
import { StandardCard } from '../../components/standardCard/standardCard';

export const RankingScreen = () =>  {
    return (
        <div className='ranking_screen'>
            <StandardCard>
                <StandardTitle
                    title='RANKING'
                />

                <div className='ranking_itens'>
                    <RankingCard
                        number='1º'
                        name="Nei Alberto de Sales Filho"
                    />

                    <RankingCard
                        number='2º'
                        name="Guilherme Daneliv"
                    />

                    <RankingCard
                        number='3º'
                        name="Ubiratan da Costa Schier"
                    />

                    <RankingCard
                        number='4º'
                        name="Alice Manuela da Silva de Azambuja"
                    />

                    <RankingCard
                        number='5º'
                        name="Bernardo Staffens"
                    />
                </div>

                <ButtonRedirect
                    linkHref='/home'
                    text="VOLTAR"
                />
            </StandardCard>
        </div>
    )
}