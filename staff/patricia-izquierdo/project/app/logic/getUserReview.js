import { data } from '../data/index.js'
import { ValidationError, ExistenceError, DuplicityError, CredentialError, OwnershipError, AuthError, SystemError } from '../../com/index.js'

import { ID_REGEX } from 'com'

export function getUserReview(reviewId) {
    if (data.getToken() === null) throw new AuthError('user not logged in')

    if (typeof reviewId !== 'string') throw new ValidationError(`invalid reviewId type`)
    if (!ID_REGEX.test(reviewId)) throw new ValidationError(`invalid reviewId format`)

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