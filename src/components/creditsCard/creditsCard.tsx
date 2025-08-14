import './creditsCard.css'

export const CreditsCard = (props: any) => {
    return(
        <div className='credits_card'>
            <img className='credits_card_img' src={props.imageCredit}/>
            <p className='credits_card_text'>{props.text}</p>
            <a className='credits_card_link' href={props.linkHref}>SAIBA +</a>
        </div>
    )
}