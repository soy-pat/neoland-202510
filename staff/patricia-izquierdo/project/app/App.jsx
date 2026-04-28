import { Landing } from './views/Landing'
import { Register } from './views/Register'
import { Login } from './views/Login'
import { MyReviews } from './views/MyReviews'
import { AddReview } from './views/AddReview'
import { SearchABook } from './views/SearchABook'
import { UserReview } from './views/UserReview'
import { UserReviews } from './views/UserReviews'
import { Profile } from './views/Profile'

import { Routes, Route, useNavigate, Navigate } from 'react-router'
import { MyReview } from './views/MyReview'

export function App() {

    const navigate = useNavigate()

    const clearFeedbackAndNavigate = path => {

        navigate(path)
    }

    const handleGoToLogin = () => clearFeedbackAndNavigate('/login')

    const handleGoToRegister = () => clearFeedbackAndNavigate('/register')

    const handleGoToMyReviews = () => clearFeedbackAndNavigate('/myReviews')

    const handleGoToAddReview = () => clearFeedbackAndNavigate('/addReview')

    const handleGoToMyReview = reviewId => clearFeedbackAndNavigate(`/reviews/${reviewId}`)

    const handleGoToUserReview = reviewId => clearFeedbackAndNavigate(`/reviews/searchABook/${reviewId}`)

    const handleGoToUserReviews = userId => clearFeedbackAndNavigate(`/users/${userId}/reviews`)

    return <div className="min-h-screen bg-cyan-950">
        <Routes>
            <Route path="/" element={<Landing onGoToLogin={handleGoToLogin} onGoToRegister={handleGoToRegister} />} />

            <Route path="/register" element={<Register onGoToLogin={handleGoToLogin} />} />

            <Route path="/login" element={<Login onGoToMyReviews={handleGoToMyReviews} />} />

            <Route path="/myReviews" element={<MyReviews onGoToAddReview={handleGoToAddReview} onGoToMyReview={handleGoToMyReview} />} />

            <Route path="/addReview" element={<AddReview onGoToMyReviews={handleGoToMyReviews} />} />

            <Route path="/reviews/:reviewId" element={<MyReview onGoToMyReviews={handleGoToMyReviews} />} />

            <Route path="/reviews/searchABook" element={<SearchABook onGoToUserReview={handleGoToUserReview} />} />

            <Route path="reviews/searchABook/:reviewId" element={<UserReview onGoToUserReviews={handleGoToUserReviews} />} />

            <Route path="/users/:userId/reviews" element={<UserReviews />} />

            <Route path="/users/me" element={<Profile onUserLoggedOut={handleGoToLogin} />} />

        </Routes>
    </div >
}