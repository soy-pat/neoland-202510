import { useState } from 'react'

import { LogoName } from './components/commons/LogoName'
import { Title } from './components/commons/Title'
import { Form } from './components/commons/Form'
import { Field } from './components/commons/Field'
import { Button } from './components/commons/Button'
import { FieldBody } from './components/commons/FieldBody'
import { ErrorMessage } from './components/commons/ErrorMessage.jsx'

import { logic } from '../logic/index.js'

export function AddReview({ onGoToMyReviews }) {

    const [message, setMessage] = useState('')

    const handleAddReviewSubmit = event => {
        event.preventDefault()

        const form = event.target

        const title = form.title.value
        const image = form.image.value
        const stars = Number(form.stars.value)
        const subject = form.subject.value
        const body = form.body.value
        try {
            logic.addReview(title, image, stars, subject, body)
                .then(() => {
                    form.reset()

                    onGoToMyReviews()
                })
                .catch(error => setMessage(error.message))
        } catch (error) {
            setMessage(error.message)
        }
    }

    return <div className="p-5">
        <LogoName imageClassName='w-25' textClassName='text-xs'></LogoName>

        <Title>Add review</Title>

        <Form onSubmit={handleAddReviewSubmit}>
            <Field alias='title' type='text'>Title</Field>

            <Field alias='image' type='text'>Image</Field>

            <Field alias='stars' type='number'>Stars</Field>

            <Field alias='subject' type='text'>Subject</Field>

            <FieldBody alias='body'>Body</FieldBody>

            <Button className='self-center' type='submit'>Submit</Button>
        </Form>

        <ErrorMessage>{message}</ErrorMessage>
    </div>

}