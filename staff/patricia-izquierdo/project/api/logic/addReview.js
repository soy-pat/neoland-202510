import { data, ReviewData } from '../data/index.js'
import { ValidationError, ExistenceError, DuplicityError, CredentialError, OwnershipError, AuthError, SystemError } from '../../com/index.js'

import { ID_REGEX, URL_REGEX } from 'com'

export function addReview(userId, title, image, stars, subject, body) {
    if (typeof userId !== 'string') throw new ValidationError(`invalid userId type`)
    if (!ID_REGEX.test(userId)) throw new ValidationError(`invalid userId format`)

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
        .then(user => {
            if (!user) throw new ExistenceError('user not found')

            const review = new ReviewData(null, userId, title, image, stars, subject, body)

            return data.insertReview(review)
        })
}