import { logic } from '../../logic/index.js'

export const getReviewsHandler = (req, res, next) => {
    try {
        const { userId } = req

        logic.getReviews(userId)
            .then(reviews => res.json(reviews))
            .catch(error => next(error))
    } catch (error) {
        next(error)
    }
}