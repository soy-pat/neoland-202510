import { LogoName } from './components/commons/LogoName'
import { Anchor } from './components/commons/Anchor'

export function Landing({ onGoToLogin, onGoToRegister }) {

    const handleLoginClick = event => {
        event.preventDefault()

        onGoToLogin()
    }

    const handleRegisterClick = event => {
        event.preventDefault()

        onGoToRegister()
    }


    return <div className="min-h-screen content-center">
        <div className="flex flex-col justify-center content-center">
            <LogoName imageClassName='w-3xs' textClassName='text-2xl m-2'>
            </LogoName>

            <nav className="flex flex-col justify-center content-center">
                <div className="flex justify-center">
                    <Anchor onClick={handleLoginClick} className='text-xl'>Login</Anchor>
                </div>
                <div className="flex justify-center">
                    <Anchor onClick={handleRegisterClick} className='text-xl'>Register</Anchor>
                </div>
            </nav>
        </div>
    </div>
}