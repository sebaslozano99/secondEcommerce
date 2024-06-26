// import { useEffect } from "react";
import { useEffect, useRef } from "react";
import Form from "../../components/form/Form";
// import { UseAuthContext } from "../contexts/FakeAuthContext";

const LogIn = () => {

  // const { isAuthenticated } = UseAuthContext();


  // useEffect(() => {
  //   if(isAuthenticated) alert("Logged in successfully!");
  // }, [isAuthenticated])

  const divRef = useRef(null);
  useEffect(() => {
    divRef.current.scrollIntoView({
      behavior: "instant"
    })
  }, [])

  return (
    <div ref={divRef} className="w-full h-[90vh] grid place-items-center" >
        <Form />
    </div>
  )
}

export default LogIn