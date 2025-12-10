//login

const loginView = createView()
hideView(loginView)

const loginTitle = createTitle()
setTextContent(loginTitle, 'MyPet')
setClass(loginTitle, 'font-bold')
addChild(loginView, loginTitle)

const loginSubtitle = document.createElement('h2')
setTextContent(loginSubtitle, 'Login')
setClass(loginSubtitle, 'font-bold italic')
addChild(loginView, loginSubtitle)

const loginForm = document.createElement('form')
setClass(loginForm, 'flex flex-col')

// const loginNameLabel = document.createElement('label')
// loginNameLabel.textContent = 'Name '
// loginForm.appendChild(loginNameLabel)
// const loginNameInput = document.createElement('input')
// loginForm.appendChild(loginNameInput)

// const loginEmailLabel = document.createElement('label')
// loginEmailLabel.textContent = 'Email '
// loginForm.appendChild(loginEmailLabel)
// const loginEmailInput = document.createElement('input')
// loginForm.appendChild(loginEmailInput)

const loginUsernameLabel = document.createElement('label')
setTextContent(loginUsernameLabel, 'Username')
loginUsernameLabel.htmlFor = 'username'
addChild(loginForm, loginUsernameLabel)
const loginUsernameInput = document.createElement('input')
setId(loginUsernameInput, 'username')
setType(loginUsernameInput, 'text')
setClass(loginUsernameInput, 'border px-2 rounded-lg border-solid border-black')
addChild(loginForm, loginUsernameInput)

const loginPasswordLabel = document.createElement('label')
setTextContent(loginPasswordLabel, 'Password ')
loginPasswordLabel.htmlFor = 'password'
addChild(loginForm, loginPasswordLabel)
const loginPasswordInput = document.createElement('input')
setId(loginPasswordInput, 'password')
setType(loginPasswordInput, 'password')
setClass(loginPasswordInput, 'border px-2 rounded-lg border-solid border-black')
addChild(loginForm, loginPasswordInput)

const showPasswordButtonLogin = document.createElement('button')
setTextContent(showPasswordButtonLogin, 'Show')
setType(showPasswordButtonLogin, 'button')
setClass(showPasswordButtonLogin, 'border-2 border-solid border-black bg-emerald-50 px-2 self-end')
addChild(loginForm, showPasswordButtonLogin)

showPasswordButtonLogin.addEventListener('click', function (event) {
    event.preventDefault()

    if (getType(loginPasswordInput) === 'password') {
        setType(loginPasswordInput, 'text')
        setTextContent(showPasswordButtonLogin, 'Hide')
        setClass(showPasswordButtonLogin, 'border-2 border-solid border-black bg-red-50 px-2 self-end')
        setClass(loginPasswordInput, 'border px-2 rounded-lg border-solid border-black bg-[gold]')
    }
    else if (getType(loginPasswordInput) === 'text') {
        setType(loginPasswordInput, 'password')
        setTextContent(showPasswordButtonLogin, 'Show')
        setClass(showPasswordButtonLogin, 'border-2 border-solid border-black bg-emerald-50 px-2 self-end')
        setClass(loginPasswordInput, 'border px-2 rounded-lg border-solid border-black')
    }
})

// const loginPasswordRepeatLabel = document.createElement('label')
// loginPasswordRepeatLabel.textContent = 'Repeat Password '
// loginForm.appendChild(loginPasswordRepeatLabel)
// const loginPasswordRepeatInput = document.createElement('input')
// loginForm.appendChild(loginPasswordRepeatInput)

const loginSubmitButton = document.createElement('button')
setTextContent(loginSubmitButton, 'Login')
setType(loginSubmitButton, 'submit')
setClass(loginSubmitButton, 'border-2 border-solid border-black bg-black text-white px-4 self-center')
addChild(loginForm, loginSubmitButton)
addChild(loginView, loginForm)

loginForm.addEventListener('submit', function (event) {
    event.preventDefault()

    const username = getValue(loginUsernameInput)
    const password = getValue(loginPasswordInput)

    try {
        logic.loginUser(username, password)

        loginForm.reset()
        setTextContent(loginFeedback, '')

        renderHomePetList()

        hideView(loginView)
        showView(homeView)
    } catch (error) {
        setTextContent(loginFeedback, error.message)
    }
})

const loginRegisterLink = document.createElement('a')
setTextContent(loginRegisterLink, 'Register')
loginRegisterLink.href = ''
setClass(loginRegisterLink, 'underline font-bold')
addChild(loginView, loginRegisterLink)

loginRegisterLink.addEventListener('click', function (event) {
    event.preventDefault()

    hideView(loginView)
    showView(registerView)
})

const loginFeedback = createParagraph()
addChild(loginView, loginFeedback)

document.body.appendChild(loginView)
