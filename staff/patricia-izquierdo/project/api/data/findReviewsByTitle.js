import { ReviewModel } from '../mongoose/index.js'
import { ReviewData } from './models/index.js'
import { ValidationError, ExistenceError, DuplicityError, CredentialError, OwnershipError, AuthError, SystemError } from '../../com/index.js'

export function findReviewsByTitle(titleQuery) {
    return ReviewModel.find({ title: { $regex: titleQuery, $options: 'i' } })
        .catch(error => { throw new SystemError(error.message) })
        .then(reviewModels => reviewModels.map(reviewModel => {
            const { id, userId, title, image, stars, subject, body } = reviewModel

            return new ReviewData(id, userId.toString(), title, image, stars, subject, body)
        }))
}