import { useRef, useEffect } from "react"
import SignUp from "../components/SignUp";



const SignUpPage = () => {

  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.scrollIntoView({
      block: "start",
      behavior: "instant"
    })
  }, [])

  return (
    <div ref={divRef} className="w-full h-[90vh] grid place-items-center" >
        <SignUp />
    </div>
  )
}

export default SignUpPage
