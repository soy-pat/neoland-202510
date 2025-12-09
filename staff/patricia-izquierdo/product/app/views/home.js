// home

const homeView = document.createElement('div')
homeView.style.display = 'none'

const homeTitle = document.createElement('h1')
homeTitle.textContent = 'MyPet'
homeView.appendChild(homeTitle)

const homeSubtitle = document.createElement('h2')
homeSubtitle.textContent = 'Welcome Home!'
homeView.appendChild(homeSubtitle)

const homeTopPanel = document.createElement('div')
homeTopPanel.className = 'flex justify-between'
homeView.appendChild(homeTopPanel)

const homeAddPetButton = document.createElement('button')
homeAddPetButton.textContent = '+ Pet'
homeAddPetButton.type = 'button'
homeAddPetButton.className = 'border-2 border-solid border-black bg-black text-white px-4 self-center'
homeTopPanel.appendChild(homeAddPetButton)

homeAddPetButton.addEventListener('click', function (event) {
    event.preventDefault()

    homeView.style.display = 'none'
    addPetView.style.display = ''
})

const homeLogoutButton = document.createElement('button')
homeLogoutButton.textContent = 'Logout'
homeLogoutButton.type = 'button'
homeLogoutButton.className = 'border-2 border-solid border-black bg-black text-white px-4 self-center'
homeTopPanel.appendChild(homeLogoutButton)

homeLogoutButton.addEventListener('click', function (event) {
    event.preventDefault()

    logic.logoutUser()

    for (let i = homePetList.children.length - 1; i >= 0; i--) {
        const child = homePetList.children[i]

        // homePetList.removeChild(child)
        child.remove()
    }

    homeView.style.display = 'none'
    loginView.style.display = ''
})

const homePetList = document.createElement('ul')
homeView.appendChild(homePetList)

document.body.appendChild(homeView)
