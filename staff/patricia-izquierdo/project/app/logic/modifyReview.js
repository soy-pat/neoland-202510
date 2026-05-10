import { data } from '../data/index.js'
import { validate, ValidationError, ExistenceError, DuplicityError, CredentialError, OwnershipError, AuthError, SystemError } from '../../com/index.js'

export function modifyReview(reviewId, title, image, stars, subject, body) {
    validate.name(title, 'title', 2)
    validate.url(image, 'image')
    validate.number(stars, 'stars')
    validate.name(subject, 'subject')
    validate.name(body, 'body', 5)

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