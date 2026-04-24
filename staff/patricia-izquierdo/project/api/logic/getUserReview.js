import { data, ReviewData } from '../data/index.js'

import { ID_REGEX } from 'com'

export function getUserReview(reviewId) {
    if (typeof reviewId !== 'string') throw new Error(`invalid reviewId type`)
    if (!ID_REGEX.test(reviewId)) throw new Error(`invalid reviewId format`)

    return data.findReviewById(reviewId)
        .then(reviewData => {
            if (!reviewData) throw new Error('review not found')

            const { id, userId, title, image, stars, subject, body } = reviewData

            return new ReviewData(id, userId, title, image, stars, subject, body)
        })
}