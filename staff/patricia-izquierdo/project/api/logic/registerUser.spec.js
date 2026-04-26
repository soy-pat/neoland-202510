import bcrypt from 'bcryptjs'
import { expect } from 'chai'
import { connect, disconnect } from '../mongoose/index.js'
import { data, UserData } from '../data/index.js'
import { logic } from './index.js'

describe('registerUser', () => {
    before(() => connect(process.env.TEST_DB_URL))

    let hashed = null

    beforeEach(() =>
        Promise.all([
            data.deleteAllUsers(),
            data.deleteAllReviews(),
            bcrypt.hash('12345678', 10).then(hash => hashed = hash)
        ]))

    it('succeeds on a new user', () => {
        return logic.registerUser('Tendo Nendo', 'tendo@nendo.com', 'tendonendo', '12345678', '12345678')
            .then(() => data.findUserByEmail('tendo@nendo.com'))
            .then(user => {
                expect(user).to.exist
                expect(user.name).to.equal('Tendo Nendo')
                expect(user.email).to.equal('tendo@nendo.com')
                expect(user.username).to.equal('tendonendo')

                return bcrypt.compare('12345678', user.password)
            })
            .then(match => expect(match).to.be.true)
    })

    it('fails on existing email', () => {
        let caught = null

        return data.insertUser(new UserData(null, 'Tendo Nendo', 'tendo@nendo.com', 'tendonendo2', hashed, null))
            .then(() => logic.registerUser('Tendo Nendo', 'tendo@nendo.com', 'tendonendo', '12345678', '12345678'))
            .catch(error => caught = error)
            .finally(() => {
                expect(caught.message).to.equal('user email already exists')
            })
    })

    it('fails on existing username', () => {
        let caught = null

        return data.insertUser(new UserData(null, 'Tendo Nendo', 'tendo2@nendo.com', 'tendonendo', hashed, null))
            .then(() => logic.registerUser('Tendo Nendo', 'tendo@nendo.com', 'tendonendo', '12345678', '12345678'))
            .catch(error => caught = error)
            .finally(() => {
                expect(caught.message).to.equal('user username already exists')
            })
    })


    afterEach(() => Promise.all([
        data.deleteAllUsers(),
        data.deleteAllPets()
    ]))

    after(() => disconnect())
})