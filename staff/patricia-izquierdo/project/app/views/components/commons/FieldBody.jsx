import { Label } from './Label'
import { InputBody } from './InputBody'

export function FieldBody({ alias, children, defaultValue }) {
    return <div className='flex flex-col rounded-lg'>
        <Label alias={alias}>{children}</Label>
        <InputBody alias={alias} defaultValue={defaultValue} />
    </div>
}