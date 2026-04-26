import { UserModel } from '../mongoose/index.js'
import { UserData } from './models/index.js'

export function findUserById(userId) {
    return UserModel.findById(userId)
        .catch(error => { throw new Error(error.message) })
        .then(userModel => {
            if (!userModel) return null

            const { id, name, email, username, password, image } = userModel

            return new UserData(id, name, email, username, password, image)
        })
}