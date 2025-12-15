class Logic {

  // register

  registerUser = function (
    name,
    email,
    username,
    password,
    passwordRepeat
  ) {
    if (typeof name !== 'string') throw new Error('invalid name type');
    if (name.length < 1) throw new Error('invalid name length');

    if (typeof email !== 'string') throw new Error('invalid email type');
    if (email.length < 6) throw new Error('invalid email length');

    if (typeof username !== 'string') throw new Error('invalid username type');
    if (username.length < 3) throw new Error('invalid username length');

    if (typeof password !== 'string') throw new Error('invalid password type');
    if (password.length < 8) throw new Error('invalid password length');

    if (typeof passwordRepeat !== 'string') throw new Error('invalid passwordRepeat type');
    if (passwordRepeat.length < 8) throw new Error('invalid passwordRepeat length');

    if (password !== passwordRepeat) throw new Error('passwords do not match');

    let user = data.findUserByEmail(email)

    if (user !== null) throw new Error('user email already exists');

    user = data.findUserByUsername(username)

    if (user !== null) throw new Error('user username already exists')

    user = new User('user-' + data.userscount, name, email, username, password, 'regular')

    data.insertUser(user)
  };

  // login

  loginUser = function (
    username,
    password
  ) {
    if (typeof username !== 'string') throw new Error('invalid username type');
    if (username.length < 3) throw new Error('invalid username length');

    if (typeof password !== 'string') throw new Error('invalid password type');
    if (password.length < 8) throw new Error('invalid password length');

    let user = data.findUserByUsername(username)

    if (user === null) throw new Error('user not found')

    if (user.password !== password) throw new Error('invalid password')

    data.setLoggedInUserId(user.id)
  }

  logoutUser = function () {
    data.setLoggedInUserId(null)
  }

  addPet = function (name, birthdate, weight, image) {
    if (data.getLoggedInUserId() === null) throw new Error('user not logged in')

    const user = data.findUserById(data.getLoggedInUserId())
    if (user === null) throw new Error('user not found')

    if (typeof name !== 'string') throw new Error('invalid name type')
    if (name.length < 1) throw new Error('invalid name length')

    if (typeof birthdate !== 'string') throw new Error('invalid birthdate type')

    const isoDateRegex = /^\d{4}-\d{2}-\d{2}$/ //new RegExp
    if (!isoDateRegex.test(birthdate)) throw new Error('invalid birthdate format')

    if (typeof weight !== 'number' || isNaN(weight)) throw new Error('invalid weight type')

    const pet = new Pet('pet-' + data.petscount, data.getLoggedInUserId(), name, birthdate, weight, image)

    data.insertPet(pet)

  }

  getPets = function () {
    // this conditions are necessary***
    if (data.getLoggedInUserId() === null) throw new Error('user not logged in')

    const user = data.findUserById(data.getLoggedInUserId())
    if (user === null) throw new Error('user not found')

    const pets = data.findPetsByUserId(data.getLoggedInUserId())

    return pets
  }

  deletePet = function (petId) {
    if (data.getLoggedInUserId() === null) throw new Error('user not logged in')

    const user = data.findUserById(data.getLoggedInUserId())
    if (user === null) throw new Error('user not found')

    if (typeof petId !== 'string') throw new Error('invalid pet-id type')

    const petIdRegex = /^\pet-[0-9]+$/
    if (!petIdRegex.test(petId)) throw new Error('invalid pet-id format')

    const pet = data.findPetById(petId)

    if (pet === null) throw new Error('pet not found')

    if (pet.userId !== data.getLoggedInUserId()) throw new Error('user not owner of pet')

    const petIndex = data.pets.indexOf(pet)

    data.pets.splice(petIndex, 1)
  }
}
// instancia

const logic = new Logic();
