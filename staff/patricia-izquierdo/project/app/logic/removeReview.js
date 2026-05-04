import { data } from '../data/index.js'
import { ValidationError, ExistenceError, DuplicityError, CredentialError, OwnershipError, AuthError, SystemError } from '../../com/index.js'

import { ID_REGEX } from 'com'

export function removeReview(reviewId) {
    if (data.getToken() === null) throw new AuthError('user not logged in')

    if (typeof reviewId !== 'string') throw new ValidationError(`invalid reviewId type`)
    if (!ID_REGEX.test(reviewId)) throw new ValidationError(`invalid reviewId format`)

    return fetch(`${import.meta.env.VITE_API_URL}/reviews/${reviewId}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${data.getToken()}`
        }
    })
        .catch(error => { throw new SystemError('connection error') })
        .then(res => {
            const { status } = res

            if (status === 204)
                return

            return res.json()
                .catch(error => { throw new SystemError('json error') })
                .then(body => {
                    const { error, message } = body
                    throw new SystemError(message)
                })
        })
}