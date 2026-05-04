import { data } from '../data/index.js'
import { ValidationError, ExistenceError, DuplicityError, CredentialError, OwnershipError, AuthError, SystemError } from '../../com/index.js'

export function getReviews() {
    if (data.getToken() === null) throw new AuthError('user not logged in')

    return fetch(`${import.meta.env.VITE_API_URL}/reviews`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${data.getToken()}`
        }
    })
        .catch(error => { throw new SystemError('connection error') })
        .then(res => {
            const { status } = res

            if (status === 200)
                return res.json()
                    .catch(error => { throw new SystemError('json error') })
                    .then(reviews => reviews)

            return res.json()
                .catch(error => { throw new SystemError('json error') })
                .then(body => {
                    const { error, message } = body
                    throw new SystemError(message)
                })
        })
}
