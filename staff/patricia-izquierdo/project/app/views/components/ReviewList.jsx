import { useState, useEffect } from 'react'

import { logic } from '../../logic.js'

import { ReviewItem } from './ReviewItem'

export function ReviewList({ onGoToMyReview }) {

    const [message, setMessage] = useState('')

    const [reviews, setReviews] = useState([])
    const [reviewId, setReviewId] = useState(null)

    useEffect(() => {
        try {
            logic.getReviews()
                .then(reviews => {
                    setReviews(reviews)
                })
                .catch(error => setMessage(error.message))
        } catch (error) {
            setMessage(error.message)
        }
    }, [])

    return <div>
        <ul className="flex flex-row flex-wrap gap-2 mt-2 justify-center">
            {reviews.map(review => <ReviewItem key={review.id} review={review} onGoToMyReview={onGoToMyReview} />)}
        </ul>
    </div>

}