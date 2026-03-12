import { SystemError } from './errors.js'
import { UserModel, PetModel } from './models.js'

// models

export class User {
    constructor(id, name, email, username, password, image, role) {
        this.id = id
        this.name = name
        this.email = email
        this.username = username
        this.password = password
        this.image = image
        this.role = role
    }
}

export class Pet {
    constructor(id, userId, /*chip,*/ name, /*gender,*/ birthdate, weight, /*species, race, colors,*/ image) {
        this.id = id
        this.userId = userId
        // this.chip = chip
        this.name = name
        // this.gender = gender
        this.birthdate = birthdate
        this.weight = weight
        // this.species = species
        // this.race = race
        // this.colors = colors
        this.image = image
    }
}

// manager

class Data {
    insertUser(user) {
        const userModel = new UserModel(user)

        return userModel.save()
            .catch(error => { throw new SystemError(error.message) })
            .then(userModel => { })
    }

    findUserByEmail(email) {
        return UserModel.findOne({ email })
            .catch(error => { throw new SystemError(error.message) })
            .then(userModel => {
                if (!userModel) return null

                const { id, name, email, username, password } = userModel

                return new User(id, name, email, username, password)
            })
    }

    findUserByUsername(username) {
        return UserModel.findOne({ username })
            .catch(error => { throw new SystemError(error.message) })
            .then(userModel => {
                if (!userModel) return null

                const { id, name, email, username, password } = userModel

                return new User(id, name, email, username, password)
            })
    }

    findUserById(userId) {
        const user = this.users.find(user => user.id === userId)

        return user || null
    }

    updateUser(updatedUser) {
        const index = this.users.findIndex(user => user.id === updatedUser.id)

        this.users[index] = updatedUser
    }

    insertPet(pet) {
        this.pets.push(pet)
        this.petsCount++
    }

    findPetsByUserId(userId) {
        const foundPets = this.pets.filter(pet => pet.userId === userId)

        return foundPets
    }

    findPetById(petId) {
        const pet = this.pets.find(pet => pet.id === petId)

        return pet || null
    }

    updatePet(updatedPet) {
        const index = this.pets.findIndex(pet => pet.id === updatedPet.id)

        this.pets[index] = updatedPet
    }

    deletePet(petId) {
        const index = this.pets.findIndex(pet => pet.id === petId)

        data.pets.splice(index, 1)
    }
}

// instance

export const data = new Data()