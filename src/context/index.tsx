import React, { createContext, useContext, useReducer, Dispatch } from "react";
import  { filterReducer, FilterActions } from './reducer'
import { StateType } from './types';

const globalState = {
  filters: {
    name: '',
    species: ''
  }
};

interface propsWithChildren {
  children: React.ReactNode
};

const AppProvider = ({ children }: propsWithChildren): JSX.Element => {
  const [state, dispatch] = useReducer(filterReducer, globalState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalValue = () => useContext(GlobalContext);

const GlobalContext = createContext<{
  state: StateType;
  dispatch: Dispatch<FilterActions>;
}>({
  state: globalState,
  dispatch: () => null
});

export { useGlobalValue, AppProvider, globalState, GlobalContext };
