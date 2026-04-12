export function Label({ alias, children }) {
    return <label htmlFor={alias} className="text-white font-medium">{children}</label>
}