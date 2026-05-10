import { validate, ValidationError, ExistenceError, DuplicityError, CredentialError, OwnershipError, AuthError, SystemError } from '../../com/index.js'
import { data, ReviewData } from '../data/index.js'

export function getUserReview(reviewId) {
    validate.id(reviewId, 'reviewId')

    return data.findReviewById(reviewId)
        .then(reviewData => {
            if (!reviewData) throw new ExistenceError('review not found')

            const { id, userId, title, image, stars, subject, body } = reviewData

            return new ReviewData(id, userId, title, image, stars, subject, body)
        })
}