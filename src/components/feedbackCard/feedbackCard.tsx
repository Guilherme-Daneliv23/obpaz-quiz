import "./feedbackCard.css";
import file_icon from "../../assets/images/file.png";

export const FeedbackCard = (props : any) => {
    return (
        <div className="feedback_card">
            <div className="feedback_result">
                <img className="feedback_result_icon" src={props.feedbackIcon}/>
                <p className="feedback_result_phrase">{props.feedbackPhrase}</p>
            </div>
            <div className="feedback_explanation">
                <h3 className="feedback_explnation_title">FEEDBACK</h3>
                <p className="feedback_explanatin_text">{props.text}</p>
                <h4 className="feedback_explnation_title">SAIBA +</h4> 
                <a rel="stylesheet" href={props.feedbackLinkDoc}><img className="feedback_explnation_img" src={file_icon} alt="ícone de documento para leitura"/></a>             
            </div>
        </div>
    )
}