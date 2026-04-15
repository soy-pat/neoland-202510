import mongoose from "mongoose"

const { Schema, ObjectId, model } = mongoose

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

const userSchema = new Schema({
    name: {
        type: String,
        minLength: 1,
        required: true
    },
    email: {
        type: String,
        minLength: 6,
        required: true,
        unique: true,
        match: EMAIL_REGEX
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
    }
})

const reviewSchema = new Schema({
    userId: {
        type: ObjectId
    },
    title: {
        type: String,
        minLength: 2,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    stars: {
        type: Number,
        required: true
    },
    subject: {
        type: String,
        minLength: 2,
        required: true
    },
    body: {
        type: String,
        minLength: 5,
        required: true
    }
})

export const UserModel = model('User', userSchema)
export const ReviewModel = model('Review', reviewSchema)

export const database = mongoose