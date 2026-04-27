import { data } from '../data/index.js'

export function getUser(userId) {
    if (typeof userId !== 'string') throw new Error('invalid userId type')
    if (userId.length < 1) throw new Error('invalid userId length')

    return fetch(`${import.meta.env.VITE_API_URL}/users/${userId}`, {
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