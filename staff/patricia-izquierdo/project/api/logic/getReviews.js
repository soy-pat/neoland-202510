import { data, ReviewData } from '../data/index.js'

import { ID_REGEX } from 'com'

export function getReviews(userId) {
    if (typeof userId !== 'string') throw new Error(`invalid userId type`)
    if (!ID_REGEX.test(userId)) throw new Error(`invalid userId format`)

    return data.findUserById(userId)
        .then(userData => {
            if (!userData) throw new Error('user not found')

            return data.findReviewsByUserId(userId)
        })
        .then(reviewDatas => reviewDatas.map(reviewModel => {
            const { id, userId, title, image, stars, subject, body } = reviewModel

            return new ReviewData(id, userId, title, image, stars, subject, body)
        }))
}