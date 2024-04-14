import { useEffect, useState } from "react";
import { UseAuthContext } from "../../contexts/FakeAuthContext";
import { useNavigate } from "react-router-dom";


const Form = () => {

  const [email, setEmail] = useState("rickG@yahoo.com");
  const [password, setPassword] = useState("twd2010_");
  const { login, isAuthenticated } = UseAuthContext();
  const navigate = useNavigate();

  function onLogIn(e){
    e.preventDefault();
    if(email && password) login(email, password);
  }



  useEffect(() => {
    if(isAuthenticated) navigate("/products", {replace: true});
  }, [isAuthenticated, navigate])

  return (
    <form className="shadow-[0_0_3px_rgba(0,0,0,0.7)] rounded-[25px] p-[1em]" onSubmit={(e) => onLogIn(e)} >
        <div className="w-full flex justify-between gap-[15px] p-[15px]">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="aa@gmail.com" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border-[1px] border-stone-950/50 p-1" />
        </div>

        <div className="w-full flex justify-between gap-[15px] p-[15px]">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="**********" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border-[1px] border-stone-950/50 p-1" />
        </div>

          <button className="bg-[#252525] text-white cursor-pointer outline-none p-3 w-full mt-2">Log In</button>
    </form>
  )
}

export default Form