export function InputBody({ alias, className }) {
    return <textarea id={alias} name={alias} rows={4} placeholder='Write your opinion...' className={`bg-olive-200 mt-1 au ${className}`}
    />
}