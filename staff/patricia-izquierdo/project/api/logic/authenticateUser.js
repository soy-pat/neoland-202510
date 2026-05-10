import { data } from '../data/index.js'
import { validate, ValidationError, ExistenceError, DuplicityError, CredentialError, OwnershipError, AuthError, SystemError } from '../../com/index.js'

import bcrypt from 'bcryptjs'

export function authenticateUser(username, password) {
    validate.name(username, 'username', 1)
    validate.password(password)

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