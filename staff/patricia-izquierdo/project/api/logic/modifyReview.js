import { ExistenceError, OwnershipError } from 'com'
import { data, ReviewData } from '../data/index.js'

import { ID_REGEX, URL_REGEX } from 'com'

export function modifyReview(userId, reviewId, title, image, stars, subject, body) {
    if (typeof userId !== 'string') throw new ValidationError(`invalid userId type`)
    if (!ID_REGEX.test(userId)) throw new ValidationError(`invalid userId format`)

    if (typeof reviewId !== 'string') throw new ValidationError(`invalid reviewId type`)
    if (!ID_REGEX.test(reviewId)) throw new ValidationError(`invalid reviewId format`)

    if (typeof title !== 'string') throw new ValidationError('invalid title type')
    if (title.length < 2) throw new ValidationError('invalid title length')

    if (typeof image !== 'string') throw new ValidationError('invalid image type')
    if (!URL_REGEX.test(image)) throw new ValidationError('invalid image format')

    if (typeof stars !== 'number' || isNaN(stars)) throw new ValidationError('invalid stars type')

    if (typeof subject !== 'string') throw new ValidationError('invalid subject type')
    if (subject.length < 1) throw new ValidationError('invalid subject length')

    if (typeof body !== 'string') throw new ValidationError('invalid body type')
    if (body.length < 5) throw new ValidationError('invalid body length')

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