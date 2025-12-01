//body

document.body.className = 'p-6 border-4 border-red-500 h-screen'

//landing

const landingView = document.createElement('div')

const landingTitle = document.createElement('h1')
landingTitle.textContent = 'MyPet'
landingTitle.className = 'font-bold'
landingView.appendChild(landingTitle)

const landingWelcome = document.createElement('p')
landingWelcome.textContent = 'Welcome!'
landingView.appendChild(landingWelcome)

const landingAccess = document.createElement('p')

const landingLoginLink = document.createElement('a')
landingLoginLink.textContent = 'Login'
landingLoginLink.href = ''
landingLoginLink.className = 'underline'
landingAccess.appendChild(landingLoginLink)

const landingOrText = document.createTextNode(' or ')
landingAccess.appendChild(landingOrText)

const landingRegisterLink = document.createElement('a')
landingRegisterLink.textContent = 'Register'
landingRegisterLink.href = ''
landingRegisterLink.className = 'underline'
landingAccess.appendChild(landingRegisterLink)

landingView.appendChild(landingAccess)

landingLoginLink.addEventListener('click', function (event) {
    event.preventDefault()

    landingView.style.display = 'none'
    loginView.style.display = ''
})

landingRegisterLink.addEventListener('click', function (event) {
    event.preventDefault()

    landingView.style.display = 'none'
    registerView.style.display = ''
})

document.body.appendChild(landingView)

// register

const registerView = document.createElement('div')
registerView.style.display = 'none'

const registerTitle = document.createElement('h1')
registerTitle.textContent = 'MyPet'
registerTitle.className = 'font-bold'
registerView.appendChild(registerTitle)

const registerSubtitle = document.createElement('h2')
registerSubtitle.textContent = 'Register'
registerSubtitle.className = 'font-bold italic'
registerView.appendChild(registerSubtitle)

const registerForm = document.createElement('form')

const registerNameLabel = document.createElement('label')
registerNameLabel.textContent = 'Name '
// to relate the label to the input (repeat in all labels)
registerNameLabel.htmlFor = 'name'
registerForm.appendChild(registerNameLabel)
const registerNameInput = document.createElement('input')
registerNameInput.id = 'name'
registerNameInput.type = 'text'
registerNameInput.className = 'border border-solid border-black'
registerForm.appendChild(registerNameInput)

const registerEmailLabel = document.createElement('label')
registerEmailLabel.textContent = 'Email '
registerEmailLabel.htmlFor = 'email'
registerForm.appendChild(registerEmailLabel)
const registerEmailInput = document.createElement('input')
registerEmailInput.id = 'email'
registerEmailInput.type = 'email'
registerEmailInput.className = 'border border-solid border-black'
registerForm.appendChild(registerEmailInput)

const registerUsernameLabel = document.createElement('label')
registerUsernameLabel.textContent = 'Username '
registerUsernameLabel.htmlFor = 'username'
registerForm.appendChild(registerUsernameLabel)
const registerUsernameInput = document.createElement('input')
registerUsernameInput.id = 'username'
registerUsernameInput.type = 'text'
registerUsernameInput.className = 'border border-solid border-black'
registerForm.appendChild(registerUsernameInput)

const registerPasswordLabel = document.createElement('label')
registerPasswordLabel.textContent = 'Password '
registerPasswordLabel.htmlFor = 'password'
registerForm.appendChild(registerPasswordLabel)
const registerPasswordInput = document.createElement('input')
registerPasswordInput.type = 'password'
registerPasswordInput.id = 'password'
registerPasswordInput.className = 'border border-solid border-black'
registerForm.appendChild(registerPasswordInput)
const showPasswordButtonRegister = document.createElement('button')
showPasswordButtonRegister.textContent = 'Show'
// to not work as submit button
showPasswordButtonRegister.type = 'button'
showPasswordButtonRegister.className = 'border-2 border-solid border-black bg-emerald-50 px-2'
registerForm.appendChild(showPasswordButtonRegister)

showPasswordButtonRegister.addEventListener('click', function (event) {
    event.preventDefault()

    if (registerPasswordInput.type === 'password') {
        registerPasswordInput.type = 'text'
        showPasswordButtonRegister.textContent = 'Hide'
        showPasswordButtonRegister.className = 'border-2 border-solid border-black bg-red-50 px-2'
    }
    else if (registerPasswordInput.type === 'text') {
        registerPasswordInput.type = 'password'
        showPasswordButtonRegister.textContent = 'Show'
        showPasswordButtonRegister.className = 'border-2 border-solid border-black bg-emerald-50 px-2'
    }
})

const registerPasswordRepeatLabel = document.createElement('label')
registerPasswordRepeatLabel.textContent = 'Repeat Password '
registerPasswordRepeatLabel.htmlFor = 'passwordrepeat'
registerForm.appendChild(registerPasswordRepeatLabel)
const registerPasswordRepeatInput = document.createElement('input')
registerPasswordRepeatInput.id = 'passwordrepeat'
registerPasswordRepeatInput.type = 'password'
registerPasswordRepeatInput.className = 'border border-solid border-black'
registerForm.appendChild(registerPasswordRepeatInput)

const showPasswordRepeatButtonRegister = document.createElement('button')
showPasswordRepeatButtonRegister.textContent = 'Show'
showPasswordRepeatButtonRegister.type = 'button'
showPasswordRepeatButtonRegister.className = 'border-2 border-solid border-black bg-emerald-50 px-2'
registerForm.appendChild(showPasswordRepeatButtonRegister)

showPasswordRepeatButtonRegister.addEventListener('click', function (event) {
    event.preventDefault()

    if (registerPasswordRepeatInput.type === 'password') {
        registerPasswordRepeatInput.type = 'text'
        showPasswordRepeatButtonRegister.textContent = 'Hide'
        showPasswordRepeatButtonRegister.className = 'border-2 border-solid border-black bg-red-50 px-2'
    }
    else if (registerPasswordRepeatInput.type === 'text') {
        registerPasswordRepeatInput.type = 'password'
        showPasswordRepeatButtonRegister.textContent = 'Show'
        showPasswordRepeatButtonRegister.className = 'border-2 border-solid border-black bg-emerald-50 px-2'
    }
})

const registerSubmitButton = document.createElement('button')
registerSubmitButton.textContent = 'Register'
registerSubmitButton.type = 'submit'
registerSubmitButton.className = 'border-2 border-solid border-black bg-black text-white px-3'
registerForm.appendChild(registerSubmitButton)
registerView.appendChild(registerForm)

registerForm.addEventListener('submit', function (event) {
    event.preventDefault()

    const name = registerNameInput.value
    const email = registerEmailInput.value
    const username = registerUsernameInput.value
    const password = registerPasswordInput.value
    const passwordRepeat = registerPasswordRepeatInput.value

    try {
        logic.registerUser(name, email, username, password, passwordRepeat)

        registerForm.reset()
        registerFeedback.textContent = ''

        registerView.style.display = 'none'
        loginView.style.display = ''
    } catch (error) {
        registerFeedback.textContent = error.message
    }
})

const registerLoginLink = document.createElement('a')
registerLoginLink.textContent = 'Login'
registerLoginLink.className = 'underline text-blue-400'
registerLoginLink.href = ''
registerView.appendChild(registerLoginLink)

registerLoginLink.addEventListener('click', function (event) {
    event.preventDefault()

    registerView.style.display = 'none'
    loginView.style.display = ''
})

const registerFeedback = document.createElement('p')
registerView.appendChild(registerFeedback)

document.body.appendChild(registerView)

//login

const loginView = document.createElement('div')
loginView.style.display = 'none'

const loginTitle = document.createElement('h1')
loginTitle.textContent = 'MyPet'
loginTitle.className = 'font-bold'
loginView.appendChild(loginTitle)

const loginSubtitle = document.createElement('h2')
loginSubtitle.textContent = 'Login'
loginSubtitle.className = 'font-bold italic'
loginView.appendChild(loginSubtitle)

const loginForm = document.createElement('form')

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
loginUsernameLabel.textContent = 'Username '
loginUsernameLabel.htmlFor = 'username'
loginForm.appendChild(loginUsernameLabel)
const loginUsernameInput = document.createElement('input')
loginUsernameInput.id = 'username'
loginUsernameInput.type = 'text'
loginUsernameInput.className = 'border border-solid border-black'
loginForm.appendChild(loginUsernameInput)

const loginPasswordLabel = document.createElement('label')
loginPasswordLabel.textContent = 'Password '
loginPasswordLabel.htmlFor = 'password'
loginForm.appendChild(loginPasswordLabel)
const loginPasswordInput = document.createElement('input')
loginPasswordInput.id = 'password'
loginPasswordInput.type = 'password'
loginPasswordInput.className = 'border border-solid border-black'
loginForm.appendChild(loginPasswordInput)

const showPasswordButtonLogin = document.createElement('button')
showPasswordButtonLogin.textContent = 'Show'
showPasswordButtonLogin.type = 'button'
showPasswordButtonLogin.className = 'border-2 border-solid border-black bg-emerald-50 px-2'
loginForm.appendChild(showPasswordButtonLogin)

showPasswordButtonLogin.addEventListener('click', function (event) {
    event.preventDefault()

    if (loginPasswordInput.type === 'password') {
        loginPasswordInput.type = 'text'
        showPasswordButtonLogin.textContent = 'Hide'
        showPasswordButtonLogin.className = 'border-2 border-solid border-black bg-red-50 px-2'
    }
    else if (loginPasswordInput.type === 'text') {
        loginPasswordInput.type = 'password'
        showPasswordButtonLogin.textContent = 'Show'
        showPasswordButtonLogin.className = 'border-2 border-solid border-black bg-emerald-50 px-2'
    }
})

// const loginPasswordRepeatLabel = document.createElement('label')
// loginPasswordRepeatLabel.textContent = 'Repeat Password '
// loginForm.appendChild(loginPasswordRepeatLabel)
// const loginPasswordRepeatInput = document.createElement('input')
// loginForm.appendChild(loginPasswordRepeatInput)

const loginSubmitButton = document.createElement('button')
loginSubmitButton.textContent = 'Login'
loginSubmitButton.type = 'submit'
loginSubmitButton.className = 'border-2 border-solid border-black bg-black text-white'
loginForm.appendChild(loginSubmitButton)
loginView.appendChild(loginForm)

loginForm.addEventListener('submit', function (event) {
    event.preventDefault()

    const username = loginUsernameInput.value
    const password = loginPasswordInput.value

    try {
        logic.loginUser(username, password)

        loginForm.reset()
        loginFeedback.textContent = ''

        loginView.style.display = 'none'
        homeView.style.display = ''
    } catch (error) {
        loginFeedback.textContent = error.message
    }
})

const loginRegisterLink = document.createElement('a')
loginRegisterLink.textContent = 'Register'
loginRegisterLink.href = ''
loginRegisterLink.className = 'underline text-blue-400'
loginView.appendChild(loginRegisterLink)

loginRegisterLink.addEventListener('click', function (event) {
    event.preventDefault()

    loginView.style.display = 'none'
    registerView.style.display = ''
})

const loginFeedback = document.createElement('p')
loginView.appendChild(loginFeedback)


document.body.appendChild(loginView)

// home

const homeView = document.createElement('div')
homeView.style.display = 'none'

const homeTitle = document.createElement('h1')
homeTitle.textContent = 'MyPet'
homeView.appendChild(homeTitle)

const homeSubtitle = document.createElement('h2')
homeSubtitle.textContent = 'Welcome Home!'
homeView.appendChild(homeSubtitle)

document.body.appendChild(homeView)
