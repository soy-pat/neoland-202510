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

            /*
            for (let i = 0; i < issues.length; i++) {
                const issue = issues[i]
                newIssues.push(issue)
            }
            */

            /*
            for (const i in issues) {
                const issue = issues[i]
                newIssues.push(issue)
            }
            */

            /*
            for (const issue of issues) {
                newIssues.push(issue)
            }
            */

            for (const issue of issues)
                newIssues.push(issue)

            setIssues(newIssues)
        } catch (error) {
            // ?
        }
    }

    const listItems = []

    for (const issue of issues)
        listItems.push(<li className="border">
            <h3 className="text-sm font-bold">{issue.subject} ({issue.status})</h3>
            <p>{issue.body}</p>
            <time className="text-xs" datetime="">{issue.date}</time>
        </li>)


    return <div className="p-2">
        <h1 className="font-bold text-lg">Issue Tracker 📋</h1>

        <div>
            <h2>Create Issue 📝</h2>

            <form className="flex flex-col gap-2" onSubmit={handleIssueSubmit}>
                <div className="flex flex-col">
                    <label className="text-sm" htmlFor="subject">Subject</label>
                    <input className="border" id="subject" />
                </div>

                <div className="flex flex-col">
                    <label className="text-sm" htmlFor="body">Body</label>
                    <input className="border" id="body" />
                </div>

                <button className="border border-black bg-black text-white text-sm" type="submit">Create</button>
            </form>
        </div>

        <div>
            <h2>Issue List</h2>

            <ul className="flex flex-col gap-2">{listItems}</ul>
        </div>
    </div>
}