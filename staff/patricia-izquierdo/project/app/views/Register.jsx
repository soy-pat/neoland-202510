import { useState } from 'react'

import { LogoName } from './components/commons/LogoName'
import { Form } from './components/commons/Form'
import { Field } from './components/commons/Field'
import { Title } from './components/commons/Title'
import { Button } from './components/commons/Button'
import { ErrorMessage } from './components/commons/ErrorMessage'

import { logic } from '../logic/index.js'

export function Register({ onGoToLogin }) {

    const [message, setMessage] = useState('')

    const handleRegisterSubmit = event => {
        event.preventDefault()

        const form = event.target

        const name = form.name.value
        const email = form.email.value
        const username = form.username.value
        const password = form.password.value
        const passwordRepeat = form.passwordrepeat.value

        try {
            logic.registerUser(name, email, username, password, passwordRepeat)
                .then(() => {
                    form.reset()

                    onGoToLogin()
                })
                .catch(error => setMessage(error.message))
        } catch (error) {
            setMessage(error.message)
        }
    }

    return <div className='p-5'>
        <LogoName imageClassName='w-25' textClassName='text-xs'></LogoName>

        <Title>Register</Title>

        <Form onSubmit={handleRegisterSubmit}>
            <Field alias='name' type='text'>Name</Field>

            <Field alias='email' type='email'>Email</Field>

            <Field alias='username' type='text'>Username</Field>

            <Field alias='password' type='password'>Password</Field>

            <Field alias='passwordrepeat' type='password'>Repeat Password</Field>

            <Button className='self-center' type='submit'>Submit</Button>
        </Form>

        <ErrorMessage>{message}</ErrorMessage>
    </div>

}