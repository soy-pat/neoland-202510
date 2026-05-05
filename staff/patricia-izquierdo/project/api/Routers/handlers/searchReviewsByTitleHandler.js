import { logic } from '../../logic/index.js'

export const searchReviewsByTitleHandler = (req, res, next) => {
    try {
        const { userId } = req

        const { title } = req.query

        logic.searchReviewsByTitle(userId, title)
            .then(reviews => res.json(reviews))
            .catch(error => next(error))
    } catch (error) {
        next(error)
    }
}