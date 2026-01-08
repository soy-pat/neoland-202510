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
        for (const issue of this.issues)
            if (issue.id === idIssue)
                return issue

        return null
    }

}

// instance

const data = new Data()