import { ValidationError } from "./errors.js"

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const URL_REGEX = /(www|http:|https:)+[^\s]+[\w]/
const ISODATE_REGEX = /^\d{4}-\d{2}-\d{2}$/
const USER_ID_REGEX = /^\user-[0-9]+$/
const PET_ID_REGEX = /^\pet-[0-9]+$/

class Validate {
    name(name) {
        if (typeof name !== 'string') throw new ValidationError('invalid name type')
        if (name.length < 1) throw new ValidationError('invalid name length')
    }

    email(email, explain = 'email') {
        if (typeof email !== 'string') throw new ValidationError(`invalid ${explain} type`)
        if (email.length < 6) throw new ValidationError(`invalid ${explain} length`)
        if (!EMAIL_REGEX.test(email)) throw new ValidationError(`invalid ${explain} format`)
    }

    userId(userId) {
        if (typeof userId !== 'string') throw new ValidationError('invalid userId type')
        if (!USER_ID_REGEX.test(userId)) throw new ValidationError('invalid userId format')
    }

    username(username) {
        if (typeof username !== 'string') throw new ValidationError('invalid username type')
        if (username.length < 3) throw new ValidationError('invalid username length')
    }

    password(password, explain = 'password') {
        if (typeof password !== 'string') throw new ValidationError(`invalid ${explain} type`)
        if (password.length < 8) throw new ValidationError(`invalid ${explain} length`)
    }

    match(value, newValue, explain = 'value', explainNew = 'newValue') {
        if (value !== newValue) throw new ValidationError(`${explain} and ${explainNew} do not match`)
    }

    url(url, explain = 'url') {
        if (typeof url !== 'string') throw new ValidationError(`invalid ${explain} type`)
        if (!URL_REGEX.test(url)) throw new ValidationError(`invalid ${explain} format`)
    }

    date(date, explain = 'date') {
        if (typeof date !== 'string') throw new ValidationError(`invalid ${explain} type`)
        if (!ISODATE_REGEX.test(date)) throw new ValidationError(`invalid ${explain} format`)
    }

    number(number, explain = 'number') {
        if (typeof number !== 'number' || isNaN(number)) throw new ValidationError(`invalid ${explain} type`)
    }

    petId(petId) {
        if (typeof petId !== 'string') throw new ValidationError('invalid petId type')
        if (!PET_ID_REGEX.test(petId)) throw new ValidationError('invalid petId format')
    }
}

// instance

export const validate = new Validate()