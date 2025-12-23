const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

const useState = React.useState

function App() {
    return <div className="p-2">
        <h1 className="text-3xl">Wall</h1>

        <ul>
            <li>
                <p>Hello, World! (Peter, 2025-12-19)</p>
            </li>
        </ul>

        <form className="flex flex-col">
            <label htmlFor="message">Message</label>
            <input className="border" type="text" id="message" />
        </form>
    </div>
}