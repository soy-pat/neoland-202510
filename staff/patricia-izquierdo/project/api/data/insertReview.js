import { ReviewModel } from '../mongoose/index.js'
import { ValidationError, ExistenceError, DuplicityError, CredentialError, OwnershipError, AuthError, SystemError } from '../../com/index.js'

export function insertReview(reviewData) {
    const reviewModel = new ReviewModel(reviewData)

    return reviewModel.save()
        .catch(error => { throw new SystemError(error.message) })
        .then(reviewModel => { })
}