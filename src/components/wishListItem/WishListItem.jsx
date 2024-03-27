import { UseCartContext } from "../../contexts/CartContext";
import PropTypes from "prop-types";
import styles from "./WishListItem.module.css";
import GallerySlider from "../gallerySlider/GallerySlider";
import { UseIsOpenContext } from "../../contexts/IsOpen";
import { UseProductContext } from "../../contexts/DataContext";


const WishListItem = ({element}) => {

  const { dispatch } = UseProductContext();
  const { cart, dispatchCart } = UseCartContext();
  const { dispatchIsOpen } = UseIsOpenContext();
  const isAlreadyInCart = cart.some(cart => cart.id === element.id);


  function addToCart(){
    dispatchCart({type: "add-item/cart", payload: {id: element.id, newProduct: {...element, quantity: 1}} });
    dispatchIsOpen({type: "open-close/cart"});
  }

  return (
    <div className={styles.itemContainer} >
      <div className={styles.galleryContainer} >
        <GallerySlider images={element.images} />
      </div>

      <div className={styles.textContainer} >

        <div className={styles.first} >
          <div>
            {element.category}
          </div>

          <em>{element.rating}⭐</em>
        </div>

        <div className={styles.secondDiv} >

          <h3>{element.title}</h3>
          <p>{element.description}</p>

          <div className={styles.btnContainer}>
            <button onClick={() => addToCart() } disabled={isAlreadyInCart} style={isAlreadyInCart ? {cursor: "not-allowed"} : {}} >{!isAlreadyInCart ? "Add" : "Added"}</button>
            <button onClick={() => dispatch({type: "wishlist/deleteItem", payload: element.id})} >x</button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default WishListItem;

WishListItem.propTypes = {
  element: PropTypes.object,
}