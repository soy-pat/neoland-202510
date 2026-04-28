import { logic } from "../../logic/index.js"

export const getReviewHandler = (req, res) => {
    try {

        const { userId, params: { reviewId } } = req

        logic.getReview(userId, reviewId)
            .then(review => res.json(review))
            .catch(error => res.status(400).json({ error: error.constructor.name, message: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.constructor.name, message: error.message })
    }
}