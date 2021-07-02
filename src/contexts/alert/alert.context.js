import {createContext} from 'react';

export const AlertContext = createContext({
  state: {},
  show: (title, type = 'primary') => {},
  hide: () => {},
});
