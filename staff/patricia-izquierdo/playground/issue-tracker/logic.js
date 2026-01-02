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

    getAllIssues() {
        return data.getIssues()
    }

    closeIssue(idIssue) {
        const issue = data.findIssueById(idIssue)

        data.closeIssue(issue)
    }
}

// instance

const logic = new Logic()