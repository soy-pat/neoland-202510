export function FoundReviewItem({ review }) {

    return <li>
        <div>
            <img src={review.image} className="w-14 h-24 object-cover" />

            <p className="text-xs">{'⭐'.repeat(review.stars)}</p>

            <div>
                <img src="../../../assets/profileuser.png" className="rounded-full w-5 h-5"></img>

                <p>{user.username}</p>
            </div>
        </div>
    </li>
}