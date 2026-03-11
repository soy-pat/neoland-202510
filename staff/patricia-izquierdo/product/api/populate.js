import mongoose from 'mongoose'

const { Schema, ObjectId, model } = mongoose

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const URL_REGEX = /(www|http:|https:)+[^\s]+[\w]/

const userSchema = new Schema({
    name: {
        type: String,
        minLength: 1,
        required: true
    },

    email: {
        type: String,
        minLength: 6,
        match: EMAIL_REGEX,
        required: true,
        unique: true
    },

    username: {
        type: String,
        minLength: 3,
        required: true,
        unique: true
    },

    password: {
        type: String,
        minLength: 8,
        required: true
    },

    image: {
        type: String,
        match: URL_REGEX,
        default: null
    },

    role: {
        type: String,
        enum: ['regular', 'administrator'],
        default: 'regular',
        required: true
    }
})

const petSchema = new Schema({
    owner: {
        type: ObjectId
    },

    name: {
        type: String,
        minLength: 1,
        required: true
    },

    birthdate: {
        type: Date,
        required: true
    },

    weight: {
        type: Number,
        required: true
    },

    image: {
        type: String,
        match: URL_REGEX,
        required: true
    }
})

const User = model('User', userSchema)
const Pet = model('Pet', petSchema)

mongoose.connect('mongodb://localhost:27017/product')

const wendy = new User({ name: 'Wendy Darling', email: 'wendy@darling.com', username: 'wendydarling', password: '123123123' })
const peter = new User({ name: 'Peter Pan', email: 'peter@pan.com', username: 'peterpan', password: '123123123' })

Promise.all([wendy.save(), peter.save()])
    .then(([wendy, peter]) => {
        console.log(wendy, peter)

        const tor = new Pet({ owner: wendy.id, name: 'Tor', birthdate: new Date('2020-01-20'), weight: 3, image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcG1rMGp0b2Flazd6OGh3amFlcTZ1YWM1ejV3c2plMG04NmtzeG5sbiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/cYpV2OjeIyBRu5GpHQ/giphy.gif' })

        const corito = new Pet({ owner: wendy.id, name: 'Corito', birthdate: new Date('2025-04-26'), weight: 0.1, image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2RscmxobGp6Z2RiNDk4b2w3YmwzcjM4NnFzOG01MWY3cjBvZ2VnYSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/hSLfmcaoLe2D2IBSNN/giphy.gif' })

        const salami = new Pet({ owner: peter.id, name: 'Salami', birthdate: new Date('2022-08-18'), weight: 8, image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGlnZzExdnhoNXY4NDZ2MnY1d2c4MWk0MzczNDJvMTJtd2sxMndvayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/YggtBfM5OkFsQ/giphy.gif' })

        return Promise.all([tor.save(), corito.save(), salami.save()])
    })
    .then(([tor, corito, salami]) => console.log(tor, corito, salami))
    .catch(error => console.error(error))