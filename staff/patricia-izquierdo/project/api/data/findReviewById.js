import { ReviewModel } from '../mongoose/schemas/reviewSchema'
import { ReviewData } from './ReviewData'

export function findReviewById(reviewId) {
    return ReviewModel.findById(reviewId)
        .catch(error => { throw new Error(error.message) })
        .then(reviewModel => {
            if (!reviewModel) return null

            const { id, userId, title, image, stars, subject, body } = reviewModel

            return new ReviewData(id, userId.toString(), title, image, stars, subject, body)
        })
}