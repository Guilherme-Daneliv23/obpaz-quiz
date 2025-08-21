import './singInScreen.css'
import { LoginHomeModel } from '../../components/loginHomeModel/loginHomeModel'
import { FormField } from '../../components/formField/formField'
import { Button } from '../../components/button/button'
import { useState } from 'react'
import { supabase } from '../../lib/supabaseClient'
import { useNavigate } from 'react-router-dom'

export const SingInScreen = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const navigate = useNavigate()

    const handleSignIn = async () => {
        setError('')
        setSuccess('')

        const {data, error} = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        })

        if(error)   {
            setError(error.message)
        } else {
            setSuccess('Login realizado com sucesso!')
            navigate('/home')

        }
    }

    return (
        <div className='singIn_screen'>
            <LoginHomeModel>
                <FormField
                    borderColor='#0275C2'
                    type='email'
                    placeholder='Email'
                    value={email}
                    onChange={(e: any) => setEmail(e.target.value)}
                />

                <FormField
                    borderColor='#0275C2'
                    type='password'
                    placeholder='Senha'
                    value={password}
                    onChange={(e: any) => setPassword(e.target.value)}
                />

                <Button
                    backgroundColor='#0275C2'
                    texto='Entrar'
                    onClick={handleSignIn}
                />

                {error && <p style={{ color: 'red' }}>{error}</p>}
                {success && <p style={{ color: 'green' }}>{success}</p>}
            </LoginHomeModel>
        </div>
    )
}