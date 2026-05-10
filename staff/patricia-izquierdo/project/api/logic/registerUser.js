import { data, UserData } from '../data/index.js'
import { validate, ValidationError, ExistenceError, DuplicityError, CredentialError, OwnershipError, AuthError, SystemError } from '../../com/index.js'

import bcrypt from 'bcryptjs'

export function registerUser(name, email, username, password, passwordRepeat) {
    validate.name(name)
    validate.email(email)
    validate.name(username, 'username', 3)
    validate.password(password)
    validate.password(passwordRepeat, 'password repeat')
    validate.match(password, passwordRepeat, 'password', 'password repeat')

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