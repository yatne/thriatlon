import React, {useContext} from 'react'

export const ReducerContext = React.createContext();
export const useReducer = () => {
  return useContext(ReducerContext)
};

export const ReducerProvider = (props) => {
  const test = () => {
    console.log('test');
  }
  const test2 = () => {
    console.log('test2');
  }

  return (
    <ReducerContext.Provider value={{test, test2}}>
      {props.children}
    </ReducerContext.Provider>)
}