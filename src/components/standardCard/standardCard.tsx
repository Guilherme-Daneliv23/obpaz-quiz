import "./standardCard.css";

export const StandardCard = (props : any) => {
    return (
        <div className="standard_card">
            {props.children}
        </div>
    )
}