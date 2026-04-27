import { data } from '../data/index.js'

import { URL_REGEX } from 'com'

export function addReview(title, image, stars, subject, body) {
    if (typeof title !== 'string') throw new Error('invalid title type')
    if (title.length < 2) throw new Error('invalid title length')

    if (typeof image !== 'string') throw new Error('invalid image type')
    if (!URL_REGEX.test(image)) throw new Error('invalid image format')

    if (typeof stars !== 'number' || isNaN(stars)) throw new Error('invalid stars type')

    if (typeof subject !== 'string') throw new Error('invalid subject type')
    if (subject.length < 1) throw new Error('invalid subject length')

    if (typeof body !== 'string') throw new Error('invalid body type')
    if (body.length < 5) throw new Error('invalid body length')

    return fetch(`${import.meta.env.VITE_API_URL}/reviews`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${data.getToken()}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, image, stars, subject, body })
    })
        .then(res => {
            const { status } = res

            if (status === 201)
                return

            return res.json()
                .then(body => {
                    const { error, message } = body
                    throw new Error(message)
                })
        })
}