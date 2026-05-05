import { logic } from '../../logic/index.js'

export const getUserReviewHandler = (req, res, next) => {
    try {
        const { reviewId } = req.params

        logic.getUserReview(reviewId)
            .then(review => res.json(review))
            .catch(error => next(error))
    } catch (error) {
        next(error)
    }
}