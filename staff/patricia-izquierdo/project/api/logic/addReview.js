import { data, ReviewData } from '../data/index.js'
import { validate, ValidationError, ExistenceError, DuplicityError, CredentialError, OwnershipError, AuthError, SystemError } from '../../com/index.js'

export function addReview(userId, title, image, stars, subject, body) {
    validate.id(userId, 'userId')
    validate.name(title, 'title', 2)
    validate.url(image, 'image')
    validate.number(stars, 'stars')
    validate.name(subject, 'subject')
    validate.name(body, 'body', 5)

    return data.findUserById(userId)
        .then(user => {
            if (!user) throw new ExistenceError('user not found')

            const review = new ReviewData(null, userId, title, image, stars, subject, body)

            return data.insertReview(review)
        })
}