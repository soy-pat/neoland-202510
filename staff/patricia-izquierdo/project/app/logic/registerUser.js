import { data } from '../data/index.js'
import { ValidationError, ExistenceError, DuplicityError, CredentialError, OwnershipError, AuthError, SystemError } from '../../com/index.js'

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

    return fetch(`${import.meta.env.VITE_API_URL}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, username, password, passwordRepeat })
    })
        .then(res => {
            const { status } = res

            if (status === 201)
                return

            return res.json()
                .then(body => {
                    const { error, message } = body
                    throw new SystemError(message)
                })
        })
}