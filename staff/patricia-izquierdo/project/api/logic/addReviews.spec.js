import bcrypt from 'bcryptjs'
import { expect } from 'chai'
import { connect, disconnect } from '../mongoose/index.js'
import { data, UserData } from '../data/index.js'
import { logic } from './index.js'

describe('addReview', () => {
    before(() => connect(process.env.TEST_DB_URL))

    let hashed = null

    beforeEach(() =>
        Promise.all([
            data.deleteAllUsers(),
            data.deleteAllReviews(),
            bcrypt.hash('12345678', 10).then(hash => hashed = hash)
        ])
    )

    it('succeeds on existing user', () => {
        return data.insertUser(new UserData(null, 'Tendo Nendo', 'tendo@nendo.com', 'tendonendo', hashed, null))
            .then(() => data.findUserByEmail('tendo@nendo.com'))
            .then(user =>
                logic.addReview(
                    user.id,
                    'La asistenta',
                    'https://m.media-amazon.com/images/I/71UilMg9WPL.jpg',
                    3,
                    'Me esperaba más',
                    'blablablabla'
                ).then(() => data.findReviewsByUserId(user.id))
            )
            .then(reviews => {
                expect(reviews).to.have.lengthOf(1)
            })
    })

    it('fails on non-existing user', () => {
        let caught = null

        return logic.addReview(
            '012345678901234567890123',
            'La asistenta',
            'https://m.media-amazon.com/images/I/71UilMg9WPL.jpg',
            3,
            'Me esperaba más',
            'blablablabla'
        )
            .catch(error => caught = error)
            .finally(() => {
                expect(caught.message).to.equal('user not found')
            })
    })

    it('fails on invalid userId type', () => {
        expect(() => logic.addReview(
            123,
            'La asistenta',
            'https://m.media-amazon.com/images/I/71UilMg9WPL.jpg',
            3,
            'Me esperaba más',
            'blablablabla'
        )).to.throw('invalid userId type')
    })

    it('fails on invalid image format', () => {
        let caught = null

        return data.insertUser(new UserData(null, 'Tendo Nendo', 'tendo@nendo.com', 'tendonendo', hashed, null))
            .then(() => data.findUserByEmail('tendo@nendo.com'))
            .then(user =>
                logic.addReview(
                    user.id,
                    'La asistenta',
                    'not-a-url',
                    3,
                    'Me esperaba más',
                    'blablablabla'
                )
            )
            .catch(error => caught = error)
            .finally(() => {
                expect(caught.message).to.equal('invalid image format')
            })
    })

    it('fails on invalid stars type', () => {
        let caught = null

        return data.insertUser(new UserData(null, 'Tendo Nendo', 'tendo@nendo.com', 'tendonendo', hashed, null))
            .then(() => data.findUserByEmail('tendo@nendo.com'))
            .then(user =>
                logic.addReview(
                    user.id,
                    'La asistenta',
                    'https://m.media-amazon.com/images/I/71UilMg9WPL.jpg',
                    '3', // ❌ debería ser número
                    'Me esperaba más',
                    'blablablabla'
                )
            )
            .catch(error => caught = error)
            .finally(() => {
                expect(caught.message).to.equal('invalid stars type')
            })
    })

    it('fails on invalid body length', () => {
        let caught = null

        return data.insertUser(new UserData(null, 'Tendo Nendo', 'tendo@nendo.com', 'tendonendo', hashed, null))
            .then(() => data.findUserByEmail('tendo@nendo.com'))
            .then(user =>
                logic.addReview(
                    user.id,
                    'La asistenta',
                    'https://m.media-amazon.com/images/I/71UilMg9WPL.jpg',
                    3,
                    'Me esperaba más',
                    'no' // ❌ demasiado corto
                )
            )
            .catch(error => caught = error)
            .finally(() => {
                expect(caught.message).to.equal('invalid body length')
            })
    })

    afterEach(() =>
        Promise.all([
            data.deleteAllUsers(),
            data.deleteAllReviews()
        ])
    )

    after(() => disconnect())
})