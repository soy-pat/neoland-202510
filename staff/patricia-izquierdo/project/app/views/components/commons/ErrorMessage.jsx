export function ErrorMessage({ children, className }) {
    return <p className={`text-red-500 text-lg flex justify-center m-1 ${className}`}>{children}</p>
}