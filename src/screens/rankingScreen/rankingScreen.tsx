import './rankingScreen.css';
import { StandardTitle } from '../../components/standardTitle/standardTitle';
import { RankingCard } from '../../components/rankingCard/rankingCard';
import { ButtonRedirect } from '../../components/buttonRedirect/buttonRedirect';
import { StandardCard } from '../../components/standardCard/standardCard';
import { useRanking } from '../../hooks/useRanking';

export const RankingScreen = () =>  {

    const {ranking, loading, error} = useRanking()

    return (
        <div className='ranking_screen'>
            <StandardCard>
                <StandardTitle
                    title='RANKING'
                />

                <div className='ranking_itens'>
                    {loading && <p>Carregando...</p>}
                    {error && <p>{error}</p>}
                    {!loading && !error && ranking.length === 0 && <p>Nenhum jogador pontuou!</p>}

                    {ranking.map((player, index) => (
                        <RankingCard
                            key={player.id}
                            number={`${index + 1}º`}
                            name={player.full_name}
                            score={player.best_score}
                        />
                    ))}
                </div>

                <ButtonRedirect
                    linkHref='/home'
                    text="VOLTAR"
                />
            </StandardCard>
        </div>
    )
}