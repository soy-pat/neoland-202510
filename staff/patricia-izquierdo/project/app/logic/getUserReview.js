import { data } from '../data/index.js'
import { validate, ValidationError, ExistenceError, DuplicityError, CredentialError, OwnershipError, AuthError, SystemError } from '../../com/index.js'

export function getUserReview(reviewId) {
    if (data.getToken() === null) throw new AuthError('user not logged in')

    validate.id(reviewId, 'reviewId')

    return fetch(`${import.meta.env.VITE_API_URL}/reviews/searchABook/${reviewId}`, {
        method: 'GET'
    })
        .catch(error => { throw new SystemError('connection error') })
        .then(res => {
            const { status } = res

            if (status === 200)
                return res.json()
                    .catch(error => { throw new SystemError('json error') })
                    .then(review => review)

            return res.json()
                .catch(error => { throw new SystemError('json error') })
                .then(body => {
                    const { error, message } = body
                    throw new SystemError(message)
                })
        })
}