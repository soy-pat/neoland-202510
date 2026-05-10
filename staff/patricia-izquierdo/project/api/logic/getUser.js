import { validate, ValidationError, ExistenceError, DuplicityError, CredentialError, OwnershipError, AuthError, SystemError } from '../../com/index.js'
import { data, UserData } from '../data/index.js'

export function getUser(userId) {
    validate.id(userId, 'userId')

    return data.findUserById(userId)
        .then(userData => {
            if (!userData) throw new ExistenceError('user not found')

            const { id, name, email, username, password } = userData

            return new UserData(id, name, email, username)
        })
}