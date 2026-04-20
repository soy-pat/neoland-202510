import { useState, useEffect } from 'react'

import { FoundReviewItem } from './FoundReviewItem'

export function FoundReviewList() {

    const [reviews, setReviews] = useState([])

    return <div>
        <ul className='flex flex-row flex-wrap gap-2 mt-2 justify-center'>
            {reviews.map(review => <FoundReviewItem key={review.id} review={review} />)}
        </ul>
    </div>
}