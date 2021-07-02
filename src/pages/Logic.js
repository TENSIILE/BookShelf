import {useReducer, useEffect, useContext, useCallback} from 'react';
import {useHistory} from 'react-router-dom';
import {LogicBookShelf} from '@/contexts/logicBookShelf';
import {AlertContext} from '@/contexts/alert/AlertContext';
import {InputReducer, BookReducer} from '@/reducers';
import {
  CHANGE_INPUT,
  CLEAR_INPUT,
  ADDED_BOOK,
  REMOVE_BOOK,
  EDIT_BOOK,
} from '@/types/bookShelf.types';

export const LogicBook = ({children}) => {
  // Состояния
  const [inputState, inputDispatch] = useReducer(InputReducer, {
    title: '',
    fullnameAuthor: '',
    yearRelease: '0',
    imageUrl: '',
  });

  const [listBooks, listBooksDispatch] = useReducer(BookReducer, []);

  const alert = useContext(AlertContext);

  const history = useHistory();

  // Методы управления состояниями текстовых полей

  const onChangeInput = (e = null, name = '', value = '') => {
    inputDispatch({
      type: CHANGE_INPUT,
      payload: (e && e.target) || {name, value},
    });
  };

  const onClearInputAll = () => {
    inputDispatch({
      type: CLEAR_INPUT,
    });
  };

  const onCancelAction = useCallback(() => {
    onClearInputAll();
    history.push('/');
  }, [history]);

  // Методы работы со списком книг

  const onAddNewBook = useCallback(() => {
    if (!inputState.title || !inputState.fullnameAuthor) {
      return alert.show('Вы забыли ввести некоторые данные!', 'danger');
    }

    const uid = ~~Math.random() + Date.now();

    listBooksDispatch({
      type: ADDED_BOOK,
      payload: {...inputState, id: uid},
    });

    onCancelAction();

    alert.show('Книга была успешно добавлена!', 'success');
  }, [alert, inputState, onCancelAction]);

  const onRemoveBook = useCallback(
    id => {
      listBooksDispatch({
        type: REMOVE_BOOK,
        payload: id,
      });

      alert.show('Книга была успешна удалена!', 'primary');
    },
    [alert]
  );

  const onEditBook = book => {
    history.push('/edit');

    for (let state in book) {
      onChangeInput(null, state, book[state]);
    }
  };

  const onEditDoneBook = () => {
    listBooksDispatch({
      type: EDIT_BOOK,
      payload: inputState,
    });
    history.push('/');
  };

  // LifeCycle Hooks

  useEffect(() => {
    if (+inputState.yearRelease >= 2017) {
      onChangeInput(null, 'yearRelease', '2017');
    } else if (+inputState.yearRelease <= 0) {
      onChangeInput(null, 'yearRelease', '0');
    }
  }, [inputState.yearRelease]);

  useEffect(() => {
    const wrap = async () => {
      const {status} = await fetch(inputState.imageUrl);

      if (status === 404) {
        alert.show('Данное изображение не найдено!', 'danger');
      }
    };
    wrap();
  }, [inputState.imageUrl, alert]);

  return (
    <LogicBookShelf.Provider
      value={{
        inputState,
        onChangeInput,
        onCancelAction,
        onAddNewBook,
        listBooks,
        onRemoveBook,
        onEditBook,
        onEditDoneBook,
      }}
    >
      {children}
    </LogicBookShelf.Provider>
  );
};
