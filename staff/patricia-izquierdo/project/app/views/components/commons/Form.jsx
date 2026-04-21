export function Form({ children, onSubmit, className }) {
    return <form className={`flex flex-col ${className}`} onSubmit={onSubmit} >
        {children}
    </form >
}