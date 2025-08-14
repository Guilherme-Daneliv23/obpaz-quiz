import './singUpScreen.css'
import { LoginHomeModel } from '../../components/loginHomeModel/loginHomeModel'
import { FormField } from '../../components/formField/formField'
import { Button } from '../../components/button/button'

export const SingUpScreen = () => {
    return (
        <div className='singUp_screen'>
            <LoginHomeModel>
                <FormField
                    borderColor='#38B6FF'
                    type='text'
                    placeholder='Nome'
                    value=''
                    onChange=''
                />

                <FormField
                    borderColor='#38B6FF'
                    type='email'
                    placeholder='Email'
                    value=''
                    onChange=''
                />

                <FormField
                    borderColor='#38B6FF'
                    type='password'
                    placeholder='Senha'
                    value=''
                    onChange=''
                />

                <Button
                    linkHref="#"
                    backgroundColor='#38B6FF'
                    texto='Cadastrar'
                />
            </LoginHomeModel>
        </div>
    )
}