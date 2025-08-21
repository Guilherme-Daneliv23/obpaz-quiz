import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//Telas
import { InitialScreen } from './screens/initialScreen/initialScreen'
import { GameScreen } from './screens/gameScreen/gameScreen'
import { LoginScreen } from './screens/loginScreen/loginScreen'
import { SingInScreen } from './screens/singInScreen/singInScreen'
import { SingUpScreen } from './screens/singUpScreen/singUpScreen'
import { RankingScreen } from './screens/rankingScreen/rankingScreen'
import { HowPlayScreen } from './screens/howPlayScreen/howPlayScreen'
import { ArticlesScreen } from './screens/articlesScreen/articlesScreen'
import { CreditsScreen } from './screens/creditsScreen/creditsScreen'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/cadastro" element={<SingUpScreen />} />
        <Route path="/login" element={<SingInScreen />} />
        <Route path="/home" element={<InitialScreen />} />
        <Route path="/game" element={<GameScreen />} />
        <Route path="/ranking" element={<RankingScreen />} />
        <Route path="/howplay" element={<HowPlayScreen />} />
        <Route path="/articles" element={<ArticlesScreen />} />
        <Route path="/credits" element={<CreditsScreen />} />
      </Routes>
    </Router>
  )
}

export default App
