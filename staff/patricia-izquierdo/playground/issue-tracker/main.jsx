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

    const listIssues = []

    for (let i = 0; i < issues.length; i++) {
        const issue = issues[i]

        const subjectIssue = issue.subject
        const bodyIssue = issue.body

        const listIssue = <li className="text-xs">
            <div>
                <h3 className="font-bold">{subjectIssue}</h3>
                <p>{bodyIssue}</p>
            </div>
        </li>

        listIssues.push(listIssue)
    }

    return <div className="flex flex-row place-content-evenly">
        <div className="flex flex-col align-self text-xl">OPEN
            <form className="flex flex-col border p-2 w-25 text-xs" onSubmit={handleIssueSubmit}>

                <label htmlFor="subject">Subject</label>
                <input className="border" type="text" id="subject" />

                <label htmlFor="body">Body</label>
                <textarea className="border h-15" type="text" id="body" />

                <div className="flex justify-end">
                    <button className="border bg-blue-100 text-white cursor-pointer p-1 m-1 text-xs w-15" type="submit">+ New</button>
                </div>

            </form>

            <div>
                <ul>
                    {listIssues}
                </ul>
            </div>
        </div>
        <div className="flex flex-col align-self text-xl">CLOSED
            <div></div>
        </div>
    </div>
}