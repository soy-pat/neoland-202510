//landing

const landingView = createView()
// hideView(landingView)

const landingTitle = createTitle()
setTextContent(landingTitle, 'MyPet')
setClass(landingTitle, 'font-bold text-xl')
addChild(landingView, landingTitle)

const landingWelcome = createParagraph()
setTextContent(landingWelcome, 'Welcome!')
addChild(landingView, landingWelcome)

const landingAccess = createParagraph()

const landingLoginLink = document.createElement('a')
setTextContent(landingLoginLink, 'Login')
landingLoginLink.href = ''
setClass(landingLoginLink, 'underline font-bold')
addChild(landingAccess, landingLoginLink)

const landingOrText = createTextNode(' or ')
addChild(landingAccess, landingOrText)

const landingRegisterLink = document.createElement('a')
setTextContent(landingRegisterLink, 'Register')
landingRegisterLink.href = ''
setClass(landingRegisterLink, 'underline font-bold')
addChild(landingAccess, landingRegisterLink)

addChild(landingView, landingAccess)

landingLoginLink.addEventListener('click', function (event) {
    event.preventDefault()

    hideView(landingView)
    showView(loginView)
})

landingRegisterLink.addEventListener('click', function (event) {
    event.preventDefault()

    hideView(landingView)
    showView(registerView)
})

document.body.appendChild(landingView)