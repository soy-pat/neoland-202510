import { ReviewModel } from '../mongoose/index.js'

export function insertReview(reviewData) {
    const reviewModel = new ReviewModel(reviewData)

    return reviewModel.save()
        .catch(error => { throw new Error(error.message) })
        .then(reviewModel => { })
}