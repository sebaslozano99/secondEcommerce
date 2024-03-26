import styles from "./HeaderUser.module.css";
import { UseAuthContext } from "../../contexts/FakeAuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";


const HeaderUser = () => {

  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, user, logout } = UseAuthContext();
  const navigate = useNavigate();

  function onLogOut(){
    if(isAuthenticated){
        logout();
        navigate("/");
    }
  }

  return (
    <div className={styles.container} onClick={() => setIsOpen(!isOpen)} >
        <img src={!isAuthenticated ? "../../../public/IMAGES/defaul.png" : user?.image} alt="../../../public/IMAGES/default.png" />

        <div className={isOpen ? styles.show : styles.hidden} >
          <button>
            <Link to="wishlist">
              WishList
            </Link>
          </button>
          <button onClick={onLogOut} >Log out</button>
        </div>
    </div>
  )
}

export default HeaderUser