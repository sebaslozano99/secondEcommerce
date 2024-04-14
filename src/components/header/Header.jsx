import { UseCartContext } from "../../contexts/CartContext";
import { UseIsOpenContext } from "../../contexts/IsOpen";
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
    <header className="w-full h-[10vh] bg-white/90 flex justify-around items-center sticky z-[1] top-0" >

      <h1 className="text-[1.7em]">
        <Link to="/">
          Batt
        </Link>
      </h1>

      <nav>
        <ul className="flex">
          <li>
            <Link to="products" className="py-[5px] px-[20px] text-[1.2em]">Products</Link>
          </li>
          <li>
            <Link to="about" className="py-[5px] px-[20px] text-[1.2em]">About</Link>
          </li>
          <li>
            <Link to="login" className="py-[5px] px-[20px] text-[1.2em]">Log In</Link>
          </li>
        </ul>
      </nav>

      <div className="flex justify-between items-center gap-[40px]" >
        <Button fontSize={15} padding={5} borderRadius={5}  backgroundColor="transparent" externalFunction={dispatchIsOpen} type="open-close/cart" className="flex" >
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
