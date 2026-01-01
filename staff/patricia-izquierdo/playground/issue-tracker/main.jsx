const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

const useState = React.useState

function App() {

    const issuesState = useState([])
    const issues = issuesState[0]
    const setIssues = issuesState[1]

    const handleIssueSubmit = event => {
        event.preventDefault()

        const form = event.target

        const subject = form.subject.value
        const body = form.body.value

        try {
            logic.createIssue(subject, body)

            form.reset()

            const issues = logic.getAllIssues()

            const newIssues = []

            for (let i = 0; i < issues.length; i++) {
                const issue = issues[i]

                newIssues.push(issue)
            }

            setIssues(newIssues)

        } catch (error) {
            console.error(error)
        }
    }

    const handleIssueComplete = idIssue => {

        console.log(idIssue)
    }

    const listIssues = []

    for (let i = 0; i < issues.length; i++) {
        const issue = issues[i]

        const subjectIssue = issue.subject
        const bodyIssue = issue.body
        const idIssue = issue.id

        const listIssue = <li className="text-xs">
            <div className="flex flex-row border p-2 text-xs m-5 justify-between">
                <div className="flex flex-col">
                    <h3 className="font-bold text-left">{subjectIssue}</h3>
                    <p className="text-left">{bodyIssue}</p>
                </div>
                <div className="flex flex-col">
                    <button type="button" onClick={handleIssueComplete(idIssue)}>✅</button>
                    <button type="button">🗑️</button>
                </div>
            </div>
        </li>

        listIssues.push(listIssue)
    }

    return <div className="flex flex-row">
        <div className="flex flex-col text-xl grow basis-0 min-w-0 text-center">OPEN
            <form className="flex flex-col border p-2 text-xs m-5" onSubmit={handleIssueSubmit}>

                <label className="text-left" htmlFor="subject">Subject</label>
                <input className="border" type="text" id="subject" />

                <label className="text-left" htmlFor="body">Body</label>
                <textarea className="border h-15" type="text" id="body" />

                <div className="flex justify-end">
                    <button className="border bg-blue-100 text-white cursor-pointer p-1 m-1 text-xs" type="submit">+ New</button>
                </div>

            </form>

            <div>
                <ul>
                    {listIssues}
                </ul>
            </div>
        </div>
        <div className="flex flex-col text-xl grow basis-0 min-w-0 text-center">CLOSED
            <div></div>
        </div>
    </div>
}