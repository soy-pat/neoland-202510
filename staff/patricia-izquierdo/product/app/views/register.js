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
registerForm.className = 'flex flex-col'

const registerNameLabel = document.createElement('label')
registerNameLabel.textContent = 'Name '
// to relate the label to the input (repeat in all labels)
registerNameLabel.htmlFor = 'name'
registerForm.appendChild(registerNameLabel)
const registerNameInput = document.createElement('input')
registerNameInput.id = 'name'
registerNameInput.type = 'text'
registerNameInput.className = 'border rounded-lg px-2 border-solid border-black'
registerForm.appendChild(registerNameInput)

const registerEmailLabel = document.createElement('label')
registerEmailLabel.textContent = 'Email '
registerEmailLabel.htmlFor = 'email'
registerForm.appendChild(registerEmailLabel)
const registerEmailInput = document.createElement('input')
registerEmailInput.id = 'email'
registerEmailInput.type = 'email'
registerEmailInput.className = 'border rounded-lg px-2 border-solid border-black'
registerForm.appendChild(registerEmailInput)

const registerUsernameLabel = document.createElement('label')
registerUsernameLabel.textContent = 'Username '
registerUsernameLabel.htmlFor = 'username'
registerForm.appendChild(registerUsernameLabel)
const registerUsernameInput = document.createElement('input')
registerUsernameInput.id = 'username'
registerUsernameInput.type = 'text'
registerUsernameInput.className = 'border rounded-lg px-2 border-solid border-black'
registerForm.appendChild(registerUsernameInput)

const registerPasswordLabel = document.createElement('label')
registerPasswordLabel.textContent = 'Password '
registerPasswordLabel.htmlFor = 'password'
registerForm.appendChild(registerPasswordLabel)
const registerPasswordInput = document.createElement('input')
registerPasswordInput.type = 'password'
registerPasswordInput.id = 'password'
registerPasswordInput.className = 'border px-2 rounded-lg border-solid border-black'
registerForm.appendChild(registerPasswordInput)
const showPasswordButtonRegister = document.createElement('button')
showPasswordButtonRegister.textContent = 'Show'
// to not work as submit button
showPasswordButtonRegister.type = 'button'
showPasswordButtonRegister.className = 'border-2 border-solid border-black bg-emerald-50 px-2 self-end'
registerForm.appendChild(showPasswordButtonRegister)

showPasswordButtonRegister.addEventListener('click', function (event) {
    event.preventDefault()

    if (registerPasswordInput.type === 'password') {
        registerPasswordInput.type = 'text'
        showPasswordButtonRegister.textContent = 'Hide'
        showPasswordButtonRegister.className = 'border-2 border-solid border-black bg-red-50 px-2 self-end'
        registerPasswordInput.className = 'border px-2 rounded-lg border-solid border-black bg-[gold]'
    }
    else if (registerPasswordInput.type === 'text') {
        registerPasswordInput.type = 'password'
        showPasswordButtonRegister.textContent = 'Show'
        showPasswordButtonRegister.className = 'border-2 border-solid border-black bg-emerald-50 px-2 self-end'
        registerPasswordInput.className = 'border px-2  rounded-lg border-solid border-black'
    }
})

const registerPasswordRepeatLabel = document.createElement('label')
registerPasswordRepeatLabel.textContent = 'Repeat Password '
registerPasswordRepeatLabel.htmlFor = 'passwordrepeat'
registerForm.appendChild(registerPasswordRepeatLabel)
const registerPasswordRepeatInput = document.createElement('input')
registerPasswordRepeatInput.id = 'passwordrepeat'
registerPasswordRepeatInput.type = 'password'
registerPasswordRepeatInput.className = 'border px-2 rounded-lg border-solid border-black'
registerForm.appendChild(registerPasswordRepeatInput)

const showPasswordRepeatButtonRegister = document.createElement('button')
showPasswordRepeatButtonRegister.textContent = 'Show'
showPasswordRepeatButtonRegister.type = 'button'
showPasswordRepeatButtonRegister.className = 'border-2 border-solid border-black bg-emerald-50 px-2 self-end'
registerForm.appendChild(showPasswordRepeatButtonRegister)

showPasswordRepeatButtonRegister.addEventListener('click', function (event) {
    event.preventDefault()

    if (registerPasswordRepeatInput.type === 'password') {
        registerPasswordRepeatInput.type = 'text'
        showPasswordRepeatButtonRegister.textContent = 'Hide'
        showPasswordRepeatButtonRegister.className = 'border-2 border-solid border-black bg-red-50 px-2 self-end'
        registerPasswordRepeatInput.className = 'border px-2 rounded-lg border-solid border-black bg-[gold]'
    }
    else if (registerPasswordRepeatInput.type === 'text') {
        registerPasswordRepeatInput.type = 'password'
        showPasswordRepeatButtonRegister.textContent = 'Show'
        showPasswordRepeatButtonRegister.className = 'border-2 border-solid border-black bg-emerald-50 px-2 self-end'
        registerPasswordRepeatInput.className = 'border rounded-lg px-2 border-solid border-black'
    }
})

const registerSubmitButton = document.createElement('button')
registerSubmitButton.textContent = 'Register'
registerSubmitButton.type = 'submit'
registerSubmitButton.className = 'border-2 border-solid border-black bg-black text-white px-4 self-center'
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
registerLoginLink.className = 'underline font-bold'
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
