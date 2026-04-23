import express from 'express'
import cors from 'cors'
import morganBody from 'morgan-body'
import jwt from 'jsonwebtoken'

import { logic } from './logic.js'

import { database } from './models.js'

database.connect(process.env.DB_URL)
    .then(() => {

        const { JsonWebTOkenError } = jwt

        const api = express()

        const jsonBodyParser = express.json()

        api.use(cors())

        api.use(jsonBodyParser)

        morganBody(api, {
            logAllReqHeader: true,
            logAllResHeader: true
        })
        api.get('/', (req, res) => res.json({ message: 'hello! :)' }))

        api.post('/users', (req, res) => {
            try {
                const { name, email, username, password, passwordRepeat } = req.body

                logic.registerUser(name, email, username, password, passwordRepeat)

                res.status(201).send()
            } catch (error) {
                res.status(400).json({ error: error.constructor.name, message: error.message })
            }
        })

        api.get('/users/me', (req, res, next) => {
            try {
                const token = req.headers.authorization.slice(7)

                const { sub: userId } = jwt.verify(token, process.env.JWT_SECRET)

                logic.getUser(userId)
                    .then(user => res.json(user))
                    .catch(error => res.status(400).json({ error: error.constructor.name, message: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.constructor.name, message: error.message })
            }
        })

        api.post('/users/auth', (req, res) => {
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
        })

        api.get('/users/:userId', (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)

                jwt.verify(token, process.env.JWT_SECRET)

                const { userId } = req.params

                logic.getUser(userId)
                    .then(user => res.json(user))
                    .catch(error => res.status(400).json({
                        error: error.constructor.name,
                        message: error.message
                    }))
            } catch (error) {
                res.status(400).json({
                    error: error.constructor.name,
                    message: error.message
                })
            }
        })

        api.get('/users/:userId/reviews', (req, res) => {
            try {
                const { userId } = req.params

                const reviews = logic.getUserReviews(userId)
                    .then(reviews => res.json(reviews))
            } catch (error) {
                res.status(400).json({ error: error.constructor.name, message: error.message })
            }
        })

        api.get('/searchABook/:reviewId', (req, res) => {
            try {
                const { reviewId } = req.params

                logic.getUserReview(reviewId)
                    .then(review => res.json(review))
                    .catch(error => res.status(400).json({ error: error.constructor.name, message: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.constructor.name, message: error.message })
            }
        })

        api.post('/reviews', (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)

                const { sub: userId } = jwt.verify(token, process.env.JWT_SECRET)

                const { title, image, stars, subject, body } = req.body

                logic.addReview(userId, title, image, stars, subject, body)

                res.status(201).send()
            } catch (error) {
                res.status(400).json({ error: error.constructor.name, message: error.message })
            }
        })

        api.get('/reviews', (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)

                const { sub: userId } = jwt.verify(token, process.env.JWT_SECRET)

                const reviews = logic.getReviews(userId)
                    .then(reviews => res.json(reviews))
            } catch (error) {
                res.status(400).json({ error: error.constructor.name, message: error.message })
            }
        })

        api.get('/reviews/search', (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)

                const { sub: userId } = jwt.verify(token, process.env.JWT_SECRET)

                const { title } = req.query

                logic.searchReviewsByTitle(userId, title)
                    .then(reviews => res.json(reviews))
            } catch (error) {
                res.status(400).json({ error: error.constructor.name, message: error.message })
            }
        })

        api.get('/reviews/:reviewId', (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)

                const { sub: userId } = jwt.verify(token, process.env.JWT_SECRET)

                const { reviewId } = req.params

                logic.getReview(userId, reviewId)
                    .then(review => res.json(review))
                    .catch(error => res.status(400).json({ error: error.constructor.name, message: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.constructor.name, message: error.message })
            }
        })

        api.delete('/reviews/:reviewId', (req, res) => {
            try {
                const token = req.headers.authorization.slice(7)

                const { sub: userId } = jwt.verify(token, process.env.JWT_SECRET)

                const { reviewId } = req.params

                logic.removeReview(userId, reviewId)
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).json({ error: error.constructor.name, message: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.constructor.name, message: error.message })
            }
        })

        api.listen(process.env.PORT, () => console.log(`API listening on port ${process.env.PORT}`))
    })
    .catch(error => console.error(error))
