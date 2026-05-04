import { data } from '../data/index.js'
import { ValidationError, ExistenceError, DuplicityError, CredentialError, OwnershipError, AuthError, SystemError } from '../../com/index.js'

import bcrypt from 'bcryptjs'

export function authenticateUser(username, password) {
    if (typeof username !== 'string') throw new ValidationError('invalid username type')
    if (username.length < 1) throw new ValidationError('invalid username length')

    if (typeof password !== 'string') throw new ValidationError('invalid password type')
    if (password.length < 8) throw new ValidationError('invalid password length')

    return data.findUserByUsername(username)
        .then(userData => {
            if (userData === null) throw new ExistenceError('user not found')

            return bcrypt.compare(password, userData.password)
                .catch(error => { throw new SystemError(error.message) })
                .then(match => {
                    if (!match) throw new CredentialError('incorrect password')

                    return userData.id
                })
        })
}