function User(id, name, email, username, password, role) {
  this.id = id;
  this.name = name;
  this.email = email;
  this.username = username;
  this.password = password;
  this.role = role;
}

function Pet(id, userId, /*chip,*/ name, birthdate, weight,/*species, race, colors*/ image) {
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

// manager

function Data() {
  this.users = [];
  this.userscount = 0;
  this.pets = [];
  this.petscount = 0;
  // to know which user is logged doing actions
  this.loggedInUserId = null
}

Data.prototype.insertUser = function (user) {
  this.users.push(user)
  this.userscount++
}

Data.prototype.insertPet = function (pet) {
  this.pets.push(pet)
  this.petscount++
}

Data.prototype.findPetsByUserId = function (userId) {
  const foundPets = []

  for (let i = 0; i < this.pets.length; i++) {
    const pet = this.pets[i]
    if (pet.userId === userId)
      foundPets.push(this.pets[i])
  }
  return foundPets
}

Data.prototype.findPetById = function (petId) {
  for (let i = 0; i < this.pets.length; i++) {
    const pet = this.pets[i]

    if (pet.id === petId)
      return pet
  }
}

Data.prototype.findUserByEmail = function (email) {
  for (let i = 0; i < this.users.length; i++) {
    const user = this.users[i]

    if (user.email === email) return user
  }
  return null
}

Data.prototype.findUserByUsername = function (username) {
  for (let i = 0; i < this.users.length; i++) {
    const user = this.users[i]

    if (user.username === username) return user
  }
  return null
}

Data.prototype.findUserById = function (id) {
  for (let i = 0; i < this.users.length; i++) {
    const user = this.users[i]

    if (user.id === id) return user
  }
  return null
}

Data.prototype.setLoggedInUserId = function (userId) {
  this.loggedInUserId = userId
}

Data.prototype.getLoggedInUserId = function () {
  return this.loggedInUserId
}

// instance

const data = new Data();
