import classnames from '../../utils/helpers/classnames'
import './input.scss'

export const Input = ({ 
    type = 'text',
    state,
    setState, 
    placeholder, 
    className,
    readOnly,
    number = {min: 0, max: null}
}) => (
    <input 
        type={type} 
        defaultValue={state} 
        onChange={setState} 
        placeholder={placeholder} 
        className={classnames('input', className)}
        readOnly={readOnly}
        min={number.min}
        max={number.max}
        step={1}
    />
)