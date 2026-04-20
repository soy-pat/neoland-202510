import { useNavigate } from "react-router"

export function NavegationBar({ className }) {

    const navigate = useNavigate()

    const NavigateTo = path => {

        navigate(path)
    }

    const handleGoToMyReviews = () => NavigateTo('/myReviews')

    const handleGoToSearchBook = () => NavigateTo('/searchABook')

    const handleGoToMyProfile = () => NavigateTo('/')

    return <nav className={`bg-gray-500 absolute inset-x-0 bottom-0 flex justify-around ${className}`}>
        <button className="w-10 h-10 m-2" onClick={handleGoToMyReviews}>
            <img src="../../../assets/book.png"></img>
        </button>
        <button className="w-10 h-10 m-2" onClick={handleGoToSearchBook}>
            <img src="../../../assets/lens.png"></img>
        </button>
        <button className="w-10 h-10 m-2" onClick={handleGoToMyProfile}>
            <img src="../../../assets/user.png"></img>
        </button>
    </nav >
}
