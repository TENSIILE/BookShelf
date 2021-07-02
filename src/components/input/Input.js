import classnames from '@/utils/helpers/classnames'
import './input.scss'

export const Input = ({
  type = 'text',
  state,
  setState,
  placeholder,
  className,
  readOnly,
  number = { min: 0, max: null },
  name,
}) => (
  <input
    type={type}
    value={state}
    onChange={setState}
    placeholder={placeholder}
    className={classnames('input', className)}
    readOnly={readOnly}
    min={number.min}
    max={number.max}
    step={1}
    name={name}
  />
)
