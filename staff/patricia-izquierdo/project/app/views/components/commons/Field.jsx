import { Label } from './Label'
import { Input } from './Input'

export function Field({ alias, type, children, defaultValue }) {
    return <div className='flex flex-col rounded-lg'>
        <Label alias={alias}>{children}</Label>
        <Input alias={alias} type={type} defaultValue={defaultValue} />
    </div>
}