import PropTypes from "prop-types";
import styles from "./CartItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { UseCartContext } from "../../contexts/CartContext";
const CartItem = ({productInfo}) => {


  const { dispatchCart } = UseCartContext();

  function onChangeQuantity(e){
    dispatchCart({type: "change-quantity/item", payload:{id: productInfo.id, newQuantity: e.target.value}});
  }

  return (
    <div className={styles.itemCartContainer} >
        <div className={styles.imageContainer} >
            <img src={productInfo.images[0]} alt={productInfo.images[0]} />
        </div>

        <div className={styles.middleDivContainer} >
          <h4>{productInfo.title}</h4>
          <select onChange={(e) => onChangeQuantity(e)} >
            {
              Array.from({length: 5}, (_, i) => i + 1).map(element => (
                <option key={element} value={element}>{element}</option>
              ))
           }
          </select>
          <p>${productInfo.price}</p>
        </div>

        <div className={styles.trashContainer} >
          <button onClick={() => dispatchCart({type: "delete-item/cart", payload: productInfo.id})} >
           <FontAwesomeIcon icon={faTrash} fontSize={20} />
          </button>
        </div>
    </div>
  )
}

export default CartItem;

CartItem.propTypes = {
    productInfo: PropTypes.object,
}