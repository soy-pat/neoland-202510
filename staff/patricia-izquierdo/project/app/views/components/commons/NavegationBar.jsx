import lens from '../../../assets/lens.png'
import book from '../../../assets/book.png'
import user from '../../../assets/user.png'

import { useNavigate } from "react-router"

export function NavegationBar({ className }) {

    const navigate = useNavigate()

    const NavigateTo = path => {

        navigate(path)
    }

    const handleGoToMyReviews = () => NavigateTo('/myReviews')

    const handleGoToSearchBook = () => NavigateTo('/reviews/searchABook')

    const handleGoToMyProfile = () => NavigateTo('/users/me')

    return <nav className={`bg-gray-500 absolute inset-x-0 bottom-0 flex justify-around ${className}`}>
        <button className="w-10 h-10 m-2" onClick={handleGoToMyReviews}>
            <img src={book}></img>
        </button>
        <button className="w-10 h-10 m-2" onClick={handleGoToSearchBook}>
            <img src={lens}></img>
        </button>
        <button className="w-10 h-10 m-2" onClick={handleGoToMyProfile}>
            <img src={user}></img>
        </button>
    </nav >
}
