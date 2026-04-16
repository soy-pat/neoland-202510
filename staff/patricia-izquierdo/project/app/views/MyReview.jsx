export function MyReview({ review }) {
    return <div className="p-5">
        <LogoName imageClassName='w-25' textClassName='text-xs'></LogoName>

        <div className="flex flex-col gap-2 m-2 justify-center items-center">
            <h1>{`"${review.title}"`}</h1>

            <img src={review.image} className="w-30 h-42 object-cover" />

            <p className="text-xs">{'⭐'.repeat(review.stars)}</p>
        </div>

        <div>
            <h2>{`${review.subject}`}</h2>

            <p>{`${review.body}`}</p>
        </div>
    </div>
}