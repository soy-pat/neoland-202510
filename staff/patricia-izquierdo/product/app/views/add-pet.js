// add pet

const addPetView = document.createElement('div')
addPetView.style.display = 'none'

const addPetTitle = document.createElement('h1')
addPetTitle.textContent = 'MyPet'
addPetTitle.className = 'font-bold text-xl'
addPetView.appendChild(addPetTitle)

const addPetTopPanel = document.createElement('div')
addPetTopPanel.className = 'flex justify-between'
addPetView.appendChild(addPetTopPanel)

const addPetSubtitle = document.createElement('h2')
addPetSubtitle.textContent = 'Add Pet'
addPetSubtitle.className = 'font-bold'
addPetTopPanel.appendChild(addPetSubtitle)

const addPetBackLink = document.createElement('a')
addPetBackLink.textContent = '< Back'
addPetBackLink.href = ''
addPetBackLink.className = 'underline font-bold'
addPetTopPanel.appendChild(addPetBackLink)

addPetBackLink.addEventListener('click', function (event) {
    event.preventDefault()

    addPetView.style.display = 'none'
    homeView.style.display = ''
})

const addPetForm = document.createElement('form')
addPetForm.className = 'flex flex-col'

const addPetNameLabel = document.createElement('label')
addPetNameLabel.textContent = 'Name '
addPetNameLabel.htmlFor = 'name'
addPetForm.appendChild(addPetNameLabel)
const addPetNameInput = document.createElement('input')
addPetNameInput.id = 'name'
addPetNameInput.type = 'text'
addPetNameInput.className = 'border rounded-lg px-2 border-solid border-black'
addPetForm.appendChild(addPetNameInput)

const addPetDateOfBirthLabel = document.createElement('label')
addPetDateOfBirthLabel.textContent = 'Date of Birth '
addPetDateOfBirthLabel.htmlFor = 'date'
addPetForm.appendChild(addPetDateOfBirthLabel)
const addPetDateOfBirthInput = document.createElement('input')
addPetDateOfBirthInput.id = 'date'
addPetDateOfBirthInput.type = 'date'
addPetDateOfBirthInput.className = 'border rounded-lg px-2 border-solid border-black'
addPetForm.appendChild(addPetDateOfBirthInput)

const addPetWeightLabel = document.createElement('label')
addPetWeightLabel.textContent = 'Weight (kg) '
addPetWeightLabel.htmlFor = 'weight'
addPetForm.appendChild(addPetWeightLabel)
const addPetWeightInput = document.createElement('input')
addPetWeightInput.id = 'weight'
addPetWeightInput.type = 'number'
addPetWeightInput.step = '0.01'
addPetWeightInput.className = 'border rounded-lg px-2 border-solid border-black'
addPetForm.appendChild(addPetWeightInput)

const addPetImageLabel = document.createElement('label')
addPetImageLabel.textContent = 'Image '
addPetImageLabel.htmlFor = 'image'
addPetForm.appendChild(addPetImageLabel)
const addPetImageInput = document.createElement('input')
addPetImageInput.id = 'image'
addPetImageInput.type = 'url'
addPetImageInput.className = 'border rounded-lg px-2 border-solid border-black'
addPetForm.appendChild(addPetImageInput)

const addPetSubmitButton = document.createElement('button')
addPetSubmitButton.textContent = 'Add'
addPetSubmitButton.type = 'submit'
addPetSubmitButton.className = 'border-2 border-solid border-black bg-black text-white px-4 self-center'
addPetForm.appendChild(addPetSubmitButton)

addPetForm.addEventListener('submit', function (event) {
    event.preventDefault()

    const name = addPetNameInput.value
    const birthdate = addPetDateOfBirthInput.value
    const weight = parseFloat(addPetWeightInput.value)
    const image = addPetImageInput.value

    try {
        logic.addPet(name, birthdate, weight, image)

        addPetForm.reset()
        addPetFeedback.textContent = ''

        addPetView.style.display = 'none'
        homeView.style.display = ''

    } catch (error) {
        addPetFeedback.textContent = error.message
    }
})

const addPetFeedback = document.createElement('p')
addPetView.appendChild(addPetFeedback)

addPetView.appendChild(addPetForm)

document.body.appendChild(addPetView)
