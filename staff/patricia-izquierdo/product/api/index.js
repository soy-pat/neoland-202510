// import express from 'express'
const express = require('express')

const { logic } = require('./logic')

const api = express()

const jsonBodyParser = express.json()

api.get('/', (req, res) => res.json({ message: 'Hello! from API ;)' }))

api.post('/users', jsonBodyParser, (req, res) => {
    try {
        const { name, email, username, password, passwordRepeat } = req.body

        logic.registerUser(name, email, username, password, passwordRepeat)

        res.send()
    } catch (error) {
        res.status(400).json({ error: error.constructor.name, message: error.message })
    }
})

api.listen(8080, () => console.log('API listening on port 8080'))