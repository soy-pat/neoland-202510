import { data, UserData } from '../data/index.js'

import { EMAIL_REGEX } from 'com'

export function registerUser(name, email, username, password, passwordRepeat) {

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