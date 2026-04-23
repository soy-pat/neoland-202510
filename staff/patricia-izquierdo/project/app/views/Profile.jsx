import { useEffect, useState } from 'react'

import { logic } from '../logic'

import { LogoName } from './components/commons/LogoName'
import { Title } from './components/commons/Title'
import { Anchor } from './components/commons/Anchor'
import { NavegationBar } from './components/commons/NavegationBar'

export function Profile({ onUserLoggedOut }) {
    const [username, setUsername] = useState(null)

    useEffect(() => {
        try {
            logic.getLoggedInUser()
                .then(user => {
                    setUsername(user.username)
                })
                .catch(error => onError(error))
        } catch (error) {
            onError(error)
        }
    }, [])

    const handleLogout = event => {
        event.preventDefault()

        try {
            logic.logoutUser()

            onUserLoggedOut()
        } catch (error) {
            setFeedback({ message: 'sorry, there was an error on logout, please, try it later', level: 'error' })
        }
    }

    return <div className='p-5'>

        <LogoName imageClassName='w-25' textClassName='text-xs'></LogoName>

        <div className='flex flex-col items-center p-10'>

            <img src='../assets/profileuser.jpg' className='rounded-full w-40 h-40'></img>

            <Title>{username}</Title>

            <Anchor className='text-red-500' onClick={handleLogout} >Logout</Anchor>

        </div>

        <NavegationBar></NavegationBar>
    </div>
}