import {ADDED_BOOK, EDIT_BOOK, REMOVE_BOOK} from '../types/bookShelf.types';

export const BookReducer = (state, action) => {
  switch (action.type) {
    case ADDED_BOOK:
      return [{...action.payload}, ...state];
    case EDIT_BOOK:
      const filtered = state.filter(book => book.id !== action.payload.id);
      return [{...action.payload}, ...filtered];
    case REMOVE_BOOK:
      return state.filter(book => book.id !== action.payload);
    default:
      return state;
  }
};
