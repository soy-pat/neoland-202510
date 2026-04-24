import { UserModel } from '../mongoose/schemas/userSchema'

export function deleteAllUsers() {
    return UserModel.deleteMany()
        .catch(error => { throw new Error(error.message) })
        .then(result => { })
}