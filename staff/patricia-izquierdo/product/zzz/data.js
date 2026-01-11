class User {
  constructor(id, name, email, username, password, role) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.username = username;
    this.password = password;
    this.role = role;
  }
}

class Pet {
  constructor(id, userId, /*chip,*/ name, birthdate, weight,/*species, race, colors*/ image) {
    this.id = id;
    this.userId = userId;
    // this.chip = chip;
    this.name = name;
    this.birthdate = birthdate;
    this.weight = weight
    // this.species = species;
    // this.race = race;
    // this.colors = colors;
    this.image = image
  }
}

// manager

class Data {
  constructor() {
    this.users = [];
    this.userscount = 0;
    this.pets = [];
    this.petscount = 0;
    // to know which user is logged doing actions
    this.loggedInUserId = null
  }


  insertUser = function (user) {
    this.users.push(user)
    this.userscount++
  }

  insertPet = function (pet) {
    this.pets.push(pet)
    this.petscount++
  }

  findPetsByUserId = function (userId) {
    const foundPets = []

    for (let i = 0; i < this.pets.length; i++) {
      const pet = this.pets[i]
      if (pet.userId === userId)
        foundPets.push(this.pets[i])
    }
    return foundPets
  }

  findPetById = function (petId) {
    for (let i = 0; i < this.pets.length; i++) {
      const pet = this.pets[i]

      if (pet.id === petId)
        return pet
    }
  }

  findUserByEmail = function (email) {
    for (let i = 0; i < this.users.length; i++) {
      const user = this.users[i]

      if (user.email === email) return user
    }
    return null
  }

  findUserByUsername = function (username) {
    for (let i = 0; i < this.users.length; i++) {
      const user = this.users[i]

      if (user.username === username) return user
    }
    return null
  }

  findUserById = function (id) {
    for (let i = 0; i < this.users.length; i++) {
      const user = this.users[i]

      if (user.id === id) return user
    }
    return null
  }

  setLoggedInUserId = function (userId) {
    this.loggedInUserId = userId
  }

  getLoggedInUserId = function () {
    return this.loggedInUserId
  }
}

// instance

const data = new Data();
