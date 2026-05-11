import { useState } from 'react'

import { Form } from './components/commons/Form'
import { LogoName } from './components/commons/LogoName'
import { Title } from './components/commons/Title'
import { Button } from './components/commons/Button'
import { Field } from './components/commons/Field'
import { ErrorMessage } from './components/commons/ErrorMessage.jsx'
import { Anchor } from './components/commons/Anchor'

import { logic } from '../logic/index.js'

export function Login({ onGoToMyReviews, onGoToRegister }) {

    const handleRegisterClick = event => {
        event.preventDefault()

        onGoToRegister()
    }

    const [message, setMessage] = useState('')

    const handleLoginSubmit = event => {
        event.preventDefault()

        const form = event.target

        const username = form.username.value
        const password = form.password.value
        try {
            logic.authenticateUser(username, password)
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

        <Title>Login</Title>

        <Form onSubmit={handleLoginSubmit}>
            <Field alias='username' type='text'>Username</Field>

            <Field alias='password' type='password'>Password</Field>

            <Button className='self-center' type='submit'>Submit</Button>
        </Form>

        <Anchor onClick={handleRegisterClick} className='text-xl flex justify-center'>Register</Anchor>

        <ErrorMessage>{message}</ErrorMessage>
    </div>

}