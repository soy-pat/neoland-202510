import { logic } from "../../logic/index.js"

export const getUserReviewHandler = (req, res) => {
    try {
        const { reviewId } = req.params

        logic.getUserReview(reviewId)
            .then(review => res.json(review))
            .catch(error => res.status(400).json({ error: error.constructor.name, message: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.constructor.name, message: error.message })
    }
}