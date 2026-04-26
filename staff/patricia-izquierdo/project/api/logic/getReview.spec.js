import bcrypt from 'bcryptjs'
import { expect } from 'chai'
import { connect, disconnect } from '../mongoose/index.js'
import { data, UserData, ReviewData } from '../data/index.js'
import { logic } from './index.js'

describe('getReview', () => {
    before(() => connect(process.env.TEST_DB_URL))

    let hashed = null

    beforeEach(() =>
        Promise.all([
            data.deleteAllUsers(),
            data.deleteAllReviews(),
            bcrypt.hash('12345678', 10).then(hash => hashed = hash)
        ]))


    it('succeeds on existing user and review', () => {
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
                ))
                    .then(() => data.findReviewsByUserId(user.id))
                    .then(([review]) => logic.getReview(user.id, review.id))
            )
            .then(review => {
                expect(review).to.be.instanceOf(ReviewData)
            })
    })

    it('fails on non-existing user', () => {
        let caught = null

        return logic.getReview('012345678901234567890123', '012345678901234567890123')
            .catch(error => caught = error)
            .finally(() => {
                expect(caught.message).to.equal('user not found')
            })
    })

    it('fails on non-existing review', () => {
        let caught = null

        return data.insertUser(new UserData(null, 'Tendo Nendo', 'tendo@nendo.com', 'tendonendo', hashed, null))
            .then(() => data.findUserByEmail('tendo@nendo.com'))
            .then(user => logic.getReview(user.id, '012345678901234567890123'))
            .catch(error => caught = error)
            .finally(() => {
                expect(caught.message).to.equal('review not found')
            })
    })

    it('fails on review owned by another user', () => {
        let caught = null

        return Promise.all([
            data.insertUser(new UserData(null, 'Tendo Nendo', 'tendo@nendo.com', 'tendonendo', hashed, null)),
            data.insertUser(new UserData(null, 'Tendo Nendo2', 'tendo@nendo2.com', 'tendonendo2', hashed, null))
        ])
            .then(() => data.findUserByEmail('tendo@nendo2.com'))
            .then(user2 =>
                data.insertReview(new ReviewData(
                    null,
                    user2.id,
                    'La asistenta',
                    'https://m.media-amazon.com/images/I/71UilMg9WPL.jpg',
                    3,
                    'Me esperaba más',
                    'blablablabla'
                ))
                    .then(() => data.findReviewsByUserId(user2.id))
                    .then(([review]) =>
                        data.findUserByEmail('tendo@nendo.com')
                            .then(user1 => logic.getReview(user1.id, review.id))
                    )
            )
            .catch(error => caught = error)
            .finally(() => {
                expect(caught.message).to.equal('user not owner of review')
            })
    })

    afterEach(() => Promise.all([
        data.deleteAllUsers(),
        data.deleteAllPets()
    ]))

    after(() => disconnect())
})