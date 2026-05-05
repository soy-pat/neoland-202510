import { logic } from '../../logic/index.js'

export const removeReviewHandler = (req, res, next) => {
    try {
        const { userId, params: { reviewId } } = req

        logic.removeReview(userId, reviewId)
            .then(() => res.status(204).send())
            .catch(error => next(error))
    } catch (error) {
        next(error)
    }
}