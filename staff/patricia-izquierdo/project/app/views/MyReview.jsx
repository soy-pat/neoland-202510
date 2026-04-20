import { useState, useEffect } from 'react'

import { useParams } from 'react-router'

import { logic } from '../logic'

import { LogoName } from './components/commons/LogoName'
import { BookTitle } from './components/commons/BookTitle'
import { NavegationBar } from './components/commons/NavegationBar'
import { BookSubject } from './components/commons/BookSubject'
import { BookBody } from './components/commons/BookBody'
import { CircularBotton } from './components/commons/CircularButton'

export function MyReview() {

    const [review, setReview] = useState(null)

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

                    <NavegationBar></NavegationBar>

                    <CircularBotton className='absolute top-7 right-7'>🗑️</CircularBotton>

                </div>
            </div>
        })() : null}

    </div>
}