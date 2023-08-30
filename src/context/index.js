"use client";
import { createContext, useReducer } from "react";

const initialState = {
  user: {
    locationData: {},
    currentWeather: {},
    locationSet: "Lagos, Nigeria",
    forcast: [],
    noOfForcast: 10,
  },
};

const rootReducer = (state, action) => {
  switch (action.type) {
    case "WEATHER":
      return {
        ...state,
        user: {
          ...state.user,
          locationData: action.payload.locationData,
          currentWeather: action.payload.currentWeather,
          forcast: action.payload.forcast,
        },
      };
    case "LOCATIONUDPATE": {
      console.log(action.payload);
      return {
        ...state,
        user: { ...state.user, locationSet: action.payload.location },
      };
    }
    default:
      return state;
  }
};

const Context = createContext();

function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}

export { Context, ContextProvider };
