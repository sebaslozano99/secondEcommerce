import { UseProductContext } from "../../contexts/DataContext";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Button from "../button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Cart from "../cart/Cart";

const Header = () => {

  const { cart, dispatch } = UseProductContext();

  return (
    <header className={styles.header} >
      <h1>
        <Link to="/" className={styles.logo} >
          Batt
        </Link>
      </h1>

      <nav>
        <ul>
          <li>
            <Link to="products">Products</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="login">Log In</Link>
          </li>
        </ul>
      </nav>

      <div className={styles.cartBtnContainer} >
        <Button fontSize={15} padding={5} borderRadius={5}  backgroundColor="transparent" externalFunction={dispatch} type="open-close/cart" >
          <FontAwesomeIcon icon={faCartShopping} fontSize={18} />
        </Button>
        {
          cart.length > 0 && <p>({cart.length}) </p>
        }
      </div>
      <Cart />
    </header>
  )
}

export default Header