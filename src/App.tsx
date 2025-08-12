// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Button } from './components/button/button'
import { LoginHomeModel } from './components/loginHomeModel/loginHomeModel'
import { FormField } from './components/formField/formField'
import { QuestionCard } from './components/questionCard/questionCard'
import { FeedbackCard } from './components/feedbackCard/feedbackCard'
import correct_image from "./assets/images/correct.png"
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='main_div'>
      {/* <LoginHomeModel>
        <Button backgroundColor='#0275C2' texto="Entrar"/>
        <Button backgroundColor='#38B6FF' texto="Cadastrar"/>
        <Button backgroundColor='#0275C2' texto="Jogar"/>
        <Button backgroundColor='#0275C2' texto="Ranking"/>
        <Button backgroundColor='#0275C2' texto="Como jogar"/>
        <Button backgroundColor='#0275C2' texto="Artigos"/>
        <Button backgroundColor='#0275C2' texto="Créditos"/>

        <FormField
          borderColor="#38B6FF"
          placeholder="Nome"
          type='text'
        />
        <FormField
          borderColor="#38B6FF"
          placeholder="Email"
          type='email'
        />
        <FormField
          borderColor="#38B6FF"
          placeholder="Senha"
          type='password'
        />

        <Button backgroundColor='#38B6FF' texto="Cadastrar"/>

        
      </LoginHomeModel> */}

      <QuestionCard
          question="O Manifesto sobre Cultura de Paz existe para:"
          answer1="Formar “mini-gandhis”"
          answer2="Apenas para filosofar sobre a vida"
          answer3="Para compreender melhor as violências e a paz na humanidade"
      />

      <FeedbackCard
          feedbackIcon={correct_image}
          feedbackPhrase="Você acertou!"
          text="É isso mesmo snviv  odfvfvfkjdf dfovdfjvdf dfvodfdfv dfovdfvdfnvdfov fovdfivndfvo dojnvdçdf d vdfivnvijd dfipvjdfvpdfv dfvi dfvhidf vdfiv dfvpd i ifvdfvdfvjdfvifvjdfiv vidfvjdfjvdfivndfiv jfvidfvdfvdfivpn dfv fvdfivdfivd fvid dfv dfp dfv dfvdufv dfv udifvpd dfvupidvdf vudfv dfd dfi vdfiv dfiv f" 
          feedbackLinkDoc="#" 
      />
    </div>
  
  )
}

export default App
