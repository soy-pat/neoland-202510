import { UserReviewList } from './components/UserReviewList'
import { NavegationBar } from './components/commons/NavegationBar'
import { LogoName } from './components/commons/LogoName'

export function UserReviews() {

    return <div>
        <div className="p-5">
            <LogoName imageClassName='w-25' textClassName='text-xs'></LogoName>

            <UserReviewList />
        </div>
        <NavegationBar></NavegationBar>
    </div>
}