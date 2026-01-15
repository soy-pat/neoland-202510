const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)

const { useState, useRef } = React


function App() {
    console.log('App -> call')

    const [view, setView] = useState('landing')
    const [message, setMessage] = useState('')

    const [pets, setPets] = useState([])
    const [petId, setPetId] = useState(null)

    const handleLoginClick = () => {
        setView('login')
        setMessage('')
    }

    const handleRegisterClick = () => {
        setView('register')
        setMessage('')
    }

    const handleLogin = () => {
        try {
            const pets = logic.getPets()

            setView('home')
            setMessage('')
            setPets(pets)
        } catch (error) {
            setMessage(error.message)
        }
    }

    const handleRegister = () => {
        setView('login')
        setMessage('')
    }

    const handleLogoutClick = event => {
        event.preventDefault()

        try {
            logic.logoutUser()

            setView('login')
        } catch (error) {
            setMessage('sorry, there was an error on logout, please, try it later')
        }
    }

    const handleAddPetClick = event => {
        event.preventDefault()

        setView('add-pet')
    }

    const handleBackClick = event => {
        event.preventDefault()

        setView('home')
    }

    const handleAddPetSubmit = event => {
        event.preventDefault()

        const form = event.target

        const name = form.name.value
        const birthdate = form.birthdate.value
        const weight = Number(form.weight.value)
        const image = form.image.value

        try {
            logic.addPet(name, birthdate, weight, image)

            form.reset()

            const pets = logic.getPets()

            setMessage('')
            setView('home')
            setPets(pets)
        } catch (error) {
            setMessage(error.message)
        }
    }

    const handleDeletePetClick = event => {
        event.preventDefault()

        const button = event.target

        const petId = button.id

        setPetId(petId)
    }

    const handleCancelDeletePetClick = event => {
        event.preventDefault()

        setPetId(null)
    }

    const handleConfirmDeletePetClick = event => {
        event.preventDefault()

        try {
            setView('home')

            logic.deletePet(petId)

            const pets = logic.getPets()

            setView('home')
            setPets(pets)
            setPetId(null)
        } catch (error) {
            setMessage(error.message)
        }
    }

    console.log('App -> render')

    // landing
    if (view === 'landing')
        return <Landing onLoginClick={handleLoginClick} onRegisterClick={handleRegisterClick} />

    // login
    if (view === 'login')
        return <Login onLogin={handleLogin} onRegisterClick={handleRegisterClick} />

    // register
    if (view === 'register')
        return <Register onRegister={handleRegister} onLoginClick={handleLoginClick} />

    // home
    if (view === 'home') {
        const petItems = []

        for (const pet of pets) {
            const petItem = <li className="flex items-center border-2 border-black p-2 justify-between">
                <div className="flex items-center gap-4">
                    <img src={pet.image} className="rounded-full w-10 h-10 object-cover" />

                    <p>{pet.name}</p>
                </div>
                <button className="bg-black text-white px-1 justify-self-end" type="button" id={pet.id} onClick={handleDeletePetClick}>🗑️</button>
            </li>

            petItems.push(petItem)
        }

        return <div className="p-4">
            <h1 className="font-bold text-xl">MyPet</h1>

            <h2 className="font-bold">Welcome Home!</h2>

            <div className="flex justify-between">
                <button className="bg-black text-white px-1" type="button" onClick={handleAddPetClick}>+ Pet</button>
                <button className="bg-black text-white px-1" type="button" onClick={handleLogoutClick}>Logout</button>
            </div>

            <ul className="flex flex-col gap-2 mt-2">
                {petItems}
            </ul>

            {petId && <div className="w-full h-full fixed top-0 left-0 bg-black/75 flex justify-center items-center">
                <div className="bg-white border-black border-2 p-2">
                    <p className="text-center">Delete Pet?</p>

                    <div className="flex justify-center gap-2">
                        <button className="bg-black text-white px-1" onClick={handleCancelDeletePetClick}>❌</button>
                        <button className="bg-black text-white px-1" onClick={handleConfirmDeletePetClick}>✅</button>
                    </div>
                </div>
            </div>}

            <p>{message}</p>
        </div>
    }
    // add pet
    if (view === 'add-pet')
        return <div className="p-4">
            <h1 className="font-bold text-xl">MyPet</h1>

            <div className="flex justify-between">
                <h2 className="font-bold">Add Pet</h2>

                <a className="cursor-pointer underline font-bold" onClick={handleBackClick}>&lt; Back</a>
            </div>

            <form className="flex flex-col" onSubmit={handleAddPetSubmit}>
                <label htmlFor="name">Name</label>
                <input id="name" name="name" autoComplete="off" type="text" className="border px-1" />

                <label htmlFor="date">Date of Birth</label>
                <input id="birthdate" name="birthdate" autoComplete="off" type="date" className="border px-1" />

                <label htmlFor="weight">Weight (kg)</label>
                <input id="weight" name="weight" autoComplete="off" type="number" step="0.01" className="border px-1" />

                <label htmlFor="image">Image</label>
                <input id="image" name="image" autoComplete="off" type="url" className="border px-1" />

                <button className="bg-black text-white px-1 self-center mt-4" type="submit">Add Pet</button>
            </form>

            <p>{message}</p>
        </div>
}