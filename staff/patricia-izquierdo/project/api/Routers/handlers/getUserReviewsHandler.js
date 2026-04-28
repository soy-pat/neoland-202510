import { logic } from "../../logic/index.js"

export const getUserReviewsHandler = (req, res) => {
    try {
        const { userId } = req.params

        const reviews = logic.getUserReviews(userId)
            .then(reviews => res.json(reviews))
            .catch(error => res.status(400).json({ error: error.constructor.name, message: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.constructor.name, message: error.message })
    }
}