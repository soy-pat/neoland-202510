import jwt from 'jsonwebtoken'

import { logic } from "../../logic/index.js"

export const addReviewHandler = (req, res, next) => {
    try {
        const { userId } = req
        
        const { title, image, stars, subject, body } = req.body

        logic.addReview(userId, title, image, stars, subject, body)
            .then(() => res.status(201).send())
            .catch(error => next(error))
    } catch (error) {
        next(error)
    }
}