import { ReviewModel } from '../mongoose/index.js'
import { ValidationError, ExistenceError, DuplicityError, CredentialError, OwnershipError, AuthError, SystemError } from '../../com/index.js'

export function deleteReview(reviewId) {
    return ReviewModel.deleteOne({ _id: reviewId })
        .catch(error => { throw new SystemError(error.message) })
        .then(result => { })
}