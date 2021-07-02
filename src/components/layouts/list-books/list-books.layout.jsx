import {useContext} from 'react';
import {ReactSVG} from 'react-svg';
import {LogicBookShelf} from '@/contexts/logic/logic.context';
import {Button, Badge} from '@/components';
import {empty_box} from '@/static/icons';
import './list-books.scss';

export const ListBooks = () => {
  const logic = useContext(LogicBookShelf);

  return (
    <div className="list_books">
      {logic.listBooks.length ? (
        logic.listBooks.map(book => (
          <div className="list_books__item" key={book.id + Math.random()}>
            {book.imageUrl && <img className="list_books__img" src={book.imageUrl} alt="" />}

            <div className="list_books__texts">
              <h2 className="list_books__title">{book.title}</h2>
              <p className="list_books__author">{book.fullnameAuthor}</p>
              <Badge className="list_books__date badge--danger">{book.yearRelease}</Badge>
            </div>
            <div className="list_books__control">
              <Button className="btn--primary" onClick={() => logic.onEditBook(book)}>
                Редактировать
              </Button>
              <Button className="btn--danger" onClick={() => logic.onRemoveBook(book.id)}>
                Удалить
              </Button>
            </div>
          </div>
        ))
      ) : (
        <div className="list_books__empty_data">
          <ReactSVG src={empty_box} className="list_books__icon_empty" />
          <span className="list_books__text_empty">Книг пока что нет!</span>
        </div>
      )}
    </div>
  );
};
