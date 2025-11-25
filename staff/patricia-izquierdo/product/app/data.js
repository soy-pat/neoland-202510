function User(id, name, email, username, password, role) {
  this.id = id;
  this.name = name;
  this.email = email;
  this.username = username;
  this.password = password;
  this.role = role;
}

function Pet(id, userId, chip, name, birthdate, species, race, colors) {
  this.id = id;
  this.userId = userId;
  this.chip = chip;
  this.name = name;
  this.birthdate = birthdate;
  this.species = species;
  this.race = race;
  this.colors = colors;
}

// manager

function Data() {
  this.users = [];
  this.userscount = 0;
  this.pets = [];
  this.petscount = 0;
}

Data.prototype.insertUser = function (user) {
  this.users.push(user);
  this.userscount++;
};

Data.prototype.insertPet = function (pet) {
  this.pets.push(pet);
  this.petscount++;
};

// instance

const data = new Data();
