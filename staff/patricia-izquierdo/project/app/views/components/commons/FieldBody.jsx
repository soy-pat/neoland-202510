import { Label } from './Label'
import { InputBody } from './InputBody'

export function FieldBody({ alias, children }) {
    return <div className='flex flex-col rounded-lg'>
        <Label alias={alias}>{children}</Label>
        <InputBody alias={alias} />
    </div>
}