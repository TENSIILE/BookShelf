import { ReactSVG } from 'react-svg'
import classnames from '../../utils/helpers/classnames'

import { close } from '../../static/icons'
import './modal.scss'

export const Modal = ({ title = 'Modal Header', size, children }) => {
    return (
        <div className="modal">
            <div className={classnames("modal__window", size)}>
                <div className="modal__header">
                    <h2 className="modal__title">{title}</h2>
                    <ReactSVG src={close} className='modal__icon'/>
                </div>
                <div className="modal__body">
                    {children}
                </div>
            </div>
        </div>
    )
}