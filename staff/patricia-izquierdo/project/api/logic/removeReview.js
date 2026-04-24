import { data } from '../data/index.js'

import { ID_REGEX } from 'com'

export function removeReview(userId, reviewId) {
    if (typeof userId !== 'string') throw new Error(`invalid userId type`)
    if (!ID_REGEX.test(userId)) throw new Error(`invalid userId format`)

    if (typeof reviewId !== 'string') throw new Error(`invalid reviewId type`)
    if (!ID_REGEX.test(reviewId)) throw new Error(`invalid reviewId format`)

    return data.findUserById(userId)
        .then(userData => {
            if (!userData) throw new Error('user not found')

            return data.findReviewById(reviewId)
        })
        .then(reviewData => {
            if (!reviewData) throw new Error('review not found')

            if (reviewData.userId !== userId) throw new Error('user not owner of review')

            return data.deleteReview(reviewId)
        })
}
