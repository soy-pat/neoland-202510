import bcrypt from 'bcryptjs'
import { expect } from 'chai'
import { connect, disconnect } from '../mongoose/index.js'
import { data, UserData, ReviewData } from '../data/index.js'
import { logic } from './index.js'

describe('getUserReviews', () => {
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
            .then(user =>
                data.insertReview(new ReviewData(
                    null,
                    user.id,
                    'La asistenta',
                    'https://m.media-amazon.com/images/I/71UilMg9WPL.jpg',
                    3,
                    'Me esperaba más',
                    'blablablabla'
                )).then(() => logic.getUserReviews(user.id))
            )
            .then(reviews => {
                expect(reviews).to.have.lengthOf(1)
            })
    })

    afterEach(() => Promise.all([
        data.deleteAllUsers(),
        data.deleteAllReviews()
    ]))

    after(() => disconnect())
})