import { useState } from "react";
import { UseAuthContext } from "../contexts/FakeAuthContext";
import { useNavigate } from "react-router-dom";



const SignUp = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { createUser } = UseAuthContext();
  const navigate = useNavigate();

  async function signUpUser(){
    setIsLoading(true);
    try{
      await createUser(email, password);
      navigate("/products", { replace: true });
      setIsLoading(false);
    }
    catch(error){
      // console.log(error.message);
      setError(error.message);
    }
    finally{
      setIsLoading(false);
    }
  }

  function onHandleSignUp(e){
    e.preventDefault();
    if(email && password && password === confirm) signUpUser();
  }


  return (
    <form className="shadow-[0_0_3px_rgba(0,0,0,0.7)] rounded-[25px] p-[2em] w-[40%] h-auto" onSubmit={(e) => onHandleSignUp(e)} >
      <h2 className="font-bold text-2xl text-center">Create your account</h2>
      
        <div className="w-full flex flex-col justify-between gap-[15px] p-[15px]">
            <label htmlFor="email">Email Address</label>
            <input type="email" placeholder="aa@gmail.com" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border-[1px] border-stone-950/50 p-1" />
            {error === "Firebase: Error (auth/email-already-in-use)." && <p className="text-red-500" >Email already in use</p>}
        </div>

        <div className="w-full flex flex-col justify-between gap-[15px] p-[15px]">
            <label htmlFor="password">Create Password</label>
            <input type="password" placeholder="**********" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border-[1px] border-stone-950/50 p-1 outline-none" />
        </div>

        <div className="w-full flex flex-col justify-between gap-[15px] p-[15px]">
            <label htmlFor="confirm">Confirm Password</label>
            <input type="password" placeholder="**********" id="confirm" value={confirm} onChange={(e) => setConfirm(e.target.value)} className={!confirm ? "border-[1px] border-stone-600 p-1 outline-none" :  confirm === password ? "border-[1px] border-green-500 p-1 outline-none" : "border-[1px] border-red-600/50 p-1 outline-none"} />
        </div>
        
        <button disabled={isLoading} className="bg-[#252525] text-white cursor-pointer outline-none p-3 w-full mt-6">{isLoading ? "Creating..." : "Sign Up"}</button>
    </form>
  )
}

export default SignUp