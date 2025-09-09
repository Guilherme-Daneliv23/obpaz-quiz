import './singInScreen.css'
import { LoginHomeModel } from '../../components/loginHomeModel/loginHomeModel'
import { FormField } from '../../components/formField/formField'
import { Button } from '../../components/button/button'
import { useState } from 'react'
import { supabase } from '../../lib/supabaseClient'
import { useNavigate } from 'react-router-dom'

import { Toast } from '../../components/toastCard/toastCard'

export const SingInScreen = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null)

    const navigate = useNavigate()

    const handleSignIn = async () => {
        setToast(null)

        if (!email.trim() || !password.trim()) {
            setToast({
                message: 'Por favor, preencha todos os campos antes de continuar.',
                type: 'error'
            })
                return
        }

        const {data, error} = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        })


        if (error) {
            // Mensagens mais amigáveis para alguns erros comuns
            let friendlyMessage = 'Erro ao tentar fazer login. Verifique seu e-mail e senha.'

            if (error.message.includes('Invalid login credentials')) {
                friendlyMessage = 'E-mail ou senha incorretos.'
            } else if (error.message.includes('User not found')) {
                friendlyMessage = 'Usuário não encontrado.'
            }

            setToast({ message: friendlyMessage, type: 'error' })
        } else {
            setToast({ message: 'Login realizado com sucesso!', type: 'success' })
            setTimeout(() => navigate('/home'), 2000)
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

                {toast && <Toast message={toast.message} type={toast.type} />}
            </LoginHomeModel>
        </div>
    )
}