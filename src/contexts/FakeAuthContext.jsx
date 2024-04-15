import { createContext, useContext, useEffect, useReducer } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import PropTypes from "prop-types";
// import img from "../../public/IMAGES/user-pic.jpg";

const FakeAuth = createContext();


const initialValues = {
    isAuthenticated: false,
    firebaseUser: {},
}

function reducer(state, action){
    switch(action.type){
        case "isAuth": 
            return {
                ...state,
                isAuthenticated: true,
            }
        case "getUser":
            return {
                ...state,
                firebaseUser: action.payload,
            }
        case "login":
            return {
                ...state,
                // user: action.payload, 
                isAuthenticated: true,
            }
        case "logout":
            return {
                ...state,
                isAuthenticated: false,
                firebaseUser: {},
            }
        default: throw new Error("Unknown action type");
    }
}



const FakeAuthContext = ({children}) => {

  const [{firebaseUser, isAuthenticated}, dispatch] = useReducer(reducer, initialValues);

    function createUser(email, password){
        dispatch({type: "isAuth"});
        return createUserWithEmailAndPassword(auth, email, password);
    }
  
    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logout(){
        dispatch({type: "logout"});
        return signOut(auth);
    }



  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        if(isAuthenticated) dispatch({type: "getUser", payload: currentUser});
    });

    return () => {
        unsubscribe();
    }
  }, [isAuthenticated])

  return (
    <FakeAuth.Provider value={{
        firebaseUser,
        isAuthenticated,
        login,
        logout,
        createUser,
        dispatch
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