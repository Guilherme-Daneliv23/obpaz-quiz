import "./questionCard.css";

export const QuestionCard = (props : any) =>  {
    return (
        <div className="question_card">
            <p className="question_question">{props.question}</p>
            <ul className="question_list_answers">
                <li className="question_list_answer">
                    <button onClick={() => props.onAnswer("A")} className="question_list_answr_button">{props.answer1}</button>
                </li>

                <li className="question_list_answer">
                    <button onClick={() => props.onAnswer("B")} className="question_list_answr_button">{props.answer2}</button>
                </li>

                <li className="question_list_answer">
                    <button onClick={() => props.onAnswer("C")} className="question_list_answr_button">{props.answer3}</button>
                </li>
            </ul>

            {props.answered && (
                <button onClick={props.onNext} className="question_submmit_button">PRÓXIMA</button>
            )}
        </div>
    )
}