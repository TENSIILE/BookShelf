import {Link} from 'react-router-dom';
import {ReactSVG} from 'react-svg';
import {book} from '@/static/icons';
import './main-menu.scss';

export const MainMenu = () => (
  <nav className="main_menu">
    <Link to="/" className="main_menu__link">
      <ReactSVG src={book} className="main_menu__icon" />
      <h1 className="main_menu__title">Книжная полка</h1>
    </Link>
  </nav>
);
