import { ReviewModel } from '../mongoose/schemas/reviewSchema'

export function insertReview(reviewData) {
    const reviewModel = new ReviewModel(reviewData)

    return reviewModel.save()
        .catch(error => { throw new Error(error.message) })
        .then(reviewModel => { })
}