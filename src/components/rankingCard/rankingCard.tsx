import "./rankingCard.css"

export const RankingCard = (props : any) => {
    return (
        <div className="ranking_Card">
            <div className="ranking_position">
                <h2 className="ranking_position_number">{props.number}</h2>
            </div>
            <p className="ranking_name">{props.name}</p>
        </div>
    )
}