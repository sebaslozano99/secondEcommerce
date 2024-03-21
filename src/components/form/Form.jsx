import { useEffect, useState } from "react";
import styles from "./Form.module.css";
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
    <form className={styles.form} onSubmit={(e) => onLogIn(e)} >
        <div>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="aa@gmail.com" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div>
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="**********" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

          <button>Log In</button>
    </form>
  )
}

export default Form