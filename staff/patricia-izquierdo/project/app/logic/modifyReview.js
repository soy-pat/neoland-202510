import { data } from '../data/index.js'
import { ValidationError, ExistenceError, DuplicityError, CredentialError, OwnershipError, AuthError, SystemError } from '../../com/index.js'

import { URL_REGEX } from 'com'

export function modifyReview(reviewId, title, image, stars, subject, body) {
    if (typeof title !== 'string') throw new ValidationError('invalid title type')
    if (title.length < 2) throw new ValidationError('invalid title length')

    if (typeof image !== 'string') throw new ValidationError('invalid image type')
    if (!URL_REGEX.test(image)) throw new ValidationError('invalid image format')

    if (typeof stars !== 'number' || isNaN(stars)) throw new ValidationError('invalid stars type')

    if (typeof subject !== 'string') throw new ValidationError('invalid subject type')
    if (subject.length < 1) throw new ValidationError('invalid subject length')

    if (typeof body !== 'string') throw new ValidationError('invalid body type')
    if (body.length < 5) throw new ValidationError('invalid body length')

    return fetch(`${import.meta.env.VITE_API_URL}/reviews/${reviewId}`, {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${data.getToken()}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, image, stars, subject, body })
    })
        .catch(error => { throw new SystemError('connection error') })
        .then(res => {
            const { status } = res

            if (status === 204)
                return

            return res.json()
                .then(body => {
                    const { error, message } = body
                    throw new SystemError(message)
                })
        })
}