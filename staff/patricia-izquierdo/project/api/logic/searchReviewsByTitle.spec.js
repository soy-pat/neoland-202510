import bcrypt from 'bcryptjs'
import { expect } from 'chai'
import { connect, disconnect } from '../mongoose/index.js'
import { data, UserData, ReviewData } from '../data/index.js'
import { logic } from './index.js'

describe('searchReviewsByTitle', () => {
    before(() => connect(process.env.TEST_DB_URL))

    let hashed = null

    beforeEach(() =>
        Promise.all([
            data.deleteAllUsers(),
            data.deleteAllReviews(),
            bcrypt.hash('12345678', 10).then(hash => hashed = hash)
        ]))


    it('succeeds on matching title', () => {
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
                )).then(() => logic.searchReviewsByTitle(user.id, 'asistenta'))
            )
            .then(reviews => {
                expect(reviews).to.have.lengthOf(1)
            })
    })

    it('fails on non-existing user', () => {
        let caught = null

        return logic.searchReviewsByTitle('012345678901234567890123', 'asistenta')
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