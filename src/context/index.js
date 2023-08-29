import { createContext, useReducer } from "react";

const initialState = {
  user: "",
};

const rootReducer = (state, action) => {
  return state;
};

const Context = createContext("");

export default function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}
