import { createContext,useContext, useReducer, useEffect } from "react";
import PropTypes from "prop-types";
// import { useSearchParams } from "react-router-dom";

//smartphones, laptops, fragrances, skincare, groceries, home-decoration, furniture, tops, women-dresses, women-shoes, mens-shirts, mens-shoes, mens-watches, women-watches, 

const ProductsContext = createContext();
const BASE_URL = "https://dummyjson.com/products";

const initialValues = {
    dataFromApi: [],
    wishList: [],
    isLoading: false,
    category: JSON.parse(localStorage.getItem("category")) ?? "smartphones",
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
        case "wishlist/add":
            return {
                ...state,
                wishList: state.wishList.some(element => element.id === action.payload.id) ? [...state.wishList] : [...state.wishList, action.payload.newWish]
            }
        case "wishlist/deleteItem":
            return {
                ...state,
                wishList: [...state.wishList.filter(element => element.id !== action.payload)]
            }
        default: throw new Error("Unknown action type!");
    }
}


const DataContext = ({children}) => {
  
  const [{dataFromApi, isLoading, wishList, category}, dispatch ] = useReducer(reducer, initialValues);

  useEffect(() => {
    async function fetchData(){
        dispatch({type: "loadingData"});
        try{
            const res = await fetch(`${BASE_URL}/category/${category}`);
            const data = await res.json();
            dispatch({type: "data/arrived", payload: data.products});
        }
        catch(error){
            throw new Error(error);
        }
    }
    fetchData();
  }, [category])


  useEffect(() => {
    window.localStorage.setItem("category", JSON.stringify(category));
    // window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [category])


  return (
    <ProductsContext.Provider value={{
        dataFromApi,
        isLoading,
        wishList,
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

