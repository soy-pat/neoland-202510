import { data } from '../data/index.js'

export function getLoggedInUser() {
    if (data.getToken() === null) throw new Error('user not logged in')

    return fetch(`${import.meta.env.VITE_API_URL}/users/me`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${data.getToken()}`
        }
    })
        .catch(error => { throw new Error('connection error') })
        .then(res => {
            const { status } = res

            if (status === 200)
                return res.json()
                    .catch(error => { throw new Error('json error') })
                    .then(user => user)

            return res.json()
                .catch(error => { throw new Error('json error') })
                .then(body => {
                    const { error, message } = body
                    throw new Error(message)
                })
        })
}