import {createContext} from 'react';

export const LogicBookShelf = createContext({
  inputState: {},
  onChangeInput: e => {},
  onCancelAction: () => {},
  listBooks: [],
  onAddNewBook: () => {},
  onRemoveBook: id => {},
  onEditBook: book => {},
  onEditDoneBook: () => {},
});
