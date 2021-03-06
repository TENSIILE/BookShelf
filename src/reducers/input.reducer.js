import {CHANGE_INPUT, CLEAR_INPUT} from '@/types/book-shelf.types';

export const InputReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return {...state, [action.payload.name]: action.payload.value};
    case CLEAR_INPUT:
      const newState = {};

      for (let s in state) newState[s] = '';

      return newState;
    default:
      return state;
  }
};
