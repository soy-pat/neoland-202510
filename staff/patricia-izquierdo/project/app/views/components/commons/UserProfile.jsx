export function UserProfile({ user, onGoToUserReviews }) {
    if (!user) return null

    const handleGoToUserReviews = userId => onGoToUserReviews(userId)

    return <div className='flex flex-row items-center' onClick={() => handleGoToUserReviews(user.id)}>
        <img src="../../assets/profileuser.jpg" className="rounded-full w-5 h-5 m-1"></img>

        <p className='text-white text-xs'>{user.username}</p>
    </div>
}