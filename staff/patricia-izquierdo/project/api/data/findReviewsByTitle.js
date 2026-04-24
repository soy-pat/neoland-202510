import { ReviewModel } from '../mongoose/schemas/reviewSchema'
import { ReviewData } from './models'

export function findReviewsByTitle(titleQuery) {
    return ReviewModel.find({ title: { $regex: titleQuery, $options: 'i' } })
        .catch(error => { throw new Error(error.message) })
        .then(reviewModels => reviewModels.map(reviewModel => {
            const { id, userId, title, image, stars, subject, body } = reviewModel

            return new ReviewData(id, userId.toString(), title, image, stars, subject, body)
        }))
}