
import './styles.scss'

export default function LoginPage() {

    let username = ''
    let password = ''

    function signIn() {
        console.log('Login: '+ username)
        console.log('Senha: '+ password)
    }

    return (
        <div className='login-page'>
            <header>Página de Acesso</header>
            
            <main>
                <div>
                    <div>Login:</div>
                    <input type="text" onChange={e => username = e.target.value} />
                </div>
                
                <div>
                    <div>Senha:</div>
                    <input type="password" onChange={e => password = e.target.value}/>
                </div>
            </main>

            <footer>
                <button onClick={signIn}>Entrar</button>
            </footer>
        </div>
    )
}