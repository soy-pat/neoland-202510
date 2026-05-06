export function Input({ alias, type, className = '', defaultValue }) {
    return <input id={alias} name={alias} type={type} className={`bg-olive-200 mt-1 au ${className}`} defaultValue={defaultValue} />
}