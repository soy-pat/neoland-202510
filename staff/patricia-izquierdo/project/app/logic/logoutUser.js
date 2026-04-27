import { data } from '../data/index.js'

export function logoutUser() {
    data.removeToken()
}