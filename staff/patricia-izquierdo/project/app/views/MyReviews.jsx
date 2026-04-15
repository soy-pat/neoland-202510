import { LogoName } from "./components/commons/LogoName"
import { CircularBotton } from "./components/commons/CircularButton"
import { NavegationBar } from "./components/commons/NavegationBar"

export function MyReviews({ onGoToAddReview }) {
    const handleAddReviewClick = event => {
        event.preventDefault()

        onGoToAddReview()
    }

    return <div>
        <div className="p-5">
            <LogoName imageClassName='w-25' textClassName='text-xs'></LogoName>

            <CircularBotton className='absolute top-7 right-7' onClick={handleAddReviewClick}>+</CircularBotton>
        </div>
        <NavegationBar></NavegationBar>
    </div>
}