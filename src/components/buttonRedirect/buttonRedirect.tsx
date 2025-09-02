import './buttonRedirect.css'
import { Link } from 'react-router-dom'

export const ButtonRedirect = (props : any) => {
    return (
        <Link className='button_return' to={props.linkHref}>{props.text}</Link>
    )
}