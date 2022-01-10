import { createContext, useContext } from "react";

export const globalState = {
  filters: null
};

export const GlobalContext = createContext();

export const useGlobalValue = () => useContext(GlobalContext);
