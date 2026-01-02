class Data {
    constructor() {
        this.issues = [] // [{ date: ..., subject: ..., body: ..., status: 'open' | 'closed' }]
        this.issuesCount = 0
    }

    insertIssue(issue) {
        this.issues.push(issue)
        data.issuesCount++
    }

    getIssues() {
        return data.issues
    }

    findIssueById(idIssue) {
        for (let i = 0; i < this.issues.length; i++) {
            const issue = this.issues[i]

            if (issue.id === idIssue)
                return issue
        }
    }

    closeIssue(issue) {
        const indexOfIssue = this.issues.indexOf(issue)

        this.issues[indexOfIssue].status = 'closed'
    }
}

// instance

const data = new Data()