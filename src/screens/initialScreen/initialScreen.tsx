import './initialScreen.css'
import { LoginHomeModel } from '../../components/loginHomeModel/loginHomeModel'
import { Button } from '../../components/button/button'

export const InitialScreen = () => {
    return  (
        <div className='initial_screen'>
            <LoginHomeModel>
            <Button
                linkHref="/game"
                backgroundColor='#0275C2'
                texto='Jogar'
            />
            <Button
                linkHref="/ranking"
                backgroundColor='#0275C2'
                texto='Ranking'
            />
            <Button
                linkHref="/howplay"
                backgroundColor='#0275C2'
                texto='Como jogar'
            />
            <Button
                linkHref="/articles"
                backgroundColor='#0275C2'
                texto='Artigos'
            />
            <Button
                linkHref="/credits"
                backgroundColor='#0275C2'
                texto='Créditos'
            />
        </LoginHomeModel>
        </div>
        
    )
}