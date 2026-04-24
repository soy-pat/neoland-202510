import { data, ReviewData } from '../data/index.js'

import { ID_REGEX, URL_REGEX } from 'com'

export function addReview(userId, title, image, stars, subject, body) {
    if (typeof userId !== 'string') throw new Error(`invalid userId type`)
    if (!ID_REGEX.test(userId)) throw new Error(`invalid userId format`)

    if (typeof title !== 'string') throw new Error('invalid title type')
    if (title.length < 2) throw new Error('invalid title length')

    if (typeof image !== 'string') throw new Error('invalid image type')
    if (!URL_REGEX.test(image)) throw new Error('invalid image format')

    if (typeof stars !== 'number' || isNaN(stars)) throw new Error('invalid stars type')

    if (typeof subject !== 'string') throw new Error('invalid subject type')
    if (subject.length < 1) throw new Error('invalid subject length')

    if (typeof body !== 'string') throw new Error('invalid body type')
    if (body.length < 5) throw new Error('invalid body length')

    return data.findUserById(userId)
        .then(user => {
            if (!user) throw new Error('user not found')

            const review = new ReviewData(null, userId, title, image, stars, subject, body)

            return data.insertReview(review)
        })
}