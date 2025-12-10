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

const loginForm = createForm()
setClass(loginForm, 'flex flex-col')

// const loginNameLabel = createLabel()
// loginNameLabel.textContent = 'Name '
// loginForm.appendChild(loginNameLabel)
// const loginNameInput = createInput()
// loginForm.appendChild(loginNameInput)

// const loginEmailLabel = createLabel()
// loginEmailLabel.textContent = 'Email '
// loginForm.appendChild(loginEmailLabel)
// const loginEmailInput = createInput()
// loginForm.appendChild(loginEmailInput)

const loginUsernameLabel = createLabel()
setTextContent(loginUsernameLabel, 'Username')
setFor(loginUsernameLabel, 'username')
addChild(loginForm, loginUsernameLabel)
const loginUsernameInput = createInput()
setId(loginUsernameInput, 'username')
setType(loginUsernameInput, 'text')
setClass(loginUsernameInput, 'border px-2 rounded-lg border-solid border-black')
addChild(loginForm, loginUsernameInput)

const loginPasswordLabel = createLabel()
setTextContent(loginPasswordLabel, 'Password ')
setFor(loginPasswordLabel, 'password')
addChild(loginForm, loginPasswordLabel)
const loginPasswordInput = createInput()
setId(loginPasswordInput, 'password')
setType(loginPasswordInput, 'password')
setClass(loginPasswordInput, 'border px-2 rounded-lg border-solid border-black')
addChild(loginForm, loginPasswordInput)

const showPasswordButtonLogin = createButton()
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

// const loginPasswordRepeatLabel = createLabel()
// loginPasswordRepeatLabel.textContent = 'Repeat Password '
// loginForm.appendChild(loginPasswordRepeatLabel)
// const loginPasswordRepeatInput = createInput()
// loginForm.appendChild(loginPasswordRepeatInput)

const loginSubmitButton = createButton()
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

        reset(loginForm)
        setTextContent(loginFeedback, '')

        renderHomePetList()

        hideView(loginView)
        showView(homeView)
    } catch (error) {
        setTextContent(loginFeedback, error.message)
    }
})

const loginRegisterLink = createLink()
setTextContent(loginRegisterLink, 'Register')
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
