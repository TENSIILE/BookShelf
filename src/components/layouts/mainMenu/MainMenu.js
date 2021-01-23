import { Link } from 'react-router-dom'
import { ReactSVG } from 'react-svg'

import { book } from '../../../static/icons'
import './mainMenu.scss'

export const MainMenu = () => (
    <nav className='main-menu'>
        <Link 
            to='/'
            className='main-menu__link'
         >
            <ReactSVG 
                src={book} 
                className='main-menu__icon'
            />
            <h1 className='main-menu__title'>Книжная полка</h1>
        </Link>
    </nav>
)