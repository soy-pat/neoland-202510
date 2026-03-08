import { data, User, Pet } from './data.js'
import { validate } from './validate.js'

import { DuplicityError, ExistenceError, CredentialError, OwnershipError } from './errors.js'

class Logic {
    constructor() {
    }

    registerUser(name, email, username, password, passwordRepeat) {
        validate.name(name)
        validate.email(email)
        validate.username(username)
        validate.password(password)
        validate.password(passwordRepeat, 'passwordRepeat')
        validate.match(password, passwordRepeat, 'password', 'passwordRepeat')

        let user = data.findUserByEmail(email)

        if (user !== null) throw new DuplicityError('user email already exists')

        user = data.findUserByUsername(username)

        if (user !== null) throw new DuplicityError('user username already exists')

        user = new User('user-' + data.usersCount, name, email, username, password, null, 'regular')

        data.insertUser(user)
    }

    authenticateUser(username, password) {
        validate.username(username)
        validate.password(password)

        const user = data.findUserByUsername(username)

        if (user === null) throw new ExistenceError('user not found')

        if (user.password !== password) throw new CredentialError('incorrect password')

        return user.id
    }

    changeUserEmail(userId, email, newEmail, newEmailRepeat) {
        validate.userId(userId)
        validate.email(email)
        validate.email(newEmail, 'newEmail')
        validate.email(newEmailRepeat, 'newEmailRepeat')
        validate.match(newEmail, newEmailRepeat, 'newEmail', 'newEmailRepeat')

        const user = data.findUserById(userId)
        if (!user) throw new ExistenceError('user not found')

        if (user.email !== email) throw new OwnershipError('email do not belong to user')

        const otherUser = data.findUserByEmail(newEmail)

        if (otherUser) throw new OwnershipError('newEmail belongs to another user')

        const { name, username, password, image } = user

        data.updateUser(new User(userId, name, newEmail, username, password, image))
    }

    changeUserPassword(userId, password, newPassword, newPasswordRepeat) {
        validate.userId(userId)
        validate.password(password)
        validate.password(newPassword, 'newPassword')
        validate.password(newPasswordRepeat, 'newPasswordRepeat')
        validate.match(newPassword, newPasswordRepeat, 'newPassword', 'newPasswordRepeat')

        const user = data.findUserById(userId)

        if (!user) throw new ExistenceError('user not found')

        if (user.password !== password) throw new CredentialError('incorrect password')

        const { name, email, username, image } = user

        data.updateUser(new User(userId, name, email, username, newPassword, image))
    }

    getUser(userId) {
        validate.userId(userId)

        const user = data.findUserById(userId)
        if (!user) throw new ExistenceError('user not found')

        const { name, email, username, image } = user

        return { name, email, username, image }
    }

    changeUserImage(userId, image) {
        validate.userId(userId)
        validate.url(image, 'image')

        const user = data.findUserById(userId)

        if (!user) throw new ExistenceError('user not found')

        const { name, email, username, password } = user

        data.updateUser(new User(userId, name, email, username, password, image))
    }

    addPet(userId, name, birthdate, weight, image) {
        validate.userId(userId)
        validate.name(name)
        validate.date(birthdate, 'birthdate')
        validate.number(weight, 'weight')
        validate.url(image, 'image')

        const user = data.findUserById(userId)
        if (!user) throw new ExistenceError('user not found')

        const pet = new Pet('pet-' + data.petsCount, userId, name, birthdate, weight, image)

        data.insertPet(pet)
    }

    getPets(userId) {
        validate.userId(userId)

        const user = data.findUserById(userId)
        if (!user) throw new Error('user not found')

        const pets = data.findPetsByUserId(userId)

        return pets
    }

    removePet(userId, petId) {
        validate.userId(userId)
        validate.petId(petId)

        const user = data.findUserById(userId)
        if (!user) throw new ExistenceError('user not found')

        const pet = data.findPetById(petId)

        if (!pet) throw new ExistenceError('pet not found')

        if (pet.userId !== userId) throw new OwnershipError('user not owner of pet')

        data.deletePet(petId)
    }

    getPet(userId, petId) {
        validate.userId(userId)
        validate.petId(petId)

        const user = data.findUserById(userId)
        if (!user) throw new ExistenceError('user not found')

        const pet = data.findPetById(petId)
        if (!pet) throw new ExistenceError('pet not found')

        if (pet.userId !== userId) throw new OwnershipError('user not owner of pet')

        return pet
    }

    modifyPet(userId, petId, name, birthdate, weight, image) {
        validate.userId(userId)
        validate.petId(petId)
        validate.name(name)
        validate.date(birthdate, 'birthdate')
        validate.number(weight, 'weight')
        validate.url(image, 'image')

        const user = data.findUserById(userId)
        if (!user) throw new ExistenceError('user not found')

        const pet = data.findPetById(petId)
        if (!pet) throw new ExistenceError('pet not found')

        if (pet.userId !== userId) throw new OwnershipError('user not owner of pet')

        data.updatePet(new Pet(petId, userId, name, birthdate, weight, image))
    }
}

// instance

export const logic = new Logic()