import mongoose from 'mongoose'
import { EMAIL_REGEX, URL_REGEX } from 'com'

const { Schema, ObjectId } = mongoose

export const reviewSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
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