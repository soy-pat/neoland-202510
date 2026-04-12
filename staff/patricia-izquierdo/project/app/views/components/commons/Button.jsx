export function Button({ children, className, type, onClick }) {
    return <button className={`bg-lime-500 text-white font-medium self-center p-2 m-3 rounded-xl text-lg ${className}`} type={type} onClick={onClick}>{children}</button>
}