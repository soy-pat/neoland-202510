export function SearchButton({ className, onClick }) {
    return <button className={`w-5 h-5 m-2 ${className}`} onClick={onClick} >
        <img src="../../../assets/lens.png"></img>
    </button >
}