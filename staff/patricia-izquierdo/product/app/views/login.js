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
loginForm.className = 'flex flex-col'

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
loginUsernameInput.className = 'border px-2 rounded-lg border-solid border-black'
loginForm.appendChild(loginUsernameInput)

const loginPasswordLabel = document.createElement('label')
loginPasswordLabel.textContent = 'Password '
loginPasswordLabel.htmlFor = 'password'
loginForm.appendChild(loginPasswordLabel)
const loginPasswordInput = document.createElement('input')
loginPasswordInput.id = 'password'
loginPasswordInput.type = 'password'
loginPasswordInput.className = 'border px-2 rounded-lg border-solid border-black'
loginForm.appendChild(loginPasswordInput)

const showPasswordButtonLogin = document.createElement('button')
showPasswordButtonLogin.textContent = 'Show'
showPasswordButtonLogin.type = 'button'
showPasswordButtonLogin.className = 'border-2 border-solid border-black bg-emerald-50 px-2 self-end'
loginForm.appendChild(showPasswordButtonLogin)

showPasswordButtonLogin.addEventListener('click', function (event) {
    event.preventDefault()

    if (loginPasswordInput.type === 'password') {
        loginPasswordInput.type = 'text'
        showPasswordButtonLogin.textContent = 'Hide'
        showPasswordButtonLogin.className = 'border-2 border-solid border-black bg-red-50 px-2 self-end'
        loginPasswordInput.className = 'border px-2 rounded-lg border-solid border-black bg-[gold]'
    }
    else if (loginPasswordInput.type === 'text') {
        loginPasswordInput.type = 'password'
        showPasswordButtonLogin.textContent = 'Show'
        showPasswordButtonLogin.className = 'border-2 border-solid border-black bg-emerald-50 px-2 self-end'
        loginPasswordInput.className = 'border px-2 rounded-lg border-solid border-black'
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
loginSubmitButton.className = 'border-2 border-solid border-black bg-black text-white px-4 self-center'
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
loginRegisterLink.className = 'underline font-bold'
loginView.appendChild(loginRegisterLink)

loginRegisterLink.addEventListener('click', function (event) {
    event.preventDefault()

    loginView.style.display = 'none'
    registerView.style.display = ''
})

const loginFeedback = document.createElement('p')
loginView.appendChild(loginFeedback)


document.body.appendChild(loginView)
