import './loginHomeModel.css';
import logo_game from "../../assets/images/logo_game.png";

export const LoginHomeModel = (props : any) =>     {
    return (
        <div className='main_container'>
            <img className='img_logo' src={logo_game} alt="logo game" />
            <div className='content_container'>
                {props.children}
            </div>
        </div>
    )
}