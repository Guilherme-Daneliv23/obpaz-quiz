import './singUpScreen.css'
import { LoginHomeModel } from '../../components/loginHomeModel/loginHomeModel'
import { FormField } from '../../components/formField/formField'
import { Button } from '../../components/button/button'
import { supabase } from '../../lib/supabaseClient'
import { useState } from 'react'

export const SingUpScreen = () => {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const handleSignUp = async () => {
        if (!nome || !email || !senha) {
            setError("Preencha todos os campos");
            return;
        }
        setError('')
        setSuccess('')

        const {data, error} = await supabase.auth.signUp({
            email: email,
            password: senha,
            options: {
                data: {
                    nome: nome,
                },
            },
        })
        

        if(error) { 
            setError(error.message) 
        } else { 
            setSuccess("Cadastro realizado com sucesso! Agora vá até o seu email para confirma-lo e fazer o login!"); 
        }
    }


    return (
        <div className='singUp_screen'>
            <LoginHomeModel>
                <FormField
                    borderColor='#38B6FF'
                    type='text'
                    placeholder='Nome'
                    value={nome}
                    onChange={(e : any) => setNome(e.target.value)}
                />

                <FormField
                    borderColor='#38B6FF'
                    type='email'
                    placeholder='Email'
                    value={email}
                    onChange={(e : any) => setEmail(e.target.value)}
                />

                <FormField
                    borderColor='#38B6FF'
                    type='password'
                    placeholder='Senha'
                    value={senha}
                    onChange={(e : any) => setSenha(e.target.value)}
                />

                <Button
                    backgroundColor='#38B6FF'
                    texto='Cadastrar'
                    onClick={handleSignUp}
                />

                {error && <p style={{ color: 'red' }}>{error}</p>}
                {success && <p style={{ color: 'green' }}>{success}</p>}
            </LoginHomeModel>
        </div>
    )
}