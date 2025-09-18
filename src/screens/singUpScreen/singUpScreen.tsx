import './singUpScreen.css'
import { LoginHomeModel } from '../../components/loginHomeModel/loginHomeModel'
import { FormField } from '../../components/formField/formField'
import { Button } from '../../components/button/button'
import { supabase } from '../../lib/supabaseClient'
import { useState } from 'react'
import { Toast } from '../../components/toastCard/toastCard'
import { useNavigate } from 'react-router-dom'

export const SingUpScreen = () => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null)

  const navigate = useNavigate()

  const handleSignUp = async () => {
    setToast(null)

    // Validação de campos obrigatórios
    if (!nome.trim() || !email.trim() || !senha.trim()) {
      setToast({
        message: 'Por favor, preencha todos os campos antes de continuar.',
        type: 'error'
      })
      return
    }

    const { data: existingName, error: nameError } = await supabase
      .from('profiles')
      .select('id')
      .eq('full_name', nome)
      .maybeSingle()

    if (nameError) {
      setToast({
        message: 'Erro ao verificar nome. Tente novamente.',
        type: 'error'
      })
      return
    }

    if (existingName) {
      setToast({
        message: 'Este nome de usuário já está em uso. Escolha outro.',
        type: 'error'
      })
      return
    }

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: senha,
      options: {
        data: {
          nome: nome,
        },
      },
    })

    if (error) {
      // Tradução de mensagens de erro
      let friendlyMessage = 'Erro ao tentar realizar o cadastro. Tente novamente.'

      if (error.message.includes('User already registered')) {
        friendlyMessage = 'Este e-mail já está cadastrado.'
      } else if (error.message.includes('Password should be at least')) {
        friendlyMessage = 'A senha deve conter pelo menos 6 caracteres.'
      }

      setToast({ message: friendlyMessage, type: 'error' })
    } else {
      setToast({
        message: 'Cadastro realizado com sucesso! Redirecionando para login...',       
        type: 'success'
      })
      setTimeout(() => navigate('/login'), 2000)
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
          onChange={(e: any) => setNome(e.target.value)}
        />

        <FormField
          borderColor='#38B6FF'
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
        />

        <FormField
          borderColor='#38B6FF'
          type='password'
          placeholder='Senha'
          value={senha}
          onChange={(e: any) => setSenha(e.target.value)}
        />

        <Button
          backgroundColor='#38B6FF'
          texto='Cadastrar'
          onClick={handleSignUp}
        />

        {toast && <Toast message={toast.message} type={toast.type} />}
      </LoginHomeModel>
    </div>
  )
}
