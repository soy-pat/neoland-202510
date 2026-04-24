import { UserModel } from '../mongoose/schemas/userSchema'

export function insertUser(userData) {
    const userModel = new UserModel(userData)

    return userModel.save()
        .catch(error => { throw new Error(error.message) })
        .then(userModel => { })
}