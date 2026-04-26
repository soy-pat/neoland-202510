import { ReviewModel } from '../mongoose/index.js'
import { ReviewData } from './models/index.js'

export function findReviewsByUserId(userId) {
    return ReviewModel.find({ userId })
        .catch(error => { throw new Error(error.message) })
        .then(reviewModels => reviewModels.map(reviewModel => {
            const { id, userId, title, image, stars, subject, body } = reviewModel

            return new ReviewData(id, userId.toString(), title, image, stars, subject, body)
        }))
}