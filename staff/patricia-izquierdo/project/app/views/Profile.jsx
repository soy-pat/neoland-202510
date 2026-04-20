import { LogoName } from './components/commons/LogoName'
import { Title } from './components/commons/Title'
import { Anchor } from './components/commons/Anchor'

export function Profile({ user }) {
    return <div className='p-5'>

        <LogoName imageClassName='w-25' textClassName='text-xs'></LogoName>

        <div className='flex flex-col'>

            <img src='../../../assets/profileuser.png' className='rounded-full w-15 h-15'></img>

            <Title>{user.username}</Title>

            <Anchor className='text-red-500'>Logout</Anchor>

        </div>
    </div>
}