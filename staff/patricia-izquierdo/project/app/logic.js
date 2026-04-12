const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

import { data } from "./data.js"

class Logic {
    registerUser(name, email, username, password, passwordRepeat) {
        if (typeof name !== 'string') throw new Error('invalid name type')
        if (name.length < 1) throw new Error('invalid name length')

        if (typeof email !== 'string') throw new Error('invalid email type')
        if (email.length < 6) throw new Error('invalid email length')
        if (!EMAIL_REGEX.test(email)) throw new Error('invalid email format')

        if (typeof username !== 'string') throw new Error('invalid username type')
        if (username.length < 3) throw new Error('invalid username length')

        if (typeof password !== 'string') throw new Error('invalid password type')
        if (password.length < 8) throw new Error('invalid password length')

        if (typeof passwordRepeat !== 'string') throw new Error('invalid password repeat type')
        if (passwordRepeat.length < 8) throw new Error('invalid password repeat length')

        if (password !== passwordRepeat) throw new Error('password and password repeat do not match')

        return fetch(`${import.meta.env.VITE_API_URL}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, username, password, passwordRepeat })
        })
            .then(res => {
                const { status } = res

                if (status === 201)
                    return

                return res.json()
                    .then(body => {
                        const { error, message } = body
                        throw new Error(message)
                    })
            })
    }

    authenticateUser(username, password) {
        if (typeof username !== 'string') throw new Error('invalid username type')
        if (username.length < 3) throw new Error('invalid username length')

        if (typeof password !== 'string') throw new Error('invalid password type')
        if (password.length < 8) throw new Error('invalid password length')

        return fetch(`${import.meta.env.VITE_API_URL}/users/auth`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
            .then(res => {
                const { status } = res

                if (status === 200)
                    return res.json()
                        .catch(error => { throw new Error('json error') })
                        .then(token => data.setToken(token))

                return res.json()
                    .then(body => {
                        const { error, message } = body
                        throw new Error(message)
                    })
            })
    }


}
export const logic = new Logic()