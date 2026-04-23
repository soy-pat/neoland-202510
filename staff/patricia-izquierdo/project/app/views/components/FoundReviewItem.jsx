import { useState, useEffect } from 'react'

import { logic } from '../../logic.js'

import { UserProfile } from './commons/UserProfile'

export function FoundReviewItem({ review, onGoToUserReview }) {
    const [user, setUser] = useState('')
    const [error, setError] = useState(null)

    useEffect(() => {
        try {
            logic.getUser(review.userId)
                .then(user => {
                    setUser(user)
                    setError(null)
                })
                .catch(error => setError(error.message))
        } catch (error) {
            setError(error.message)
        }
    })

    const handleGoToUserReview = reviewId => onGoToUserReview(reviewId)

    return <li onClick={() => handleGoToUserReview(review.id)}>
        <div className='flex flex-col items-center'>
            <img src={review.image} className="w-14 h-24 object-cover m-1" />

            <p className="text-xs">{'⭐'.repeat(review.stars)}</p>

            <UserProfile user={user} />
        </div>
    </li>
}