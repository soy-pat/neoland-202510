import { SystemError } from 'com'
import { ReviewModel } from '../mongoose/index.js'

export function updateReview(reviewData) {
    return ReviewModel.updateOne({ _id: reviewData.id }, { $set: reviewData })
        .catch(error => { throw new SystemError(error.message) })
        .then(result => { })
}