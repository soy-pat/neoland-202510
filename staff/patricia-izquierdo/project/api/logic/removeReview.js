import { data } from '../data/index.js'
import { ValidationError, ExistenceError, DuplicityError, CredentialError, OwnershipError, AuthError, SystemError } from '../../com/index.js'

import { ID_REGEX } from 'com'

export function removeReview(userId, reviewId) {
    if (typeof userId !== 'string') throw new ValidationError(`invalid userId type`)
    if (!ID_REGEX.test(userId)) throw new ValidationError(`invalid userId format`)

    if (typeof reviewId !== 'string') throw new ValidationError(`invalid reviewId type`)
    if (!ID_REGEX.test(reviewId)) throw new ValidationError(`invalid reviewId format`)

    return data.findUserById(userId)
        .then(userData => {
            if (!userData) throw new ExistenceError('user not found')

            return data.findReviewById(reviewId)
        })
        .then(reviewData => {
            if (!reviewData) throw new ExistenceError('review not found')

            if (reviewData.userId !== userId) throw new OwnershipError('user not owner of review')

            return data.deleteReview(reviewId)
        })
}
