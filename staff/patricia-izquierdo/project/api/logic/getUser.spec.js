import bcrypt from 'bcryptjs'
import { expect } from 'chai'
import { connect, disconnect } from '../mongoose/index.js'
import { data, UserData } from '../data/index.js'
import { logic } from './index.js'

describe('getUser', () => {
    before(() => connect(process.env.TEST_DB_URL))

    let hashed = null

    beforeEach(() =>
        Promise.all([
            data.deleteAllUsers(),
            data.deleteAllReviews(),
            bcrypt.hash('12345678', 10).then(hash => hashed = hash)
        ]))


    it('succeeds on existing user', () => {
        return data.insertUser(new UserData(null, 'Tendo Nendo', 'tendo@nendo.com', 'tendonendo', hashed, null))
            .then(() => data.findUserByEmail('tendo@nendo.com'))
            .then(user => logic.getUser(user.id))
            .then(user => {
                expect(user).to.be.instanceOf(UserData)
                expect(user.name).to.equal('Tendo Nendo')
                expect(user.email).to.equal('tendo@nendo.com')
                expect(user.username).to.equal('tendonendo')
            })
    })

    it('fails on non-existing user', () => {
        let caught = null

        return logic.getUser('012345678901234567890123')
            .catch(error => caught = error)
            .finally(() => {
                expect(caught.message).to.equal('user not found')
            })
    })

    afterEach(() => Promise.all([
        data.deleteAllUsers(),
        data.deleteAllReviews()
    ]))

    after(() => disconnect())
})