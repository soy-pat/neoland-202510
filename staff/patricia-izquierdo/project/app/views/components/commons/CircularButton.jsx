export function CircularBotton({ children, className, type, onClick }) {
    return <button className={`rounded-full bg-gray-500 text-white text-3xl font-bold w-10 h-10 flex items-center justify-center leading-none ${className}`} type={type} onClick={onClick}>{children}</button>
}