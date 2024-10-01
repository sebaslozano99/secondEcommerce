import { useEffect, useState } from "react";
import { UseAuthContext } from "../../contexts/FakeAuthContext";
import { Link, useNavigate } from "react-router-dom";


const Form = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { login, isAuthenticated, dispatch } = UseAuthContext();
  const navigate = useNavigate();


  async function onLogIn(e){
    e.preventDefault();
    setIsLoading(true);
    try{
      await login(email, password);
      dispatch({type: "login"});
      navigate("/products");
      setIsLoading(false);
      setEmail("");
      setPassword("");
      // console.log("logged in");
    }
    catch(error){
      // console.log(error.message);
      setError(error.message);
    }
    finally{
      setIsLoading(false);
      setEmail("");
      setPassword("");
    }
  }

  useEffect(() => {
    if(error){
      setTimeout(() => {
        setError("");
      }, 5000)
    }
  }, [error])

  useEffect(() => {
    if(isAuthenticated) navigate("/products", {replace: true});
  }, [isAuthenticated, navigate])

  return (
    <form className="shadow-[0_0_3px_rgba(0,0,0,0.7)] rounded-[25px] p-[2em] w-[40%] h-auto" onSubmit={(e) => onLogIn(e)} >
      <h2 className="font-bold text-2xl text-center">Log in to your account</h2>
      {error === "Firebase: Error (auth/invalid-credential)." && <p className="text-red-500 text-sm italic text-center">Invalid credentials Try again.</p>}
        <div className="w-full flex flex-col justify-between gap-[15px] p-[15px]">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="aa@gmail.com" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border-[1px] border-stone-950/50 p-1" />
        </div>

        <div className="w-full flex flex-col justify-between gap-[15px] p-[15px]">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="**********" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border-[1px] border-stone-950/50 p-1" />
        </div>
        
        <button className="bg-[#252525] text-white cursor-pointer outline-none p-3 w-full mt-6">{isLoading ? "..." : "Sign in"}</button>
        <p className="text-center mt-2">Do not have an account yet? <Link to="/signup" className="underline text-blue-500 cursor-pointer">Sign Up</Link></p>

    </form>
  )
}

export default Form