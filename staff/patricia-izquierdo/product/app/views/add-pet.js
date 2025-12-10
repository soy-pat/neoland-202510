// add pet

const addPetView = createView()
hideView(addPetView)

const addPetTitle = createTitle()
setTextContent(addPetTitle, 'MyPet')
setClass(addPetTitle, 'font-bold text-xl')
addChild(addPetView, addPetTitle)

const addPetTopPanel = createView()
setClass(addPetTopPanel, 'flex justify-between')
addChild(addPetView, addPetTopPanel)

const addPetSubtitle = document.createElement('h2')
setTextContent(addPetSubtitle, 'Add Pet')
setClass(addPetSubtitle, 'font-bold')
addChild(addPetTopPanel, addPetSubtitle)

const addPetBackLink = document.createElement('a')
setTextContent(addPetBackLink, '< Back')
addPetBackLink.href = ''
setClass(addPetBackLink, 'underline font-bold')
addChild(addPetTopPanel, addPetBackLink)

addPetBackLink.addEventListener('click', function (event) {
    event.preventDefault()

    hideView(addPetView)
    showView(homeView)
})

const addPetForm = document.createElement('form')
setClass(addPetForm, 'flex flex-col')

const addPetNameLabel = document.createElement('label')
setTextContent(addPetNameLabel, 'Name ')
addPetNameLabel.htmlFor = 'name'
addChild(addPetForm, addPetNameLabel)
const addPetNameInput = document.createElement('input')
setId(addPetNameInput, 'name')
setType(addPetNameInput, 'text')
setClass(addPetNameInput, 'border rounded-lg px-2 border-solid border-black')
addChild(addPetForm, addPetNameInput)

const addPetDateOfBirthLabel = document.createElement('label')
setTextContent(addPetDateOfBirthLabel, 'Date of Birth')
addPetDateOfBirthLabel.htmlFor = 'date'
addChild(addPetForm, addPetDateOfBirthLabel)
const addPetDateOfBirthInput = document.createElement('input')
setId(addPetDateOfBirthInput, 'date')
setType(addPetDateOfBirthInput, 'date')
setClass(addPetDateOfBirthInput, 'border rounded-lg px-2 border-solid border-black')
addChild(addPetForm, addPetDateOfBirthInput)

const addPetWeightLabel = document.createElement('label')
setTextContent(addPetWeightLabel, 'Weight (kg)')
addPetWeightLabel.htmlFor = 'weight'
addChild(addPetForm, addPetWeightLabel)
const addPetWeightInput = document.createElement('input')
setId(addPetWeightInput, 'weight')
setType(addPetWeightInput, 'number')
addPetWeightInput.step = '0.01'
setClass(addPetWeightInput, 'border rounded-lg px-2 border-solid border-black')
addChild(addPetForm, addPetWeightInput)

const addPetImageLabel = document.createElement('label')
setTextContent(addPetImageLabel, 'Image ')
addPetImageLabel.htmlFor = 'image'
addChild(addPetForm, addPetImageLabel)
const addPetImageInput = document.createElement('input')
setId(addPetImageInput, 'image')
setType(addPetImageInput, 'url')
setClass(addPetImageInput, 'border rounded-lg px-2 border-solid border-black')
addChild(addPetForm, addPetImageInput)

const addPetSubmitButton = document.createElement('button')
setTextContent(addPetSubmitButton, 'Add')
setType(addPetSubmitButton, 'submit')
setClass(addPetSubmitButton, 'border-2 border-solid border-black bg-black text-white px-4 self-center')
addChild(addPetForm, addPetSubmitButton)

addPetForm.addEventListener('submit', function (event) {
    event.preventDefault()

    const name = getValue(addPetNameInput)
    const birthdate = getValue(addPetDateOfBirthInput)
    const weight = parseFloat(addPetWeightInput.value)
    const image = getValue(addPetImageInput)

    try {
        logic.addPet(name, birthdate, weight, image)

        addPetForm.reset()
        setTextContent(addPetFeedback, '')

        for (let i = homePetList.children.length - 1; i >= 0; i--) {
            const child = homePetList.children[i]

            homePetList.removeChild(child)
        }

        renderHomePetList()

        hideView(addPetView)
        showView(homeView)

    } catch (error) {
        setTextContent(addPetFeedback, error.message)
    }
})

const addPetFeedback = createParagraph()
addChild(addPetView, addPetFeedback)

addChild(addPetView, addPetForm)

document.body.appendChild(addPetView)
