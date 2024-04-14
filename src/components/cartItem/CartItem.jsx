import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { UseCartContext } from "../../contexts/CartContext";
const CartItem = ({productInfo}) => {


  const { dispatchCart } = UseCartContext();

  function onChangeQuantity(e){
    dispatchCart({type: "change-quantity/item", payload:{id: productInfo.id, newQuantity: e.target.value}});
  }

  return (
    <div className="h-[8em] flex justify-between items-center border-red-400 border-2" >
        <div className="w-[30%] h-full" >
            <img src={productInfo.images[0]} alt={productInfo.images[0]} className="w-full h-full object-contain" />
        </div>

        <div className="w-[45%] h-full flex flex-col justify-around items-center" >
          <h4 className="text-center text-[0.9em]">{productInfo.title}</h4>
          <select onChange={(e) => onChangeQuantity(e)} >
            {
              Array.from({length: 5}, (_, i) => i + 1).map(element => (
                <option key={element} value={element}>{element}</option>
              ))
           }
          </select>
          <p>${productInfo.price}</p>
        </div>

        <div className="w-[20%] h-full flex justify-center items-center" >
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