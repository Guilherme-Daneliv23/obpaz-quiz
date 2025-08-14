import "./standardTitle.css"

export const StandardTitle = (props : any) => {
    return (
        <h2 className="standard_title">
            {props.title}
        </h2>
    )
}