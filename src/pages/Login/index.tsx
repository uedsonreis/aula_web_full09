import { useNavigate } from 'react-router-dom'

import { login } from '../../services/auth.service'

import MyButton from '../../components/MyButton'
import MyInput from '../../components/MyInput'

import './styles.scss'

export default function LoginPage() {

    const navigate = useNavigate()

    let username = ''
    let password = ''

    function signIn() {
        login(username, password).then(signed => {
            if (signed) {
                navigate('/home')
            } else {
                alert('Login/senha inválido(a)')
            }
        })
    }

    return (
        <div className='login-page'>
            <header>Página de Acesso</header>
            
            <main>
                <MyInput label='Login' change={value => username = value} />
                <MyInput label='Senha' change={value => password = value} type="password" />
            </main>

            <footer>
                <MyButton title='Entrar' click={signIn} />
            </footer>
        </div>
    )
}