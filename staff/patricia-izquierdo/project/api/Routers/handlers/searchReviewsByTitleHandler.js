import { logic } from "../../logic/index.js"

export const searchReviewsByTitleHandler = (req, res) => {
    try {
        const { userId } = req

        const { title } = req.query

        logic.searchReviewsByTitle(userId, title)
            .then(reviews => res.json(reviews))
            .catch(error => res.status(400).json({ error: error.constructor.name, message: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.constructor.name, message: error.message })
    }
}