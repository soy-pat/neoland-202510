class Logic {
    constructor() { }

    createIssue(subject, body) {
        if (typeof subject !== 'string') throw new Error('invalid subject type')
        if (subject.length < 1) throw new Error('invalid subject length')
        if (typeof body !== 'string') throw new Error('invalid body type')

        const issue = {
            id: 'issue-' + data.issuesCount,
            subject: subject,
            body: body,
            status: 'open',
            date: new Date().toISOString()
        }

        data.insertIssue(issue)
    }

    removeIssue(idIssue) {
        const issue = data.findIssueById(idIssue)

        if (issue.status === 'closed') throw new Error('invalid issue status')

        data.deleteIssue(issue)
    }

    getAllIssues() {
        return data.getIssues()
    }

    closeIssue(idIssue) {
        const issue = data.findIssueById(idIssue)

        data.closeIssue(issue)
    }

    inProgressIssue(idIssue) {
        const issue = data.findIssueById(idIssue)

        data.setInProgressIssue(issue)
    }
}

// instance

const logic = new Logic()