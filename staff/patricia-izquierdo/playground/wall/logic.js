class Logic {
    constructor() { }

    addMessage(author, text) {
        if (typeof author !== 'string') throw new Error('invalid author type')
        if (author.length < 1) throw new Error('invalid author length')
        if (typeof text !== 'string') throw new Error('invalid text type')
        if (text.length < 1) throw new Error('invalid text length')

        const date = new Date().toISOString()

        const message = {
            author: author,
            text: text,
            date: date
        }

        data.insertMessage(message)
    }

    getAllMessages() {
        return data.getMessages()
    }
}

// instance

const logic = new Logic()