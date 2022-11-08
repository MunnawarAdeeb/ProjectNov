import { createContext, useReducer } from "react";
export const userContext=createContext();
const StateProvider=({ reducer, initialState, children })=>{
    return(<><userContext.Provider value={useReducer(reducer, initialState)}>
        {children}
        </userContext.Provider></>)
}
export default StateProvider;
export const useStateValue = () => useContext(StateContext);