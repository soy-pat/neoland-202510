import { logic } from './logic'

import { Landing } from './views/Landing'
import { Register } from './views/Register'
import { Login } from './views/Login'
import { MyReviews } from './views/MyReviews'
import { AddReview } from './views/AddReview'
import { SearchABook } from './views/SearchABook'
import { UserReview } from './views/UserReview'
import { UserReviews } from './views/UserReviews'
import { MyReview } from './views/MyReview'
import { Profile } from './views/Profile'
import { ModifyMyReview } from './views/ModifyMyReview'
import { ErrorMessage } from './views/components/commons/ErrorMessage'

import { Routes, Route, useNavigate, Navigate } from 'react-router'
import { useState } from 'react'

export function App() {

    const navigate = useNavigate()

    const [feedback, setFeedback] = useState(null)
    let loggedIn = false

    try {
        loggedIn = logic.isUserLoggedIn()
    } catch (error) {
        setFeedback({ message: error.message, level: 'error' })
    }

    const clearFeedbackAndNavigate = path => {

        navigate(path)
    }

    const handleGoToLogin = () => clearFeedbackAndNavigate('/login')

    const handleGoToRegister = () => clearFeedbackAndNavigate('/register')

    const handleGoToMyReviews = () => clearFeedbackAndNavigate('/reviews/mine')

    const handleGoToAddReview = () => clearFeedbackAndNavigate('/addReview')

    const handleGoToMyReview = reviewId => clearFeedbackAndNavigate(`/reviews/mine/${reviewId}/detail`)

    const handleGoToModifyMyReview = reviewId => clearFeedbackAndNavigate(`/reviews/mine/${reviewId}/edit`)

    const handleGoToUserReview = reviewId => clearFeedbackAndNavigate(`/reviews/${reviewId}`)

    const handleGoToUserReviews = userId => clearFeedbackAndNavigate(`/users/${userId}/reviews`)

    return <div className="min-h-screen bg-cyan-950">
        {feedback && <ErrorMessage feedback={feedback} />}
        <Routes>
            <Route path="/" element={<Landing onGoToLogin={handleGoToLogin} onGoToRegister={handleGoToRegister} />} />

            <Route path="/register" element={<Register onGoToLogin={handleGoToLogin} onGoToRegister={handleGoToRegister} />} />

            <Route path="/login" element={<Login onGoToMyReviews={handleGoToMyReviews} onGoToRegister={handleGoToRegister} />} />

            <Route path="/reviews/mine" element={!loggedIn ?
                <Landing onGoToLogin={handleGoToLogin} onGoToRegister={handleGoToRegister}
                />
                :
                <MyReviews onGoToAddReview={handleGoToAddReview} onGoToMyReview={handleGoToMyReview} />
            } />

            <Route path="/addReview" element={!loggedIn ?
                <Landing onGoToLogin={handleGoToLogin} onGoToRegister={handleGoToRegister}
                />
                :
                <AddReview onGoToMyReviews={handleGoToMyReviews} />
            } />

            <Route path="/reviews/mine/:reviewId/detail" element={!loggedIn ?
                <Landing onGoToLogin={handleGoToLogin} onGoToRegister={handleGoToRegister}
                />
                :
                <MyReview onGoToMyReviews={handleGoToMyReviews} onGoToModifyMyReview={handleGoToModifyMyReview} />
            } />

            <Route path="/reviews/mine/:reviewId/edit" element={!loggedIn ?
                <Landing onGoToLogin={handleGoToLogin} onGoToRegister={handleGoToRegister}
                />
                :
                <ModifyMyReview onGoBack={handleGoToMyReview} />
            } />

            <Route path="/reviews/search" element={!loggedIn ?
                <Landing onGoToLogin={handleGoToLogin} onGoToRegister={handleGoToRegister}
                />
                :
                <SearchABook onGoToUserReview={handleGoToUserReview} />
            } />

            <Route path="/reviews/:reviewId" element={!loggedIn ?
                <Landing onGoToLogin={handleGoToLogin} onGoToRegister={handleGoToRegister}
                />
                :
                <UserReview onGoToUserReviews={handleGoToUserReviews} />
            } />

            <Route path="/users/:userId/reviews" element={!loggedIn ?
                <Landing onGoToLogin={handleGoToLogin} onGoToRegister={handleGoToRegister}
                />
                :
                <UserReviews onGoToUserReview={handleGoToUserReview} />
            } />

            <Route path="/users/me" element={!loggedIn ?
                <Landing onGoToLogin={handleGoToLogin} onGoToRegister={handleGoToRegister}
                />
                :
                <Profile onUserLoggedOut={handleGoToLogin} />
            } />

        </Routes>
    </div >
}