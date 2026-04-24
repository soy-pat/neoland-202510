import { expect } from 'chai'
import bcrypt from 'bcryptjs'

import { database } from './models.js'

import { logic } from './logic.js'
import { data, UserData, ReviewData } from './data.js'

describe('logic', () => {
    before(() => database.connect(process.env.TEST_DB_URL))

    let hashed = null

    beforeEach(() =>
        Promise.all([
            data.deleteAllUsers(),
            data.deleteAllReviews(),
            bcrypt.hash('12345678', 10).then(hash => hashed = hash)
        ])
    )

    // -------------------------
    // registerUser
    // -------------------------
    describe('registerUser', () => {
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
    })

    // -------------------------
    // authenticateUser
    // -------------------------
    describe('authenticateUser', () => {
        it('succeeds on existing user', () => {
            return data.insertUser(new UserData(null, 'Tendo Nendo', 'tendo@nendo.com', 'tendonendo', hashed, null))
                .then(() => logic.authenticateUser('tendonendo', '12345678'))
                .then(userId => {
                    expect(userId).to.be.a.string
                    expect(userId).to.have.lengthOf(24)
                })
        })

        it('fails on non-existing user', () => {
            let caught = null

            return logic.authenticateUser('tendonendo', '12345678')
                .catch(error => caught = error)
                .finally(() => {
                    expect(caught.message).to.equal('user not found')
                })
        })

        it('fails on wrong password', () => {
            let caught = null

            return data.insertUser(new UserData(null, 'Tendo Nendo', 'tendo@nendo.com', 'tendonendo', hashed, null))
                .then(() => logic.authenticateUser('tendonendo', 'short'))
                .catch(error => caught = error)
                .finally(() => {
                    expect(caught.message).to.equal('invalid password length')
                })
        })
    })

    // -------------------------
    // getUser
    // -------------------------
    describe('getUser', () => {
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
    })

    // -------------------------
    // addReview
    // -------------------------
    describe('addReview', () => {
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
    })

    // -------------------------
    // getReviews
    // -------------------------
    describe('getReviews', () => {
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
                    )).then(() => logic.getReviews(user.id))
                )
                .then(reviews => {
                    expect(reviews).to.have.lengthOf(1)
                })
        })

        it('fails on non-existing user', () => {
            let caught = null

            return logic.getReviews('012345678901234567890123')
                .catch(error => caught = error)
                .finally(() => {
                    expect(caught.message).to.equal('user not found')
                })
        })
    })

    // -------------------------
    // getUserReviews
    // -------------------------
    describe('getUserReviews', () => {
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
    })

    // -------------------------
    // searchReviewsByTitle
    // -------------------------
    describe('searchReviewsByTitle', () => {
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
    })

    // -------------------------
    // getReview
    // -------------------------
    describe('getReview', () => {
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
    })

    // -------------------------
    // getUserReview
    // -------------------------
    describe('getUserReview', () => {
        it('succeeds on existing review', () => {
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
                        .then(([review]) => logic.getUserReview(review.id))
                )
                .then(review => {
                    expect(review).to.be.instanceOf(ReviewData)
                })
        })

        it('fails on non-existing review', () => {
            let caught = null

            return logic.getUserReview('012345678901234567890123')
                .catch(error => caught = error)
                .finally(() => {
                    expect(caught.message).to.equal('review not found')
                })
        })
    })

    // -------------------------
    // removeReview
    // -------------------------
    describe('removeReview', () => {
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
                        .then(([review]) => logic.removeReview(user.id, review.id))
                        .then(() => data.findReviewsByUserId(user.id))
                )
                .then(reviews => {
                    expect(reviews).to.have.lengthOf(0)
                })
        })

        it('fails on non-existing user', () => {
            let caught = null

            return logic.removeReview('012345678901234567890123', '012345678901234567890123')
                .catch(error => caught = error)
                .finally(() => {
                    expect(caught.message).to.equal('user not found')
                })
        })

        it('fails on non-existing review', () => {
            let caught = null

            return data.insertUser(new UserData(null, 'Tendo Nendo', 'tendo@nendo.com', 'tendonendo', hashed, null))
                .then(() => data.findUserByEmail('tendo@nendo.com'))
                .then(user => logic.removeReview(user.id, '012345678901234567890123'))
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
                                .then(user1 => logic.removeReview(user1.id, review.id))
                        )
                )
                .catch(error => caught = error)
                .finally(() => {
                    expect(caught.message).to.equal('user not owner of review')
                })
        })
    })

    afterEach(() =>
        Promise.all([
            data.deleteAllUsers(),
            data.deleteAllReviews()
        ])
    )

    after(() => database.disconnect())
})
