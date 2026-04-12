export function Anchor({ children, className, onClick }) {
    return <a className={`cursor-pointer text-gray-500 ${className}`} href="" onClick={onClick}>{children}</a>
}