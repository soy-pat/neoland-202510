import { logic } from '../../logic/index.js'

export const modifyReviewHandler = (req, res, next) => {
    try {

        const { userId, params: { reviewId }, body: { title, image, stars, subject, body } } = req

        logic.modifyReview(userId, reviewId, title, image, stars, subject, body)
            .then(() => res.status(204).send())
            .catch(error => next(error))
    } catch (error) {
        next(error)
    }
}