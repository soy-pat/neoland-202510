const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

const useState = React.useState

function App() {

    // estado de issues
    const issuesState = useState([])
    const issues = issuesState[0]
    const setIssues = issuesState[1]

    // estado para las vistas
    const viewIssuesSate = useState('home')
    const viewIssues = viewIssuesSate[0]
    const setViewIssues = viewIssuesSate[1]

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

            setViewIssues('home')
        } catch (error) {
            console.error(error)
        }
    }

    const handleIssueComplete = event => {
        event.preventDefault()

        const divIssue = event.currentTarget.closest('div')
        const idIssue = divIssue.id

        try {
            logic.closeIssue(idIssue)

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

    const handleIssueDelete = event => {
        event.preventDefault()

        const divIssue = event.currentTarget.closest('div')
        const idIssue = divIssue.id

        try {
            logic.removeIssue(idIssue)

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

    const handleAddIssueView = event => {
        event.preventDefault()

        setViewIssues('addIssue')
    }

    const handleClosedIssuesView = event => {
        event.preventDefault()

        setViewIssues('closedIssues')
    }

    const handleHomeIssuesView = event => {
        event.preventDefault()

        setViewIssues('home')
    }

    const handleIssueInProgress = event => {
        event.preventDefault()

        const divIssue = event.currentTarget.closest('div')
        const idIssue = divIssue.id

        try {
            logic.inProgressIssue(idIssue)

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

        if (issue.status === 'open' && viewIssues === 'home') {

            const subjectIssue = issue.subject
            const bodyIssue = issue.body
            let idIssue = issue.id

            const listIssue = <li className="text-xs">
                <div className="flex flex-row border p-2 text-xs m-5 justify-between items-center">
                    <div className="flex flex-col">
                        <h3 className="font-bold text-left">{subjectIssue}</h3>
                        <p className="text-left">{bodyIssue}</p>
                    </div>
                    <div className="flex flex-col" id={idIssue}>
                        <button type="button" onClick={handleIssueComplete}>✅</button>
                        <button type="button" onClick={handleIssueInProgress}>➡️</button>
                        <button type="button" onClick={handleIssueDelete}>🗑️</button>
                    </div>
                </div>
            </li>

            listIssues.push(listIssue)
        }
    }

    const listClosedIssues = []

    for (let i = 0; i < issues.length; i++) {
        const issue = issues[i]

        if (issue.status === 'closed') {

            const subjectIssue = issue.subject
            const bodyIssue = issue.body

            const listClosedIssue = <li className="text-xs">
                <div className="flex flex-col border p-2 text-xs m-5 justify-between">
                    <h3 className="font-bold text-left">{subjectIssue}</h3>
                    <p className="text-left">{bodyIssue}</p>
                </div>
            </li>

            listClosedIssues.push(listClosedIssue)
        }
    }

    const listInProgressIssues = []

    for (let i = 0; i < issues.length; i++) {
        const issue = issues[i]

        if (issue.status === 'in-progress') {

            const subjectIssue = issue.subject
            const bodyIssue = issue.body
            let idIssue = issue.id

            const listInProgressIssue = <li className="text-xs">
                <div className="flex flex-row border p-2 text-xs m-5 justify-between items-center">
                    <div className="flex flex-col">
                        <h3 className="font-bold text-left">{subjectIssue}</h3>
                        <p className="text-left">{bodyIssue}</p>
                    </div>
                    <div className="flex flex-col" id={idIssue}>
                        <button type="button" onClick={handleIssueComplete}>✅</button>
                        <button type="button" onClick={handleIssueDelete}>🗑️</button>
                    </div>
                </div>
            </li>

            listInProgressIssues.push(listInProgressIssue)
        }
    }

    return (
        <>
            {/* HOME */}
            {viewIssues === 'home' && (<div className="flex flex-row">
                <div className="flex flex-col text-xl grow basis-0 min-w-0 text-center">OPEN
                    <button className="border bg-blue-100 text-white cursor-pointer p-1 m-1 text-xs" onClick={handleAddIssueView}>+ New Issue</button>
                    <div>
                        <ul>
                            {listIssues}
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col text-xl grow basis-0 min-w-0 text-center">IN PROGRESS
                    <div>
                        <ul>
                            {listInProgressIssues}
                        </ul>
                    </div>
                </div>
                <div>
                    <button onClick={handleClosedIssuesView}>⭕</button>
                </div>
            </div>)}
            {/* ADDISSUE */}
            {viewIssues === 'addIssue' && (
                <div className="">
                    <form className="flex flex-col m-3" onSubmit={handleIssueSubmit}>
                        <h2 className="font-bold text-xl">Create a new Issue</h2>

                        <label className="text-left" htmlFor="subject">Subject</label>
                        <input className="border" type="text" id="subject" />

                        <label className="text-left" htmlFor="body">Body</label>
                        <textarea className="border h-20" type="text" id="body" />

                        <div className="flex justify-end">
                            <button className="border bg-blue-100 text-white cursor-pointer p-1 m-1 text-xs" type="submit">+ New</button>
                        </div>

                    </form>
                </div>)}
            {/* CLOSEDISSUES */}
            {viewIssues === 'closedIssues' && (
                <div className="flex flex-row">
                    <div className="flex flex-col text-xl grow basis-0 min-w-0 text-center order-2">CLOSED
                        <div>
                            <ul>
                                {listClosedIssues}
                            </ul>
                        </div>
                    </div>

                    <div>
                        <button onClick={handleHomeIssuesView}>↩️</button>
                    </div>
                </div>

            )}
        </>
    )
}