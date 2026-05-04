import { UserModel } from '../mongoose/index.js'
import { ValidationError, ExistenceError, DuplicityError, CredentialError, OwnershipError, AuthError, SystemError } from '../../com/index.js'

export function deleteAllUsers() {
    return UserModel.deleteMany()
        .catch(error => { throw new SystemError(error.message) })
        .then(result => { })
}