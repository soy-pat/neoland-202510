import { useState, useEffect } from 'react'

import { logic } from '../../logic/index.js'

import { useParams } from 'react-router'

import { UserReviewItem } from './UserReviewItem'

import { Title } from './commons/Title'

export function UserReviewList() {

    const [reviews, setReviews] = useState([])
    const [user, setUser] = useState('')
    const [message, setMessage] = useState('')

    const { userId } = useParams()

    useEffect(() => {
        logic.getUserReviews(userId)
            .then(reviews => {
                setReviews(reviews)
            })
            .catch(error => setError(error.message))
    }, [])

    useEffect(() => {
        logic.getUser(userId)
            .then(user => {
                setUser(user)
                setMessage(null)
            })
            .catch(error => setMessage(error.message))
    }, [])

    return <div>
        <Title>{user.username}</Title>
        <div>
            <ul className="flex flex-row flex-wrap gap-2 mt-2 justify-center">
                {reviews.map(review => <UserReviewItem key={review.id} review={review} />)}
            </ul>
        </div>
    </div>
}