import { useState, useEffect } from 'react'

import { useParams } from 'react-router'

import { logic } from '../logic/index.js'

import { LogoName } from './components/commons/LogoName'
import { BookTitle } from './components/commons/BookTitle'
import { NavegationBar } from './components/commons/NavegationBar'
import { BookSubject } from './components/commons/BookSubject'
import { BookBody } from './components/commons/BookBody'
import { CircularBotton } from './components/commons/CircularButton'
import { Button } from './components/commons/Button'

export function MyReview({ onGoToMyReviews }) {

    const [review, setReview] = useState(null)
    const [deleteMode, setDeleteMode] = useState(null)

    const [message, setMessage] = useState('')

    const { reviewId } = useParams()

    useEffect(() => {
        try {
            logic.getReview(reviewId)
                .then(review => setReview(review))
                .catch(error => console.log(error))
        } catch (error) {
            console.log(error)
        }
    })

    const handleRemoveReviewClick = event => {
        event.preventDefault()

        setDeleteMode(true)
    }

    const handleNoRemoveReviewClick = event => {
        event.preventDefault()

        setDeleteMode(null)

    }

    const handleYesRemoveReviewClick = event => {
        event.preventDefault()

        try {
            logic.removeReview(reviewId)
                .then(() => {

                    setDeleteMode(null)

                    onGoToMyReviews()
                })
                .catch(error => setMessage(error.message))
        } catch (error) {
            setMessage(error.message)
        }
    }

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
                    <BookSubject>{review.subject}</BookSubject>

                    <BookBody>{review.body}</BookBody>

                    <p>{message}</p>

                    <NavegationBar></NavegationBar>

                    <CircularBotton className='absolute top-7 right-7 text-sm' onClick={handleRemoveReviewClick}>🗑️</CircularBotton>
                </div>

                {deleteMode && <div className='flex justify-center items-center'>
                    <div className='bg-white rounded-md absolute top-50 p-2'>
                        <p className='text-cyan-950 text-center'>Do you want to delete this review?</p>

                        <div className='flex justify-center'>
                            <Button className='bg-orange-300' onClick={handleNoRemoveReviewClick} >No</Button>

                            <Button onClick={handleYesRemoveReviewClick}>Yes</Button>
                        </div>
                    </div>

                </div>}
            </div>
        })() : null}

    </div>
}