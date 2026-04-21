import { useState, useEffect } from 'react'

import { logic } from '../../logic.js'

export function FoundReviewItem({ review }) {
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

    return <li>
        <div className='flex flex-col items-center'>
            <img src={review.image} className="w-14 h-24 object-cover m-1" />

            <p className="text-xs">{'⭐'.repeat(review.stars)}</p>

            <div className='flex flex-row items-center m-1'>
                <img src="../../assets/profileuser.jpg" className="rounded-full w-5 h-5 m-1"></img>

                <p className='text-white text-xs'>{user.username}</p>
            </div>
        </div>
    </li>
}