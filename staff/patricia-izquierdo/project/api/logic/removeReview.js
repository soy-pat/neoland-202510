import { data } from '../data/index.js'
import { validate, ValidationError, ExistenceError, DuplicityError, CredentialError, OwnershipError, AuthError, SystemError } from '../../com/index.js'

export function removeReview(userId, reviewId) {
    validate.id(userId, 'userId')
    validate.id(reviewId, 'reviewId')

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
