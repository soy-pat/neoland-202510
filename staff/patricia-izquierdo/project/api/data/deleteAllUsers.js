import { UserModel } from '../mongoose/index.js'

export function deleteAllUsers() {
    return UserModel.deleteMany()
        .catch(error => { throw new Error(error.message) })
        .then(result => { })
}