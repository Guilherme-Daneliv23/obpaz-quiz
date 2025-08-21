import './buttonReturn.css'
import { Link } from 'react-router-dom'

export const ButtonReturn = (props : any) => {
    return (
        <Link className='button_return' to={props.linkHref}>VOLTAR</Link>
    )
}