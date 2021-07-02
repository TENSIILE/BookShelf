import {useReducer, useCallback} from 'react';
import {AlertContext} from './alert.context';
import {AlertReducer} from '../../reducers/alert.reducer';
import {SHOW_ALERT, HIDE_ALERT} from '../../types/alert.types';

export const AlertState = ({children}) => {
  const [state, dispatch] = useReducer(AlertReducer, {
    turnOn: false,
    title: '',
    type: '',
  });

  const hide = useCallback(() => {
    dispatch({
      type: HIDE_ALERT,
    });
  }, []);

  const show = useCallback((title, type = 'primary') => {
    dispatch({
      type: SHOW_ALERT,
      payload: {
        title,
        type,
      },
    });
  }, []);

  return (
    <AlertContext.Provider
      value={{
        state,
        show,
        hide,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};
