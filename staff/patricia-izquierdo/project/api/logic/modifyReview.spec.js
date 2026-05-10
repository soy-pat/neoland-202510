import bcrypt from 'bcryptjs'
import { expect } from 'chai'
import { connect, disconnect } from '../mongoose/index.js'
import { data, UserData, ReviewData } from '../data/index.js'
import { logic } from './index.js'

describe('modifyReview', () => {
    before(() => connect(process.env.TEST_DB_URL))

    let hashed = null

    beforeEach(() =>
        Promise.all([
            data.deleteAllUsers(),
            data.deleteAllReviews(),
            bcrypt.hash('12345678', 10).then(hash => hashed = hash)
        ])
    )

    it('succeeds on existing user and owned review', () => {
        let userId
        let reviewId

        return data.insertUser(new UserData(null, 'Tendo Nendo', 'tendo@nendo.com', 'tendonendo', hashed, null))
            .then(() => data.findUserByEmail('tendo@nendo.com'))
            .then(user => {
                userId = user.id

                return data.insertReview(new ReviewData(
                    null,
                    user.id,
                    'La asistenta',
                    'https://m.media-amazon.com/images/I/71UilMg9WPL.jpg',
                    3,
                    'Me esperaba más',
                    'blablablabla'
                ))
            })
            .then(() => data.findReviewsByUserId(userId))
            .then(reviews => {
                reviewId = reviews[0].id

                return logic.modifyReview(
                    userId,
                    reviewId,
                    'Nuevo título',
                    'https://m.media-amazon.com/images/I/71UilMg9WPL.jpg',
                    4,
                    'Nuevo subject',
                    'Nuevo body más largo'
                )
            })
            .then(() => data.findReviewById(reviewId))
            .then(updated => {
                expect(updated.title).to.equal('Nuevo título')
                expect(updated.stars).to.equal(4)
                expect(updated.subject).to.equal('Nuevo subject')
            })
    })

    afterEach(() => Promise.all([
        data.deleteAllUsers(),
        data.deleteAllReviews()
    ]))

    after(() => disconnect())
})
