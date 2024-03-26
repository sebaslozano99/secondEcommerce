import { createContext, useContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";

const Cart = createContext();

const initialValue = {
    cart: JSON.parse(localStorage.getItem("cart")) ?? [],
}

function reducer(state, action){
    switch(action.type){
        case "add-item/cart":
            return {
                ...state,
                cart: [...state.cart, action.payload],
            }
        case "delete-item/cart":
            return {
                ...state,
                cart: [...state.cart.filter(element => element.id !== action.payload)]
            }
        case "change-quantity/item":
            return {
                ...state,
                cart: [...state.cart.map(element => element.id === action.payload.id ? {...element, quantity: action.payload.newQuantity} : element)]
            }
        default: throw new Error("Unknown action type!");
    }
}

const CartContext = ({children}) => {

  const [{cart}, dispatchCart] = useReducer(reducer, initialValue);

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  return (
    <Cart.Provider value={{
        cart,
        dispatchCart
    }} >
        {children}
    </Cart.Provider>
  )
}


function UseCartContext(){
    const context = useContext(Cart);
    if(context === undefined) throw new Error("context is being used outside CartContext Provider");
    return context;
}

export {CartContext, UseCartContext};





CartContext.propTypes = {
    children: PropTypes.node,
}