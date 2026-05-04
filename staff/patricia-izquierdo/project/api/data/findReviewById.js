import { ReviewModel } from '../mongoose/index.js'
import { ReviewData } from './models/index.js'
import { ValidationError, ExistenceError, DuplicityError, CredentialError, OwnershipError, AuthError, SystemError } from '../../com/index.js'

export function findReviewById(reviewId) {
    return ReviewModel.findById(reviewId)
        .catch(error => { throw new SystemError(error.message) })
        .then(reviewModel => {
            if (!reviewModel) return null

            const { id, userId, title, image, stars, subject, body } = reviewModel

            return new ReviewData(id, userId.toString(), title, image, stars, subject, body)
        })
}