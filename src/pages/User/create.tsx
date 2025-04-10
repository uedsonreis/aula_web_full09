import React from 'react'

import MyInput from '../../components/MyInput'
import MyButton from '../../components/MyButton'

import './styles.scss'

export default function CreateUser() {

    const [name, setName] = React.useState('')
    const [username, setUsername] = React.useState('')
    const [password, setPawssord] = React.useState('')
    const [confirmPass, setConfirmPass] = React.useState('')

    function save() {
        if (name === null || name.length < 1) {
            alert('Nome é obrigatório')
            return
        }
        if (username === null || username.length < 1) {
            alert('Login é obrigatório')
            return
        }
        if (password === null || password.length < 1) {
            alert('Senha é obrigatória')
            return
        }
        if (password !== confirmPass) {
            alert('Senha é inválida')
            return
        }

        console.log('Usuário salvo com sucesso')
    }

    return(
        <div className='create-user-page'>
            <header>Novo Usuário</header>
            
            <main>
                <MyInput label='Nome' value={name} change={setName} />
                <MyInput label='Login' value={username} change={setUsername} />
                <MyInput label='Senha' value={password} change={setPawssord} type='password' />
                <MyInput label='Confirmar Senha' value={confirmPass} change={setConfirmPass} type='password' />
            </main>

            <footer>
                <MyButton title='Salvar' click={save} />
            </footer>
        </div>
    )
}