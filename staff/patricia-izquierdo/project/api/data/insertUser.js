import { UserModel } from '../mongoose/index.js'
import { ValidationError, ExistenceError, DuplicityError, CredentialError, OwnershipError, AuthError, SystemError } from '../../com/index.js'

export function insertUser(userData) {
    const userModel = new UserModel(userData)

    return userModel.save()
        .catch(error => { throw new SystemError(error.message) })
        .then(userModel => { })
}