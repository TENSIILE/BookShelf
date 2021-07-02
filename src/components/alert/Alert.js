import { useContext } from 'react'
import { ReactSVG } from 'react-svg'
import { AlertContext } from '@/contexts/alert/AlertContext'
import classnames from '@/utils/helpers/classnames'
import { close } from '@/static/icons'
import './alert.scss'

export const Alert = () => {
  const logicAlert = useContext(AlertContext)

  if (!logicAlert.state.turnOn) return null

  return (
    <div
      className={classnames('alert', {
        [`alert--${logicAlert.state.type}`]: !!logicAlert.state.type,
      })}
    >
      <div className='alert__header'>
        <p className='alert__title'>{logicAlert.state.title}</p>
        <ReactSVG
          src={close}
          className='alert__icon'
          onClick={logicAlert.hide}
        />
      </div>
    </div>
  )
}
