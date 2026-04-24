import { ReviewModel } from '../mongoose/schemas/reviewSchema'

export function deleteAllReviews() {
    return ReviewModel.deleteMany()
        .catch(error => { throw new Error(error.message) })
        .then(result => { })
}