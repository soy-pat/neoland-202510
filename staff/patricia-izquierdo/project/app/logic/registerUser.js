import { data } from '../data/index.js'
import { validate, ValidationError, ExistenceError, DuplicityError, CredentialError, OwnershipError, AuthError, SystemError } from '../../com/index.js'

export function registerUser(name, email, username, password, passwordRepeat) {
    validate.name(name)
    validate.email(email)
    validate.name(username, 'username', 3)
    validate.password(password)
    validate.password(passwordRepeat, 'password repeat')
    validate.match(password, passwordRepeat, 'password', 'password repeat')

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