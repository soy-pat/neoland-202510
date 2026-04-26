export * from './models/index.js'

import { insertUser } from './insertUser.js'
import { findUserByEmail } from './findUserByEmail.js'
import { findUserByUsername } from './findUserByUsername.js'
import { findUserById } from './findUserById.js'
import { deleteAllUsers } from './deleteAllUsers.js'

import { insertReview } from './insertReview.js'
import { findReviewById } from './findReviewById.js'
import { findReviewsByUserId } from './findReviewsByUserId.js'
import { findReviewsByTitle } from './findReviewsByTitle.js'
import { deleteReview } from './deleteReview.js'
import { deleteAllReviews } from './deleteAllReviews.js'

export const data = {
    insertUser,
    findUserByEmail,
    findUserByUsername,
    findUserById,
    deleteAllUsers,
    insertReview,
    findReviewById,
    findReviewsByUserId,
    findReviewsByTitle,
    deleteReview,
    deleteAllReviews
}