import { ReviewModel } from '../mongoose/index.js'
import { ValidationError, ExistenceError, DuplicityError, CredentialError, OwnershipError, AuthError, SystemError } from '../../com/index.js'

export function deleteAllReviews() {
    return ReviewModel.deleteMany()
        .catch(error => { throw new SystemError(error.message) })
        .then(result => { })
}