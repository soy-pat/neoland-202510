import { addReview } from './addReview'
import { getFoundReviews } from './getFoundReviews'
import { getReview } from './getReview'
import { getReviews } from './getReviews'
import { getUser } from './getUser'
import { getUserReview } from './getUserReview'
import { getUserReviews } from './getUserReviews'
import { getLoggedInUser } from './getLoggedInUser'
import { authenticateUser } from './authenticateUser'
import { logoutUser } from './logoutUser'
import { registerUser } from './registerUser'
import { removeReview } from './removeReview'
import { isUserLoggedIn } from './isUserLoggedIn'
import { modifyReview } from './modifyReview'

export const logic = {
    addReview,
    getFoundReviews,
    getReview,
    getReviews,
    getUser,
    getUserReview,
    getUserReviews,
    authenticateUser,
    logoutUser,
    registerUser,
    getLoggedInUser,
    removeReview,
    isUserLoggedIn,
    modifyReview
}