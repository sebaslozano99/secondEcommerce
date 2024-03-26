import styles from "./Cart.module.css";
import Button from "../button/Button";
import { useEffect } from "react";
import CartItem from "../cartItem/CartItem";
import { UseCartContext } from "../../contexts/CartContext";
import { UseIsOpenContext } from "../../contexts/IsOpen";


const Cart = () => {

  const { cartOpen, dispatchIsOpen } = UseIsOpenContext();
  const { cart } = UseCartContext();
  
  const totalAmount = cart.reduce((acc, curr) => {
    return curr.price * curr.quantity + acc;
  },0)

  useEffect(() => {
    const root = document.querySelector("body");
    root.classList.toggle("hide");
  }, [cartOpen])


  return (
    <div className={`${styles.cartContainer} ${cartOpen && styles.open}`} >
        <button onClick={() => dispatchIsOpen({type: "open-close/cart"})} className={styles.closeCartBtn} >x</button>

        <div className={styles.titleContainer} >
            <h3>Shopping Cart</h3>
        </div>

        {
            !cart.length ?

          <div className={styles.emptyContainer}>
            <div className={styles.imageContainer} >
              <img src="../../public/IMAGES/Empty-bro.svg" alt="empty cart" />
            </div>

            <div className={styles.messageContainer} >
              <p>Lools like your cart is empty!</p>
            </div>

            <div className={styles.btnContainer} >
             <Button backgroundColor="#30D3F4" padding={5} width={100} borderRadius={10} fontSize={15} externalFunction={dispatchIsOpen} type="open-close/cart" >Explore</Button>
            </div>
          </div>

          :

          <>
            <div className={styles.itemsContainer} >
              {
                cart.map(element => <CartItem key={element.id} productInfo={element} /> )
              }
            </div>

            <div  className={styles.totalBox} >
              <div>
                <p>Total</p>
                <p>${totalAmount}</p>
              </div>

              <button>Go check out</button>
            </div>
            
          </>
        }

    </div>
  )
}

export default Cart