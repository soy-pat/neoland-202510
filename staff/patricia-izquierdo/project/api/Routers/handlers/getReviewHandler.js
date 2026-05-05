import { logic } from '../../logic/index.js'

export const getReviewHandler = (req, res, next) => {
    try {

        const { userId, params: { reviewId } } = req

        logic.getReview(userId, reviewId)
            .then(review => res.json(review))
            .catch(error => next(error))
    } catch (error) {
        next(error)
    }
}