import { UseProductContext } from "../../contexts/DataContext";
import { UseCartContext } from "../../contexts/CartContext";
import { UseIsOpenContext } from "../../contexts/IsOpen";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./ProductItem.module.css";


const ProductItem = ({product}) => {
  const { dispatch } = UseProductContext();
  const { cart, dispatchCart } = UseCartContext();
  const { dispatchIsOpen } = UseIsOpenContext();

  function checkIfAlreadyIncluded(array, product){
    if(array.some(element => element.id === product.id)) return;
    dispatchCart({type: "add-item/cart", payload: {...product, quantity: 1}});
    dispatchIsOpen({type: "open-close/cart"});
  }



  return (
    <div className={styles.productCard} >
        <div className={styles.titleContainer} >
            <Link to={`${product.id}`}>
              <h2>
               {product.title}
              </h2>
            </Link>
        </div>

        <div className={styles.imgContainer} >
            <img src={product.images[0]} alt={product.images[0]} className={styles.img} />
        </div>

        <div className={styles.priceContainer} >
            <em className={styles.before} >${Number(product.price + product.discountPercentage).toFixed(2)}</em>
            <p className={styles.price} >${product.price}</p>
        </div>

        <div className={styles.buttonContainer} >
           <button onClick={() => checkIfAlreadyIncluded(cart, product)} >add</button>
           <button onClick={() => dispatch({type: "wishlist/add", payload: {id:product.id, newWish: product}})} >
            <FontAwesomeIcon icon={faHeart} />
           </button>
        </div>
    </div>
  )
}

export default ProductItem


ProductItem.propTypes = {
    product: PropTypes.object,
}