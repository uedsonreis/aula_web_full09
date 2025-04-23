import { getToken } from './auth.service'

const url = 'http://localhost:3030/users'

export async function save(name: string, username: string, password: string) {
    const token = getToken()

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ name, username, password })
    })

    return response.status
}

export async function getList() {
    const token = getToken()

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })

    if (response.status !== 200) throw new Error()

    return await response.json()
}

export async function remove(id: number) {
    const token = getToken()

    const response = await fetch(url +"/"+ id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })

    if (response.status !== 200) throw new Error()

    return await response.json()
}

