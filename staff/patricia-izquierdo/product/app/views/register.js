// register

const registerView = createView()
hideView(registerView)

const registerTitle = createTitle()
setTextContent(registerTitle, 'MyPet')
setClass(registerTitle, 'font-bold')
addChild(registerView, registerTitle)

const registerSubtitle = createTitle2()
setTextContent(registerSubtitle, 'Register')
setClass(registerSubtitle, 'font-bold italic')
addChild(registerView, registerSubtitle)

const registerForm = createForm()
setClass(registerForm, 'flex flex-col')

const registerNameLabel = createLabel()
setTextContent(registerNameLabel, 'Name ')
// to relate the label to the input (repeat in all labels)
setFor(registerNameLabel, 'name')
addChild(registerForm, registerNameLabel)

const registerNameInput = createInput()
setId(registerNameInput, 'name')
setType(registerNameInput, 'text')
setClass(registerNameInput, 'border rounded-lg px-2 border-solid border-black')
addChild(registerForm, registerNameInput)

const registerEmailLabel = createLabel()
setTextContent(registerEmailLabel, 'Email')
setFor(registerEmailLabel, 'email')
addChild(registerForm, registerEmailLabel)
const registerEmailInput = createInput()
setId(registerEmailInput, 'email')
setType(registerEmailInput, 'email')
setClass(registerEmailInput, 'border rounded-lg px-2 border-solid border-black')
addChild(registerForm, registerEmailInput)

const registerUsernameLabel = createLabel()
setTextContent(registerUsernameLabel, 'Username')
setFor(registerUsernameLabel, 'username')
addChild(registerForm, registerUsernameLabel)
const registerUsernameInput = createInput()
setId(registerUsernameInput, 'username')
setType(registerUsernameInput, 'text')
setClass(registerUsernameInput, 'border rounded-lg px-2 border-solid border-black')
addChild(registerForm, registerUsernameInput)

const registerPasswordLabel = createLabel()
setTextContent(registerPasswordLabel, 'Password')
setFor(registerPasswordLabel, 'password')
addChild(registerForm, registerPasswordLabel)
const registerPasswordInput = createInput()
setType(registerPasswordInput, 'password')
setId(registerPasswordInput, 'password')
setClass(registerPasswordInput, 'border px-2 rounded-lg border-solid border-black')
addChild(registerForm, registerPasswordInput)
const registerShowPasswordButton = createButton()
setTextContent(registerShowPasswordButton, 'Show')
// to not work as submit button
setType(registerShowPasswordButton, 'button')
setClass(registerShowPasswordButton, 'border-2 border-solid border-black bg-emerald-50 px-2 self-end')
addChild(registerForm, registerShowPasswordButton)

registerShowPasswordButton.addEventListener('click', function (event) {
    event.preventDefault()

    if (getType(registerPasswordInput) === 'password') {
        setType(registerPasswordInput, 'text')
        setTextContent(registerShowPasswordButton, 'Hide')
        setClass(registerShowPasswordButton, 'border-2 border-solid border-black bg-red-50 px-2 self-end')
        setClass(registerPasswordInput, 'border px-2 rounded-lg border-solid border-black bg-[gold]')
    }
    else {
        setType(registerPasswordInput, 'password')
        setTextContent(registerShowPasswordButton, 'Show')
        setClass(registerShowPasswordButton, 'border-2 border-solid border-black bg-emerald-50 px-2 self-end')
        setClass(registerPasswordInput, 'border px-2  rounded-lg border-solid border-black')
    }
})

const registerPasswordRepeatLabel = createLabel()
setTextContent(registerPasswordRepeatLabel, 'Repeat Password ')
setFor(registerPasswordRepeatLabel, 'passwordRepeat')
addChild(registerForm, registerPasswordRepeatLabel)
const registerPasswordRepeatInput = createInput()
setId(registerPasswordRepeatInput, 'passwordRepeat')
setType(registerPasswordRepeatInput, 'password')
setClass(registerPasswordRepeatInput, 'border px-2 rounded-lg border-solid border-black')
addChild(registerForm, registerPasswordRepeatInput)

const registerShowPasswordRepeatButton = createButton()
setTextContent(registerShowPasswordRepeatButton, 'Show ')
setType(registerShowPasswordRepeatButton, 'button')
setClass(registerShowPasswordRepeatButton, 'border-2 border-solid border-black bg-emerald-50 px-2 self-end')
addChild(registerForm, registerShowPasswordRepeatButton)
registerShowPasswordRepeatButton.addEventListener('click', function (event) {
    event.preventDefault()

    if (getType(registerPasswordRepeatInput) === 'password') {
        setType(registerPasswordRepeatInput, 'text')
        setTextContent(registerShowPasswordRepeatButton, 'Hide ')
        setClass(registerShowPasswordRepeatButton, 'border-2 border-solid border-black bg-red-50 px-2 self-end')
        setClass(registerPasswordRepeatInput, 'border px-2 rounded-lg border-solid border-black bg-[gold]')
    }
    else if (getType(registerPasswordRepeatInput) === 'text') {
        setType(registerPasswordRepeatInput, 'password')
        setTextContent(registerShowPasswordRepeatButton, 'Show ')
        setClass(registerShowPasswordRepeatButton, 'border-2 border-solid border-black bg-emerald-50 px-2 self-end')
        setClass(registerPasswordRepeatInput, 'border rounded-lg px-2 border-solid border-black')
    }
})

const registerSubmitButton = createButton()
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

        reset(registerForm)
        setTextContent(registerFeedback, '')

        hideView(registerView)
        showView(loginView)
    } catch (error) {
        setTextContent(registerFeedback, error.message)
    }
})

const registerLoginLink = createLink()
setTextContent(registerLoginLink, 'Login')
setClass(registerLoginLink, 'underline font-bold')
addChild(registerView, registerLoginLink)

registerLoginLink.addEventListener('click', function (event) {
    event.preventDefault()

    hideView(registerView)
    showView(loginView)
})

const registerFeedback = createParagraph()
addChild(registerView, registerFeedback)

addChild(document.body, registerView)
