import { validate, ValidationError, ExistenceError, OwnershipError } from '../../com/index.js'
import { data, ReviewData } from '../data/index.js'

export function modifyReview(userId, reviewId, title, image, stars, subject, body) {
    validate.id(userId, 'userId')
    validate.id(reviewId, 'reviewId')
    validate.name(title, 'title', 2)
    validate.url(image, 'image')
    validate.number(stars, 'stars')
    validate.name(subject, 'subject')
    validate.name(body, 'body', 5)

    return data.findUserById(userId)
        .then(userData => {
            if (!userData) throw new ExistenceError('user not found')

            return data.findReviewById(reviewId)
        })
        .then(reviewData => {
            if (!reviewData) throw new ExistenceError('review not found')

            if (reviewData.userId !== userId) throw new OwnershipError('review does not belong to user')

            return data.updateReview(new ReviewData(reviewId, userId, title, image, stars, subject, body)
            )
        })
}