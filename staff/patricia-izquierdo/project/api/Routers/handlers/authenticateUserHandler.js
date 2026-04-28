import jwt from 'jsonwebtoken'

import { logic } from "../../logic/index.js"

export const authenticateUserHandler = (req, res) => {
    try {
        const { username, password } = req.body

        logic.authenticateUser(username, password)
            .then(userId => {
                const token = jwt.sign({ sub: userId }, process.env.JWT_SECRET, { expiresIn: '1h' })

                res.json(token)
            })
    } catch (error) {
        res.status(400).json({ error: error.constructor.name, message: error.message })
    }
}