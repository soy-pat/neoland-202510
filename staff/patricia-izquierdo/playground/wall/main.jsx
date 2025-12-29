const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

const useState = React.useState

function App() {
    const messagesState = useState(['Hello, World! (Petra, 2025-12-19'])
    const messages = messagesState[0]
    const setMessages = messagesState[1]

    const handleMessageSubmit = event => {
        event.preventDefault()

        // Como el handleMessageSubmit está enlazado con el form por el evento, con la propiedad "event.target" puedo acceder
        // a lo que necesite con esa propiedad. Esto es DOM
        const form = event.target

        const message = form.message.value
        const name = form.name.value

        const date = new Date()
        const newMessage = message + ' (' + name + ', ' + date.toLocaleDateString() + ')'


        // just push is not the way in react, the current values + new value

        const newMessages = []

        for (let i = 0; i < messages.length; i++) {
            const message = messages[i]

            newMessages.push(message)
        }

        newMessage.push(newMessage)

        setMessages(newMessages)

        form.reset()
    }

    const listItems = []

    for (let i = 0; i < messages.length; i++) {
        const message = messages[i]

        const listItem = <li>
            <p>{message}</p>
        </li>

        listItems.push(listItem)
    }

    return <div className="flex flex-col gap-2 p-2">
        <h1 className="text-3xl">Wall</h1>

        <ul className="p-2">
            <li>
                {listItems}
            </li>
        </ul>

        <form className="flex flex-col gap-2 border p-2" onSubmit={handleMessageSubmit}>
            <h2>Leave your message on the wall</h2>

            <label htmlFor="message">Message</label>
            <input className="border" type="text" id="message" placeholder="message" />

            <label htmlFor="name">Name</label>
            <input className="border" type="text" id="name" placeholder="name" />

            <button className="border bg black text-white" type="submit"> Send</button>
        </form>
    </div>
}