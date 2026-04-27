import { data } from '../data/index.js'

import { ID_REGEX } from 'com'

export function getReview(reviewId) {
    if (data.getToken() === null) throw new Error('user not logged in')

    if (typeof reviewId !== 'string') throw new Error(`invalid reviewId type`)
    if (!ID_REGEX.test(reviewId)) throw new Error(`invalid reviewId format`)

    return fetch(`${import.meta.env.VITE_API_URL}/reviews/${reviewId}`, {
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
                    .then(review => review)

            return res.json()
                .catch(error => { throw new Error('json error') })
                .then(body => {
                    const { error, message } = body
                    throw new Error(message)
                })
        })
}