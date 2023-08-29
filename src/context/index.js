"use client";
import { createContext, useReducer } from "react";

const initialState = {
  user: "nosa",
};

const rootReducer = (state, action) => {
  return state;
};

const Context = createContext();

function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}

export { Context, ContextProvider };
