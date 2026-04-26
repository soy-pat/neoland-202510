import { data } from '../data/index.js'

import bcrypt from 'bcryptjs'

export function authenticateUser(username, password) {
    if (typeof username !== 'string') throw new Error('invalid username type')
    if (username.length < 1) throw new Error('invalid username length')

    if (typeof password !== 'string') throw new Error('invalid password type')
    if (password.length < 8) throw new Error('invalid password length')

    return data.findUserByUsername(username)
        .then(userData => {
            if (userData === null) throw new Error('user not found')

            return bcrypt.compare(password, userData.password)
                .catch(error => { throw new Error(error.message) })
                .then(match => {
                    if (!match) throw new Error('incorrect password')

                    return userData.id
                })
        })
}