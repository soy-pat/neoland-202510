export * from './models/User.js'
export * from './models/Review.js'

import { registerUser } from './registerUser.js'
import { authenticateUser } from './authenticateUser.js'
import { getUser } from './getUser.js'

import { addReview } from './addReview.js'
import { getReview } from './getReview.js'
import { getReviews } from './getReviews.js'
import { getUserReview } from './getUserReview.js'
import { getUserReviews } from './getUserReviews.js'
import { searchReviewsByTitle } from './searchReviewsByTitle.js'
import { removeReview } from './removeReview.js'

export const logic = {
    registerUser,
    authenticateUser,
    getUser,
    addReview,
    getReview,
    getReviews,
    getUserReview,
    getUserReviews,
    searchReviewsByTitle,
    removeReview
}