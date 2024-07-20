import React, {createContext, useReducer, useContext} from "react";

//Initial state with removedTours as an empty array
const initialState = {
  removedTours: [],
};

//Create context
const GeneralContext = createContext(initialState);

//State reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "REMOVE_TOUR":
      return {
        ...state,
        removedTours: [...state.removedTours, action.payload],
      };
    case "RESET_TOURS":
      return {
        ...state,
        removedTours: [],
      };
    default:
      return state;
  }
};

//Context provider component
const StateProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GeneralContext.Provider value={{ state, dispatch }}>
      {children}
    </GeneralContext.Provider>
  );
};

//Hook for accessing state and dispatch
const useGlobalContext = () => useContext(GeneralContext);

export {StateProvider, useGlobalContext};