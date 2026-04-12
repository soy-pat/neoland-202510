import { Landing } from "./views/Landing"
import { Register } from "./views/Register"
import { Login } from "./views/Login"

import { Routes, Route, useNavigate, Navigate } from 'react-router'

export function App() {

    const navigate = useNavigate()

    const clearFeedbackAndNavigate = path => {

        navigate(path)
    }

    const handleGoToLogin = () => clearFeedbackAndNavigate('/login')

    const handleGoToRegister = () => clearFeedbackAndNavigate('/register')

    return <div className="min-h-screen bg-cyan-950">
        <Routes>
            <Route path="/" element={<Landing onGoToLogin={handleGoToLogin} onGoToRegister={handleGoToRegister} />} />

            <Route path="/register" element={<Register onGoToLogin={handleGoToLogin} />} />

            <Route path="/login" element={<Login />} />

        </Routes>
    </div>
}