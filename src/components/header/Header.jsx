import { UseCartContext } from "../../contexts/CartContext";
import { UseIsOpenContext } from "../../contexts/IsOpen";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Button from "../button/Button";
import HeaderUser from "../headerUser/HeaderUser";
import Cart from "../cart/Cart";

function Header(){

  const { dispatchIsOpen } = UseIsOpenContext();
  const { cart } = UseCartContext();

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
        <Button fontSize={15} padding={5} borderRadius={5}  backgroundColor="transparent" externalFunction={dispatchIsOpen} type="open-close/cart" className={styles.cart} >
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
