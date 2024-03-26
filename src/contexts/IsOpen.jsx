import { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";


const Open = createContext();

const initialValue = {
    cartOpen: false,
}

function reducer(state, action){
    switch(action.type){
        case "open-close/cart":
            return {
                ...state,
                cartOpen: !state.cartOpen,
            }
        default: throw new Error("Unknown action type")
    }
}


const IsOpen = ({children}) => {

  const [{cartOpen}, dispatchIsOpen] = useReducer(reducer, initialValue);



  return (
    <Open.Provider value={{
        cartOpen,
        dispatchIsOpen,
    }} >
        {children}
    </Open.Provider>
  )
}

function UseIsOpenContext(){
    const context = useContext(Open);
    if(context === undefined) throw new Error("UseCategoryContext is being used outside of Category Context wrapper!");
    return context;
}

export { IsOpen, UseIsOpenContext};


IsOpen.propTypes = {
    children: PropTypes.node
}