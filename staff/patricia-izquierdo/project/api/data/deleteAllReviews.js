import { ReviewModel } from '../mongoose/index.js'

export function deleteAllReviews() {
    return ReviewModel.deleteMany()
        .catch(error => { throw new Error(error.message) })
        .then(result => { })
}