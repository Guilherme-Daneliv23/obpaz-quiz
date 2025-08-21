import './loginScreen.css'
import { LoginHomeModel } from '../../components/loginHomeModel/loginHomeModel'
import { Button } from '../../components/button/button'

export const LoginScreen = () => {
    return (
        <div className='login_screen'>
            <LoginHomeModel>
                <Button
                    linkHref='/login'
                    backgroundColor='#0275C2'
                    texto='Entrar'
                />
                <Button
                    linkHref='/cadastro'
                    backgroundColor='#38B6FF'
                    texto='Cadastrar'
                />
            </LoginHomeModel>
        </div>
    )
}