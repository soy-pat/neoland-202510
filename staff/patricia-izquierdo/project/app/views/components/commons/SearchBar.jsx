export function SearchBar({ alias, type, className }) {
    return <input id={alias} name={alias} type={type} className={`bg-olive-200 w-55 ${className}`} />
}