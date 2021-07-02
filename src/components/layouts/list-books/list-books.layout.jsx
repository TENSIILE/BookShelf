import {useContext} from 'react';
import {ReactSVG} from 'react-svg';
import {LogicBookShelf} from '@/contexts/logic-book-shelf.context';
import {Button, Badge} from '@/components';
import {empty_box} from '@/static/icons';
import './list-books.scss';

export const ListBooks = () => {
  const logic = useContext(LogicBookShelf);

  return (
    <div className="list-books">
      {logic.listBooks.length ? (
        logic.listBooks.map(book => (
          <div className="list-books__item" key={book.id + Math.random()}>
            {book.imageUrl && <img className="list-books__img" src={book.imageUrl} alt="" />}

            <div className="list-books__texts">
              <h2 className="list-books__title">{book.title}</h2>
              <p className="list-books__author">{book.fullnameAuthor}</p>
              <Badge className="list-books__date badge--danger">{book.yearRelease}</Badge>
            </div>
            <div className="list-books__control">
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
        <div className="list-books__empty-data">
          <ReactSVG src={empty_box} className="list-books__icon-empty" />
          <span className="list-books__text-empty">Книг пока что нет!</span>
        </div>
      )}
    </div>
  );
};
