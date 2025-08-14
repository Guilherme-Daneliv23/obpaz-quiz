import './articleCard.css'
import file_icon from "../../assets/images/file.png";

export const ArticleCard = (props : any) => {
    return (
        <a href={props.articleLink} className='article_card'>
            <img className='article_card_img' src={file_icon} alt="documento ícone"/>
            <p className='article_card_title'>{props.articleTitle}</p>
        </a>
    )
}