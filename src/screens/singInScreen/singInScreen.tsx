import './singInScreen.css'
import { LoginHomeModel } from '../../components/loginHomeModel/loginHomeModel'
import { FormField } from '../../components/formField/formField'
import { Button } from '../../components/button/button'

export const SingInScreen = () => {
    return (
        <div className='singIn_screen'>
            <LoginHomeModel>
                <FormField
                    borderColor='#0275C2'
                    type='email'
                    placeholder='Email'
                    value=''
                    onChange=''
                />

                <FormField
                    borderColor='#0275C2'
                    type='password'
                    placeholder='Senha'
                    value=''
                    onChange=''
                />

                <Button
                    linkHref="#"
                    backgroundColor='#0275C2'
                    texto='Entrar'
                />
            </LoginHomeModel>
        </div>
    )
}