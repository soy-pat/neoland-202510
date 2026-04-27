import { useState, useEffect } from 'react'

import { logic } from '../../logic/index.js'

import { FoundReviewItem } from './FoundReviewItem'

export function FoundReviewList({ titleSearched, onGoToUserReview }) {

    const [reviews, setReviews] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!titleSearched) return

        try {
            logic.getFoundReviews(titleSearched)
                .then(reviews => {
                    setReviews(reviews)
                    setError(null)
                })
                .catch(error => setError(error.message))
        } catch (error) {
            setError(error.message)
        }
    }, [titleSearched])

    return <div>
        <ul className='flex flex-row flex-wrap gap-2 mt-2 justify-center'>
            {reviews.map(review => <FoundReviewItem key={review.id} review={review} onGoToUserReview={onGoToUserReview} />)}
        </ul>
    </div>
}