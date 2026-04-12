import { UserModel } from './models.js'

export class UserData {
    constructor(id, name, email, username, password, image) {
        this.id = id
        this.name = name
        this.email = email
        this.username = username
        this.password = password
        this.image = image
    }
}

class Data {
    insertUser(userData) {
        const userModel = new UserModel(userData)

        return userModel.save()
            .catch(error => { throw new Error(error.message) })
            .then(userModel => { })
    }

    findUserByEmail(email) {
        return UserModel.findOne({ email })
            .catch(error => { throw new Error(error.message) })
            .then(userModel => {
                if (!userModel) return null

                const { id, name, email, username, password, image } = userModel

                return new UserData(id, name, email, username, password, image)
            })
    }

    findUserByUsername(username) {
        return UserModel.findOne({ username })
            .catch(error => { throw new Error(error.message) })
            .then(userModel => {
                if (!userModel) return null

                const { id, name, email, username, password, image } = userModel

                return new UserData(id, name, email, username, password, image)
            })
    }
}

export const data = new Data()