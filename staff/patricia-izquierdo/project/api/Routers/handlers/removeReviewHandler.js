import { logic } from "../../logic/index.js"

export const removeReviewHandler = (req, res) => {
    try {
        const { userId, params: { reviewId } } = req

        logic.removeReview(userId, reviewId)
            .then(() => res.status(204).send())
            .catch(error => res.status(400).json({ error: error.constructor.name, message: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.constructor.name, message: error.message })
    }
}