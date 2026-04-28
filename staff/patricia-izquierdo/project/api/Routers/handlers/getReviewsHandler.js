import { logic } from "../../logic/index.js"

export const getReviewsHandler = (req, res) => {
    try {
        const { userId } = req

        const reviews = logic.getReviews(userId)
            .then(reviews => res.json(reviews))
            .catch(error => res.status(400).json({ error: error.constructor.name, message: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.constructor.name, message: error.message })
    }
}