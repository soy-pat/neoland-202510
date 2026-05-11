export function UserReviewItem({ review, onGoToUserReview }) {

    const handleGoToUserReview = reviewId => onGoToUserReview(reviewId)

    return <li onClick={() => handleGoToUserReview(review.id)}>
        <div className="flex flex-col gap-2 m-2 justify-center items-center">
            <img src={review.image} className="w-14 h-24 object-cover" />

            <p className="text-xs">{'⭐'.repeat(review.stars)}</p>
        </div>
    </li>
}