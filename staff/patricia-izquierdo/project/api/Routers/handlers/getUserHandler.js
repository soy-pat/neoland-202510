import { logic } from "../../logic/index.js"

export const getUserHandler = (req, res) => {
    try {
        const { userId } = req

        logic.getUser(userId)
            .then(user => res.json(user))
            .catch(error => res.status(400).json({ error: error.constructor.name, message: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.constructor.name, message: error.message })
    }
}