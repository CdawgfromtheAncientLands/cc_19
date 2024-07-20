import React, {createContext, useReducer, useContext} from 'react';

//Setting initial state.
const initialState = {};

//Create context.
const generalContext = createContext(initialState);

//State reducer.
const reducer = (state, action) => {
  switch (action.type) {
    //No content here yet
    default:
      return state;
  }
};

// Context provider component
const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <generalContext.Provider value={{ state, dispatch }}>
      {children}
    </generalContext.Provider>
  );
};

//Defines context updater
const updateContext = () => useContext(generalContext);

// Exporting StateProvider and useUpdateContext.
export {StateProvider, updateContext};