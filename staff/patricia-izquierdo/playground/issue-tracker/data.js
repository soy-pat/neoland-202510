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
}

// instance

const data = new Data()