import { data } from '../data/index.js'
import { ValidationError, ExistenceError, DuplicityError, CredentialError, OwnershipError, AuthError, SystemError } from '../../com/index.js'

export function getFoundReviews(titleSearched) {
    if (typeof titleSearched !== 'string') throw new ValidationError('invalid titleSearched type')
    if (titleSearched.length < 1) throw new ValidationError('invalid titleSearched length')

    return fetch(`${import.meta.env.VITE_API_URL}/reviews/search?title=${encodeURIComponent(titleSearched)}`, {
        headers: {
            Authorization: `Bearer ${sessionStorage.token}`
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