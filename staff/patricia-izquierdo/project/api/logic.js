import bcrypt from 'bcryptjs'

import { data, UserData, ReviewData } from './data.js'

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const URL_REGEX = /(www|http:|https:)+[^\s]+[\w]/
const ID_REGEX = /^[0-9a-fA-F]{24}$/

class Logic {
    registerUser(name, email, username, password, passwordRepeat) {

        if (typeof name !== 'string') throw new Error('invalid name type')
        if (name.length < 1) throw new Error('invalid name length')

        if (typeof email !== 'string') throw new Error('invalid email type')
        if (email.length < 6) throw new Error('invalid email length')
        if (!EMAIL_REGEX.test(email)) throw new Error('invalid email format')

        if (typeof username !== 'string') throw new Error('invalid username type')
        if (username.length < 3) throw new Error('invalid username length')

        if (typeof password !== 'string') throw new Error('invalid password type')
        if (password.length < 8) throw new Error('invalid password length')

        if (typeof passwordRepeat !== 'string') throw new Error('invalid password repeat type')
        if (passwordRepeat.length < 8) throw new Error('invalid password repeat length')

        if (password !== passwordRepeat) throw new Error('password and password repeat do not match')

        return data.findUserByEmail(email)
            .then(userData => {
                if (userData !== null) throw new Error('user email already exists')

                return data.findUserByUsername(username)
                    .then(userData => {
                        if (userData !== null) throw new Error('user username already exists')

                        return bcrypt.hash(password, 10)
                            .catch(error => { throw new Error(error.message) })
                    })
                    .then(hash => {
                        const userData = new UserData(null, name, email, username, hash, null)

                        return data.insertUser(userData)
                    })
            })
    }
    authenticateUser(username, password) {
        if (typeof username !== 'string') throw new Error('invalid username type')
        if (username.length < 1) throw new Error('invalid username length')

        if (typeof password !== 'string') throw new Error('invalid password type')
        if (password.length < 8) throw new Error('invalid password length')

        return data.findUserByUsername(username)
            .then(userData => {
                if (userData === null) throw new Error('user not found')

                return bcrypt.compare(password, userData.password)
                    .catch(error => { throw new Error(error.message) })
                    .then(match => {
                        if (!match) throw new Error('incorrect password')

                        return userData.id
                    })
            })
    }

    addReview(userId, title, image, stars, subject, body) {
        if (typeof userId !== 'string') throw new Error(`invalid userId type`)
        if (!ID_REGEX.test(userId)) throw new Error(`invalid userId format`)

        if (typeof title !== 'string') throw new Error('invalid title type')
        if (title.length < 2) throw new Error('invalid title length')

        if (typeof image !== 'string') throw new Error('invalid image type')
        if (!URL_REGEX.test(image)) throw new Error('invalid image format')

        if (typeof stars !== 'number' || isNaN(stars)) throw new Error('invalid stars type')

        if (typeof subject !== 'string') throw new Error('invalid subject type')
        if (subject.length < 1) throw new Error('invalid subject length')

        if (typeof body !== 'string') throw new Error('invalid body type')
        if (body.length < 5) throw new Error('invalid body length')

        return data.findUserById(userId)
            .then(user => {
                if (!user) throw new Error('user not found')

                const review = new ReviewData(null, userId, title, image, stars, subject, body)

                return data.insertReview(review)
            })
    }
}

export const logic = new Logic()