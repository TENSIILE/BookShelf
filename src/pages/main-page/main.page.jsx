import {Button} from '@/components';
import {ListBooks} from '@/components/layouts';
import './main-page.scss';

export const MainPage = () => {
  return (
    <div className="main_page">
      <h1>Список всех книг</h1>
      <hr />
      <Button.Link className="main_page__btn_added btn--primary" to="/add">
        Добавить книгу
      </Button.Link>
      <ListBooks />
    </div>
  );
};
