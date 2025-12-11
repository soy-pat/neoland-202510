// home

const homeView = createView()
hideView(homeView)

const homeTitle = createTitle()
setTextContent(homeTitle, 'MyPet')
setClass(homeTitle, 'font-bold text-xl')
addChild(homeView, homeTitle)

const homeSubtitle = createTitle2()
setTextContent(homeSubtitle, 'Welcome Home!')
addChild(homeView, homeSubtitle)

const homeTopPanel = createPanel()
setClass(homeTopPanel, 'flex justify-between')
addChild(homeView, homeTopPanel)

const homeAddPetButton = createButton()
setTextContent(homeAddPetButton, '+ Pet')
setType(homeAddPetButton, 'button')
setClass(homeAddPetButton, 'border-2 border-solid border-black bg-black text-white px-4 self-center')
addChild(homeTopPanel, homeAddPetButton)

homeAddPetButton.addEventListener('click', function (event) {
    event.preventDefault()

    hideView(homeView)
    showView(addPetView)
})

const homeLogoutButton = createButton()
setTextContent(homeLogoutButton, 'Logout')
setType(homeLogoutButton, 'button')
setClass(homeLogoutButton, 'border-2 border-solid border-black bg-black text-white px-4 self-center')
addChild(homeTopPanel, homeLogoutButton)

homeLogoutButton.addEventListener('click', function (event) {
    event.preventDefault()

    logic.logoutUser()

    clearHomePetList()

    hideView(homeView)
    showView(loginView)
})

const homePetList = createUnorderedList()
addChild(homeView, homePetList)

addChild(document.body, homeView)

function renderHomePetList() {
    const pets = logic.getPets()

    for (let i = 0; i < pets.length; i++) {
        const pet = pets[i]

        const petItem = createListItem()
        setClass(petItem, 'flex')

        const image = createImage()
        setSource(image, pet.image)
        setClass(image, 'rounded-[50%] w-20')

        addChild(petItem, image)

        const name = createParagraph()
        setTextContent(name, pet.name)
        addChild(petItem, name)

        addChild(homePetList, petItem)
    }
}

function clearHomePetList() {
    for (let i = homePetList.children.length - 1; i >= 0; i--) {
        const child = homePetList.children[i]
        removeChild(homePetList, child)
    }
}
