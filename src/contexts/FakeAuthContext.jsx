import { createContext, useContext } from "react";
import PropTypes from "prop-types";
import { useReducer } from "react";
import img from "../../public/IMAGES/user-pic.jpg";

const FakeAuth = createContext();


const initialValues = {
    user: null,
    isAuthenticated: false,
}

function reducer(state, action){
    switch(action.type){
        case "login":
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
            }
        case "logout":
            return {
                ...state,
                user: null,
                isAuthenticated: false,
            }
        default: throw new Error("Unknown action type");
    }
}

const FAKE_USER = {
    name: "Rick Grimes",
    email: "rickG@yahoo.com",
    password: "twd2010_",
    image: img,
}

const FakeAuthContext = ({children}) => {

  const [{user, isAuthenticated}, dispatch] = useReducer(reducer, initialValues);
  
  function login(email, password) {
    if(email === FAKE_USER.email && password === FAKE_USER.password){
        dispatch({type: "login", payload: FAKE_USER});
    }
  }

  function logout(){
    dispatch({type: "logout"});
  }

  return (
    <FakeAuth.Provider value={{
        user,
        isAuthenticated,
        login,
        logout
    }}>
        {children}
    </FakeAuth.Provider>
  )
}


function UseAuthContext(){
    const context = useContext(FakeAuth);
    if(context === undefined) throw new Error("UseAuthContext is being used outside FakeAuth Provider");
    return context;
}

export {FakeAuthContext, UseAuthContext};

FakeAuthContext.propTypes = {
    children: PropTypes.node,
}