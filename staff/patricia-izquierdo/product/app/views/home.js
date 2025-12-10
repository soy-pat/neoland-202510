// home

const homeView = createView()
hideView(homeView)

const homeTitle = createTitle()
setTextContent(homeTitle, 'MyPet')
addChild(homeView, homeTitle)

const homeSubtitle = document.createElement('h2')
setTextContent(homeSubtitle, 'Welcome Home!')
addChild(homeView, homeSubtitle)

const homeTopPanel = createView()
setClass(homeTopPanel, 'flex justify-between')
addChild(homeView, homeTopPanel)

const homeAddPetButton = document.createElement('button')
setTextContent(homeAddPetButton, '+ Pet')
setType(homeAddPetButton, 'button')
setClass(homeAddPetButton, 'border-2 border-solid border-black bg-black text-white px-4 self-center')
addChild(homeTopPanel, homeAddPetButton)

homeAddPetButton.addEventListener('click', function (event) {
    event.preventDefault()

    hideView(homeView)
    showView(addPetView)
})

const homeLogoutButton = document.createElement('button')
setTextContent(homeLogoutButton, 'Logout')
setType(homeLogoutButton, 'button')
setClass(homeLogoutButton, 'border-2 border-solid border-black bg-black text-white px-4 self-center')
addChild(homeTopPanel, homeLogoutButton)

homeLogoutButton.addEventListener('click', function (event) {
    event.preventDefault()

    logic.logoutUser()

    for (let i = homePetList.children.length - 1; i >= 0; i--) {
        const child = homePetList.children[i]

        homePetList.removeChild(child)
    }

    hideView(homeView)
    showView(loginView)
})

const homePetList = document.createElement('ul')
addChild(homeView, homePetList)

document.body.appendChild(homeView)

function renderHomePetList() {
    const pets = logic.getPets()

    for (let i = 0; i < pets.length; i++) {
        const pet = pets[i]

        const item = document.createElement('li')
        setClass(item, 'flex')

        const image = document.createElement('img')
        image.src = pet.image
        setClass(image, 'rounded-[50%] w-20')

        addChild(item, image)

        const name = createParagraph()
        setTextContent(name, pet.name)
        addChild(item, name)

        addChild(homePetList, item)
    }
}

function clearHomePetList() {
    for (let i = homePetList.children.length - 1; i >= 0; i--) {
        const child = homePetList.children[i]
        homePetList.removeChild(child)
    }
}
