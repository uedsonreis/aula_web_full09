import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as userService from '../../services/user.service'

import './styles.scss'

export default function HomePage() {
    const navigate = useNavigate()

    const [userList, setUserList] = React.useState([])

    function fetchUsers() {
        userService.getList().then(list => {
            setUserList(list)
        }).catch(error => {
            console.error('Erro ao recuperar a lista de usuários: ', error)
            navigate('/login')
        })
    }

    React.useEffect(() => {
        fetchUsers()
    }, [])

    function goToAdd() {
        navigate('/users/create')
    }

    function remove(id: number) {
        userService.remove(id).then(() => {
            fetchUsers()
        }).catch(error => {
            console.error('Erro ao deletar um usuário: ', error)
            navigate('/login')
        })
    }

    return (
        <div className='home-page'>
            <header>
                <div></div>
                <h2>Lista de Usuários</h2>
                <button onClick={goToAdd}>Add</button>
            </header>

            <main>
                {
                    userList.map((user: any) => {
                        return (
                            <div className='list-item'>
                                <div className='title'>{user.name}</div>
                                <div>{user.id}</div>
                                <div className='sub-title'>{user.username}</div>
                                <button onClick={() => remove(user.id)}>Remover</button>
                            </div>
                        )
                    })
                }
            </main>

            <footer>
                Temos {userList.length} usuários cadastros no sistema.
            </footer>
        </div>
    )
}