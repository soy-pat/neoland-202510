class Data {
    constructor() {
        this.issues = [] // [{ date: ..., subject: ..., body: ..., status: 'open' | 'closed' }]
        this.issuesCount = 0
    }

    insertIssue(issue) {
        this.issues.push(issue)
        data.issuesCount++
    }

    deleteIssue(issue) {
        const isseIndexOf = this.issues.indexOf(issue)
        this.issues.splice(isseIndexOf)
        data.issuesCount--
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

    setInProgressIssue(issue) {
        const indexOfIssue = this.issues.indexOf(issue)

        this.issues[indexOfIssue].status = 'in-progress'
    }
}

// instance

const data = new Data()