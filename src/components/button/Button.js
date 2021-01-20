import classnames from '../../utils/helpers/classnames'
import './button.scss'

export const Button = ({ children, classname }) => (
    <button className={classnames('btn', classname)}>{children}</button>
)