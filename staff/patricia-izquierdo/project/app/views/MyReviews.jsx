import { LogoName } from "./components/commons/LogoName"
import { CircularBotton } from "./components/commons/CircularButton"
import { NavegationBar } from "./components/commons/NavegationBar"
import { ReviewList } from "./components/ReviewList"
import { MyReview } from "./MyReview"

export function MyReviews({ onGoToAddReview, onGoToMyReview }) {
    const handleAddReviewClick = event => {
        event.preventDefault()

        onGoToAddReview()
    }

    const handleGoToMyReview = reviewId => onGoToMyReview(reviewId)

    return <div>
        <div className="p-5">
            <LogoName imageClassName='w-25' textClassName='text-xs'></LogoName>

            <CircularBotton className='absolute top-7 right-7' onClick={handleAddReviewClick}>+</CircularBotton>

            <ReviewList onGoToMyReview={handleGoToMyReview} />
        </div>
        <NavegationBar></NavegationBar>
    </div>
}