import { useState, useEffect } from 'react'

import { useParams } from 'react-router'

import { logic } from '../logic'

import { BookSubject } from './components/commons/BookSubject'
import { BookTitle } from './components/commons/BookTitle'
import { LogoName } from './components/commons/LogoName'
import { BookBody } from './components/commons/BookBody'
import { NavegationBar } from './components/commons/NavegationBar'
import { UserProfile } from './components/commons/UserProfile'

export function UserReview({ onGoToUserReviews }) {

    const [review, setReview] = useState(null)
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)

    const { reviewId } = useParams()

    useEffect(() => {
        logic.getUserReview(reviewId)
            .then(review => {
                setReview(review)
            })
            .catch(error => setError(error.message))
    }, [reviewId])

    useEffect(() => {
        if (!review?.userId) return

        logic.getUser(review.userId)
            .then(user => {
                setUser(user)
                setError(null)
            })
            .catch(error => setError(error.message))
    }, [review])

    const handleGoToUserReviews = userId => onGoToUserReviews(userId)


    return <div className="p-5">
        <LogoName imageClassName='w-25' textClassName='text-xs'></LogoName>

        {review ? (() => {
            return <div className="flex flex-col gap-4">
                <div className="flex flex-col items-center gap-4">
                    <BookTitle>{review.title}</BookTitle>

                    <img src={review.image} className="w-30 h-45 object-cover" />

                    <p>{'⭐'.repeat(review.stars)}</p>
                </div>

                <div>
                    <UserProfile user={user} onGoToUserReviews={handleGoToUserReviews}></UserProfile>

                    <BookSubject>{review.subject}</BookSubject>

                    <BookBody>{review.body}</BookBody>

                    <p>{error}</p>

                    <NavegationBar></NavegationBar>
                </div>
            </div>
        })() : null}
    </div>
}