class Data {
    constructor() {
        this.messages = []
    }

    insertMessage(message) {
        this.messages.push(message)
    }

    getMessages() {
        return this.messages
    }
}

// instance

const data = new Data()