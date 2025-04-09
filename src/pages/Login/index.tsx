import MyInput from '../../components/MyInput'
import './styles.scss'

export default function LoginPage() {

    let username = ''
    let password = ''

    function signIn() {
        if (username === 'uedsonreis' && password === '123456') {
            alert('Usuário logado com sucesso')
        } else {
            alert('Login/senha inválido(a)')
        }
    }

    return (
        <div className='login-page'>
            <header>Página de Acesso</header>
            
            <main>
                <MyInput label='Login' value={username} change={value => username = value} />
                <MyInput label='Senha' value={password} change={value => password = value} type="password" />
            </main>

            <footer>
                <button onClick={signIn}>Entrar</button>
            </footer>
        </div>
    )
}