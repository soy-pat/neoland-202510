import jwt from 'jsonwebtoken'

import { logic } from "../../logic/index.js"

export const addReviewHandler = (req, res) => {
    try {
        const { title, image, stars, subject, body } = req.body

        logic.addReview(userId, title, image, stars, subject, body)
            .then(() => res.status(201).send())
            .catch(error => res.status(400).json({ error: error.constructor.name, message: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.constructor.name, message: error.message })
    }
}