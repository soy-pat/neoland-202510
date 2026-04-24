import { UserModel } from '../mongoose/schemas/userSchema'
import { UserData } from './models'

export function findUserByUsername(username) {
    return UserModel.findOne({ username })
        .catch(error => { throw new Error(error.message) })
        .then(userModel => {
            if (!userModel) return null

            const { id, name, email, username, password, image } = userModel

            return new UserData(id, name, email, username, password, image)
        })
}