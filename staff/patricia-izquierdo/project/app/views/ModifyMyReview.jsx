import { useEffect, useState } from 'react'

import { useParams } from 'react-router'

import { logic } from '../logic'

import { LogoName } from './components/commons/LogoName'
import { Title } from './components/commons/Title'
import { Field } from './components/commons/Field'
import { Button } from './components/commons/Button'
import { FieldBody } from './components/commons/FieldBody'
import { Form } from './components/commons/Form'

export function ModifyMyReview({ onGoBack }) {
    const [review, setReview] = useState(null)
    const [message, setMessage] = useState('')

    const { reviewId } = useParams()

    useEffect(() => {
        if (!reviewId) return

        logic.getReview(reviewId)
            .then(setReview)
            .catch(error => setMessage(error.message))
    }, [reviewId])

    const handleBackClick = event => {
        event.preventDefault()

        onGoBack(reviewId)
    }

    const handleModifyReviewSubmit = event => {
        event.preventDefault()

        const form = event.target

        const title = form.title.value
        const image = form.image.value
        const stars = Number(form.stars.value)
        const subject = form.subject.value
        const body = form.body.value

        try {
            logic.modifyReview(reviewId, title, image, stars, subject, body)
                .then(() => {
                    form.reset()

                    onGoBack(reviewId)
                })
                .catch(error => setMessage(error.message))
        } catch (error) {
            setMessage(error.message)
        }
    }

    return <div className="p-5">
        <LogoName imageClassName='w-25' textClassName='text-xs'></LogoName>

        <Title>Modify My Review</Title>

        {review && (
            <Form onSubmit={handleModifyReviewSubmit}>
                <Field alias='title' type='text' defaultValue={review.title}>Title</Field>

                <Field alias='image' type='text' defaultValue={review.image}>Image</Field>

                <Field alias='stars' type='number' defaultValue={review.stars}>Stars</Field>

                <Field alias='subject' type='text' defaultValue={review.subject}>Subject</Field>

                <FieldBody alias='body' defaultValue={review.body}>Body</FieldBody>

                <Button className='self-center' type='submit'>Submit</Button>
            </Form>
        )}

    </div>
}