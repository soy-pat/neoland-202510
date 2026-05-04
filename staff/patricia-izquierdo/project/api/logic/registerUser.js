import { data, UserData } from '../data/index.js'
import { ValidationError, ExistenceError, DuplicityError, CredentialError, OwnershipError, AuthError, SystemError } from '../../com/index.js'

import bcrypt from 'bcryptjs'

import { EMAIL_REGEX } from 'com'

export function registerUser(name, email, username, password, passwordRepeat) {

    if (typeof name !== 'string') throw new ValidationError('invalid name type')
    if (name.length < 1) throw new ValidationError('invalid name length')

    if (typeof email !== 'string') throw new ValidationError('invalid email type')
    if (email.length < 6) throw new ValidationError('invalid email length')
    if (!EMAIL_REGEX.test(email)) throw new ValidationError('invalid email format')

    if (typeof username !== 'string') throw new ValidationError('invalid username type')
    if (username.length < 3) throw new ValidationError('invalid username length')

    if (typeof password !== 'string') throw new ValidationError('invalid password type')
    if (password.length < 8) throw new ValidationError('invalid password length')

    if (typeof passwordRepeat !== 'string') throw new ValidationError('invalid password repeat type')
    if (passwordRepeat.length < 8) throw new ValidationError('invalid password repeat length')

    if (password !== passwordRepeat) throw new ValidationError('password and password repeat do not match')

    return data.findUserByEmail(email)
        .then(userData => {
            if (userData !== null) throw new DuplicityError('user email already exists')

            return data.findUserByUsername(username)
                .then(userData => {
                    if (userData !== null) throw new DuplicityError('user username already exists')

                    return bcrypt.hash(password, 10)
                        .catch(error => { throw new SystemError(error.message) })
                })
                .then(hash => {
                    const userData = new UserData(null, name, email, username, hash, null)

                    return data.insertUser(userData)
                })
        })
}