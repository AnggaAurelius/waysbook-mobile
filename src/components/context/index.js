import React, {createContext, useReducer} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const AppContext = createContext();

const initialState = {
  isLogin: false,
  user: null,
  loading: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_SUKSES':
      AsyncStorage.setItem('token', action.payload.token);

      return {
        ...state,
        isLogin: true,
        user: {
          email: action.payload.email,
          fullName: action.payload.fullName,
          role: action.payload.role,
          avatar: action.payload.avatar,
        },
        loading: false,
      };
    case 'USER_LOADED':
      return {
        ...state,
        isLogin: true,
        user: {
          email: action.payload.email,
          fullName: action.payload.fullName,
          role: action.payload.role,
          avatar: action.payload.avatar,
        },
        loading: false,
      };
    case 'AUTH_ERROR':
    case 'LOGOUT':
      // AsyncStorage.removeItem('token');
      return {
        ...state,
        isLogin: false,
        user: {
          id: '',
          email: '',
          fullName: '',
          role: '',
        },
      };
    default:
      throw new Error();
  }
};

export const AppContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  );
};
