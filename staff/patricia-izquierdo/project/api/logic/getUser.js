import { data, UserData } from '../data/index.js'

import { ID_REGEX } from 'com'

export function getUser(userId) {
    if (typeof userId !== 'string') throw new Error(`invalid userId type`)
    if (!ID_REGEX.test(userId)) throw new Error(`invalid userId format`)

    return data.findUserById(userId)
        .then(userData => {
            if (!userData) throw new Error('user not found')

            const { id, name, email, username, password } = userData

            return new UserData(id, name, email, username, password)
        })
}