// register

const registerView = createView()
hideView(registerView)

const registerTitle = createTitle()
setTextContent(registerTitle, 'MyPet')
setClass(registerTitle, 'font-bold')
addChild(registerView, registerTitle)

const registerSubtitle = document.createElement('h2')
setTextContent(registerSubtitle, 'Register')
setClass(registerSubtitle, 'font-bold italic')
addChild(registerView, registerSubtitle)

const registerForm = document.createElement('form')
setClass(registerForm, 'flex flex-col')

const registerNameLabel = document.createElement('label')
setTextContent(registerNameLabel, 'Name ')
// to relate the label to the input (repeat in all labels)
registerNameLabel.htmlFor = 'name'
addChild(registerForm, registerNameLabel)

const registerNameInput = document.createElement('input')
setId(registerNameInput, 'name')
setType(registerNameInput, 'text')
setClass(registerNameInput, 'border rounded-lg px-2 border-solid border-black')
addChild(registerForm, registerNameInput)

const registerEmailLabel = document.createElement('label')
setTextContent(registerEmailLabel, 'Email')
registerEmailLabel.htmlFor = 'email'
addChild(registerForm, registerEmailLabel)
const registerEmailInput = document.createElement('input')
setId(registerEmailInput, 'email')
setType(registerEmailInput, 'email')
setClass(registerEmailInput, 'border rounded-lg px-2 border-solid border-black')
addChild(registerForm, registerEmailInput)

const registerUsernameLabel = document.createElement('label')
setTextContent(registerUsernameLabel, 'Username')
registerUsernameLabel.htmlFor = 'username'
addChild(registerForm, registerUsernameLabel)
const registerUsernameInput = document.createElement('input')
setId(registerUsernameInput, 'username')
setType(registerUsernameInput, 'text')
setClass(registerUsernameInput, 'border rounded-lg px-2 border-solid border-black')
addChild(registerForm, registerUsernameInput)

const registerPasswordLabel = document.createElement('label')
setTextContent(registerPasswordLabel, 'Password')
registerPasswordLabel.htmlFor = 'password'
addChild(registerForm, registerPasswordLabel)
const registerPasswordInput = document.createElement('input')
setType(registerPasswordInput, 'password')
setId(registerPasswordInput, 'password')
setClass(registerPasswordInput, 'border px-2 rounded-lg border-solid border-black')
addChild(registerForm, registerPasswordInput)
const showPasswordButtonRegister = document.createElement('button')
setTextContent(showPasswordButtonRegister, 'Show')
// to not work as submit button
setType(showPasswordButtonRegister, 'button')
setClass(showPasswordButtonRegister, 'border-2 border-solid border-black bg-emerald-50 px-2 self-end')
addChild(registerForm, showPasswordButtonRegister)

showPasswordButtonRegister.addEventListener('click', function (event) {
    event.preventDefault()

    if (getType(registerPasswordInput) === 'password') {
        setType(registerPasswordInput, 'text')
        setTextContent(showPasswordButtonRegister, 'Hide')
        setClass(showPasswordButtonRegister, 'border-2 border-solid border-black bg-red-50 px-2 self-end')
        setClass(registerPasswordInput, 'border px-2 rounded-lg border-solid border-black bg-[gold]')
    }
    else if (getType(registerPasswordInput) === 'text') {
        setType(registerPasswordInput, 'password')
        setTextContent(showPasswordButtonRegister, 'Show')
        setClass(showPasswordButtonRegister, 'border-2 border-solid border-black bg-emerald-50 px-2 self-end')
        setClass(registerPasswordInput, 'border px-2  rounded-lg border-solid border-black')
    }
})

const registerPasswordRepeatLabel = document.createElement('label')
setTextContent(registerPasswordRepeatLabel, 'Repeat Password ')
registerPasswordRepeatLabel.htmlFor = 'passwordrepeat'
addChild(registerForm, registerPasswordRepeatLabel)
const registerPasswordRepeatInput = document.createElement('input')
setId(registerPasswordRepeatInput, 'passwordrepeat')
setType(registerPasswordRepeatInput, 'password')
setClass(registerPasswordRepeatInput, 'border px-2 rounded-lg border-solid border-black')
addChild(registerForm, registerPasswordRepeatInput)

const showPasswordRepeatButtonRegister = document.createElement('button')
setTextContent(showPasswordRepeatButtonRegister, 'Show ')
setType(showPasswordRepeatButtonRegister, 'button')
setClass(showPasswordRepeatButtonRegister, 'border-2 border-solid border-black bg-emerald-50 px-2 self-end')
addChild(registerForm, showPasswordRepeatButtonRegister)
showPasswordRepeatButtonRegister.addEventListener('click', function (event) {
    event.preventDefault()

    if (getType(registerPasswordRepeatInput) === 'password') {
        setType(registerPasswordRepeatInput, 'text')
        setTextContent(showPasswordRepeatButtonRegister, 'Hide ')
        setClass(showPasswordRepeatButtonRegister, 'border-2 border-solid border-black bg-red-50 px-2 self-end')
        setClass(registerPasswordRepeatInput, 'border px-2 rounded-lg border-solid border-black bg-[gold]')
    }
    else if (getType(registerPasswordRepeatInput) === 'text') {
        setType(registerPasswordRepeatInput, 'password')
        setTextContent(showPasswordRepeatButtonRegister, 'Show ')
        setClass(showPasswordRepeatButtonRegister, 'border-2 border-solid border-black bg-emerald-50 px-2 self-end')
        setClass(registerPasswordRepeatInput, 'border rounded-lg px-2 border-solid border-black')
    }
})

const registerSubmitButton = document.createElement('button')
setTextContent(registerSubmitButton, 'Register')
setType(registerSubmitButton, 'submit')
setClass(registerSubmitButton, 'border-2 border-solid border-black bg-black text-white px-4 self-center')
addChild(registerForm, registerSubmitButton)
addChild(registerView, registerForm)

registerForm.addEventListener('submit', function (event) {
    event.preventDefault()

    const name = getValue(registerNameInput)
    const email = getValue(registerEmailInput)
    const username = getValue(registerUsernameInput)
    const password = getValue(registerPasswordInput)
    const passwordRepeat = getValue(registerPasswordRepeatInput)

    try {
        logic.registerUser(name, email, username, password, passwordRepeat)

        registerForm.reset()
        setTextContent(registerFeedback, '')

        hideView(registerView)
        showView(loginView)
    } catch (error) {
        setTextContent(registerFeedback, error.message)
    }
})

const registerLoginLink = document.createElement('a')
setTextContent(registerLoginLink, 'Login')
setClass(registerLoginLink, 'underline font-bold')
registerLoginLink.href = ''
addChild(registerView, registerLoginLink)

registerLoginLink.addEventListener('click', function (event) {
    event.preventDefault()

    hideView(registerView)
    showView(loginView)
})

const registerFeedback = createParagraph()
addChild(registerView, registerFeedback)

document.body.appendChild(registerView)
