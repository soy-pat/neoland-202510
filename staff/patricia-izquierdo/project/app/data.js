class Data {
    setToken(token) {
        sessionStorage.token = token
    }

    getToken() {
        return sessionStorage.token
    }

    removeToken() {
        delete sessionStorage.token
    }
}

export const data = new Data()