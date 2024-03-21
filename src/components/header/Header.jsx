import { UseProductContext } from "../../contexts/DataContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.css";
import Button from "../button/Button";
import Cart from "../cart/Cart";
import HeaderUser from "../headerUser/HeaderUser";
// import images from "../../../public/IMAGES/user-pic.jpg";

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
        <Button fontSize={15} padding={5} borderRadius={5}  backgroundColor="transparent" externalFunction={dispatch} type="open-close/cart" className={styles.cart} >
          <FontAwesomeIcon icon={faCartShopping} fontSize={18} />
        {
          cart.length > 0 && <p>({cart.length}) </p>
        }
        </Button>
        <HeaderUser />
      </div>

      <Cart />
    </header>
  )
}

export default Header