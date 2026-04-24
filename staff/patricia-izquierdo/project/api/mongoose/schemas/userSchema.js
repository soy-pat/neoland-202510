import mongoose from 'mongoose'
import { EMAIL_REGEX, URL_REGEX } from 'com'

const { Schema } = mongoose

export const userSchema = new Schema({
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