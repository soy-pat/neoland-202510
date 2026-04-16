import { UserModel, ReviewModel } from './models.js'
import { ObjectId } from 'mongodb'

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

export class ReviewData {
    constructor(id, userId, title, image, stars, subject, body) {
        this.id = id
        this.userId = userId
        this.title = title
        this.image = image
        this.stars = stars
        this.subject = subject
        this.body = body
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

    findUserById(userId) {
        return UserModel.findById(userId)
            .catch(error => { throw new SystemError(error.message) })
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

    insertReview(reviewData) {
        const reviewModel = new ReviewModel(reviewData)

        return reviewModel.save()
            .catch(error => { throw new Error(error.message) })
            .then(reviewModel => { })
    }

    findReviewsByUserId(userId) {
        return ReviewModel.find({ userId: new ObjectId(userId) })
            .catch(error => { throw new Error(error.message) })
            .then(reviewModels => reviewModels.map(reviewModel => {
                const { id, userId, title, image, stars, subject, body } = reviewModel

                return new ReviewData(id, userId.toString(), title, image, stars, subject, body)
            }))
    }
}

export const data = new Data()