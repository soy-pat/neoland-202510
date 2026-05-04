import { data, ReviewData } from '../data/index.js'
import { ValidationError, ExistenceError, DuplicityError, CredentialError, OwnershipError, AuthError, SystemError } from '../../com/index.js'

import { ID_REGEX } from 'com'

export function getReviews(userId) {
    if (typeof userId !== 'string') throw new ValidationError(`invalid userId type`)
    if (!ID_REGEX.test(userId)) throw new ValidationError(`invalid userId format`)

    return data.findUserById(userId)
        .then(userData => {
            if (!userData) throw new ExistenceError('user not found')

            return data.findReviewsByUserId(userId)
        })
        .then(reviewDatas => reviewDatas.map(reviewModel => {
            const { id, userId, title, image, stars, subject, body } = reviewModel

            return new ReviewData(id, userId, title, image, stars, subject, body)
        }))
}