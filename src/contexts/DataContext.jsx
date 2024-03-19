import { createContext,useContext, useReducer, useEffect } from "react";
import PropTypes from "prop-types";

//smartphones, laptops, fragrances, skincare, groceries, home-decoration, furniture, tops, women-dresses, women-shoes, mens-shirts, mens-shoes, mens-watches, women-watches, 

const ProductsContext = createContext();
const BASE_URL = "https://dummyjson.com/products";

const initialValues = {
    dataFromApi: [],
    cart: [],
    cartOpen: false,
    wishList: [],
    isLoading: false,
    category: "smartphones",

}


function reducer(state, action){
    switch(action.type){
        case "loadingData":
            return {
                ...state,
                isLoading: true,
            }
        case "data/arrived":
            return {
                ...state,
                isLoading: false,
                dataFromApi: action.payload,
            }
        case "change/category":
            return {
                ...state,
                category: action.payload,
            }
        case "open-close/cart":
            return {
                ...state,
                cartOpen: !state.cartOpen,
            }
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


const DataContext = ({children}) => {
  
  const [{dataFromApi, isLoading, cart, wishList, cartOpen, category}, dispatch ] = useReducer(reducer, initialValues);

  useEffect(() => {
    async function fetchData(){
        dispatch({type: "loadingData"});
        try{
            const res = await fetch(`${BASE_URL}/category/${category}`);
            const data = await res.json();
            dispatch({type: "data/arrived", payload: data.products});
            // console.log(category);
        }
        catch(error){
            throw new Error(error);
        }
    }

    fetchData();
  }, [category])


  return (
    <ProductsContext.Provider value={{
        dataFromApi,
        isLoading,
        cart,
        wishList,
        cartOpen,
        category,
        dispatch,
    }}>
        {children}
    </ProductsContext.Provider>
  )
}


function UseProductContext(){
    const context = useContext(ProductsContext);
    if(context === undefined) throw new Error("UseProductContext is being used outside scope of DataContext");
    return context;
}

export { DataContext, UseProductContext }

DataContext.propTypes = {
    children: PropTypes.node,
}