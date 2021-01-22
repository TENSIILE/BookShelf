import { Link } from 'react-router-dom'
import classnames from '../../utils/helpers/classnames'
import './button.scss'

export const Button = ({ children, className }) => (
    <button className={classnames('btn', className)}>{children}</button>
)

Button.Link = ({ className, children, to }) => (
    <Link 
        to={to} 
        className={classnames('btn', className)}
    >
        {children}
    </Link>
)