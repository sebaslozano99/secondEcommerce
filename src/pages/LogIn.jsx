// import { useEffect } from "react";
import Form from "../components/form/Form";
// import { UseAuthContext } from "../contexts/FakeAuthContext";
import styles from "./LogIn.module.css";

const LogIn = () => {

  // const { isAuthenticated } = UseAuthContext();


  // useEffect(() => {
  //   if(isAuthenticated) alert("Logged in successfully!");
  // }, [isAuthenticated])

  return (
    <div className={styles.logIn} >
        <Form />
    </div>
  )
}

export default LogIn