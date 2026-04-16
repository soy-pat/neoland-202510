import { Landing } from "./views/Landing"
import { Register } from "./views/Register"
import { Login } from "./views/Login"
import { MyReviews } from "./views/MyReviews"
import { AddReview } from "./views/AddReview"

import { Routes, Route, useNavigate, Navigate } from 'react-router'
import { MyReview } from "./views/MyReview"

export function App() {

    const navigate = useNavigate()

    const clearFeedbackAndNavigate = path => {

        navigate(path)
    }

    const handleGoToLogin = () => clearFeedbackAndNavigate('/login')

    const handleGoToRegister = () => clearFeedbackAndNavigate('/register')

    const handleGoToMyReviews = () => clearFeedbackAndNavigate('/myReviews')

    const handleGoToAddReview = () => clearFeedbackAndNavigate('/addReview')

    return <div className="min-h-screen bg-cyan-950">
        <Routes>
            <Route path="/" element={<Landing onGoToLogin={handleGoToLogin} onGoToRegister={handleGoToRegister} />} />

            <Route path="/register" element={<Register onGoToLogin={handleGoToLogin} />} />

            <Route path="/login" element={<Login onGoToMyReviews={handleGoToMyReviews} />} />

            <Route path="/myReviews" element={<MyReviews onGoToAddReview={handleGoToAddReview} />} />

            <Route path="/addReview" element={<AddReview onGoToMyReviews={handleGoToMyReviews} />} />

            <Route path="/myReview" element={<MyReview onGoToMyReviews={handleGoToMyReviews} />} />

        </Routes>
    </div>
}