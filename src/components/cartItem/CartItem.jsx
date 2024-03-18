import PropTypes from "prop-types";
import styles from "./CartItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { UseProductContext } from "../../contexts/DataContext";

const CartItem = ({productInfo}) => {


  const { dispatch } = UseProductContext();

  function onChangeQuantity(e){
    dispatch({type: "change-quantity/item", payload:{id: productInfo.id, newQuantity: e.target.value}});
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
          <button onClick={() => dispatch({type: "delete-item/cart", payload: productInfo.id})} >
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