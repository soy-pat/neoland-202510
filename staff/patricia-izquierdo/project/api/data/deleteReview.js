import { ReviewModel } from '../mongoose/index.js'

export function deleteReview(reviewId) {
    return ReviewModel.deleteOne({ _id: reviewId })
        .catch(error => { throw new Error(error.message) })
        .then(result => { })
}