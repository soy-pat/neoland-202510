const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)

const useState = React.useState

function App() {
    const [view, setView] = useState('landing')

    const handleLoginClick = event => {
        event.preventDefault()

        setView('login')
    }

    const handleRegisterClick = event => {
        event.preventDefault()

        setView('register')
    }

    // landing
    if (view === 'landing')
        return <div className="p-4">
            <h1 className="font-bold text-xl">MyPet</h1>
            <p>Welcome!</p>

            <nav>
                <a className="cursor-pointer underline font-bold" onClick={handleLoginClick}>Login</a> or <a className="cursor-pointer underline font-bold" onClick={handleRegisterClick}>Register</a>
            </nav>
        </div>

    // login
    if (view === 'login')
        return <div className="p-4">
            <h1 className="font-bold text-xl">MyPet</h1>

            <h2 className="font-bold">Login</h2>

            <form className="flex flex-col">
                <label htmlFor="username">Username</label>
                <input id="username" type="text" className="border px-1" />

                <label htmlFor="password">Password</label>
                <input id="password" type="password" className="border px-1" />

                <button className="self-end" type="button">Show</button>
                <button className="bg-black text-white px-1 self-center" type="submit">Login</button>
            </form>

            <a className="cursor-pointer underline font-bold">Register</a>

            <p></p>
        </div>

    // register
    if (view === 'register')
        return <div className="p-4">
            <h1 className="font-bold text-xl">MyPet</h1>

            <h2 className="font-bold">Register</h2>

            <form className="flex flex-col">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" className="border px-1" />

                <label htmlFor="email">Email</label>
                <input id="email" type="email" className="border px-1" />

                <label htmlFor="username">Username</label>
                <input id="username" type="text" className="border px-1" />

                <label htmlFor="password">Password</label>
                <input id="password" type="password" className="border px-1" />
                <button className="self-end" type="button">Show</button>

                <label htmlFor="passwordRepeat">Repeat Password</label>
                <input id="passwordRepeat" type="password" className="border px-1" />
                <button className="self-end" type="button">Show</button>

                <button className="bg-black text-white px-1 self-center" type="submit">Register</button>
            </form>

            <a className="cursor-pointer underline font-bold">Login</a>

            <p></p>
        </div>

    // home
    if (view === 'home')
        return <div className="p-4">
            <h1 className="font-bold text-xl">MyPet</h1>

            <h2 className="font-bold">Welcome Home!</h2>

            <div className="flex justify-between">
                <button className="bg-black text-white px-1" type="button">+ Pet</button>
                <button className="bg-black text-white px-1" type="button">Logout</button>
            </div>

            <ul className="flex flex-col gap-2 mt-2">
                <li className="flex items-center border-2 border-black p-2 justify-between">
                    <div className="flex items-center gap-4">
                        <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHQ3b2NjNDE3aW1rZGUwYTJsaXI4dzV6aGI5cGk0NmE4aGJ2cmhoMCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/lNLqexL939DTyR0uH2/giphy.gif" className="rounded-full w-10 h-10 object-cover" />

                        <p>Osito</p>
                    </div>
                    <button className="bg-black text-white px-1 justify-self-end">🗑️</button>
                </li>
            </ul>

            <div className="w-full h-full fixed top-0 left-0 bg-black/75 flex justify-center items-center" style={{ display: 'none' }}>
                <div className="bg-white border-black border-2 p-2">
                    <p className="text-center">Delete Pet?</p>

                    <div className="flex justify-center gap-2">
                        <button className="bg-black text-white px-1">❌</button> <button className="bg-black text-white px-1">✅</button>
                    </div>
                </div>
            </div>

            <p></p>
        </div>

    // add pet
    if (view === 'add-pet')
        return <div className="p-4">
            <h1 className="font-bold text-xl">MyPet</h1>

            <div className="flex justify-between">
                <h2 className="font-bold">Add Pet</h2>

                <a className="cursor-pointer underline font-bold">&lt; Back</a>
            </div>

            <form className="flex flex-col">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" className="border px-1" />

                <label htmlFor="date">Date of Birth</label>
                <input id="date" type="date" className="border px-1" />

                <label htmlFor="weight">Weight (kg)</label>
                <input id="weight" type="number" step="0.01" className="border px-1" />

                <label htmlFor="image">Image</label>
                <input id="image" type="url" className="border px-1" />

                <button className="bg-black text-white px-1 self-center mt-4" type="submit">Add Pet</button>
            </form>

            <p></p>
        </div>
}