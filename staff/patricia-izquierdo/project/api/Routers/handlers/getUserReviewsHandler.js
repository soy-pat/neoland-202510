import { logic } from '../../logic/index.js'

export const getUserReviewsHandler = (req, res, next) => {
    try {
        const { userId } = req.params

        logic.getUserReviews(userId)
            .then(reviews => res.json(reviews))
            .catch(error => next(error))
    } catch (error) {
        next(error)
    }
}