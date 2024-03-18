import PropTypes from "prop-types";
import styles from "./ProductItem.module.css";
import { UseProductContext } from "../../contexts/DataContext";


const ProductItem = ({product}) => {
  const { cart, dispatch } = UseProductContext();

  function checkIfAlreadyIncluded(array, product){
    if(array.some(element => element.id === product.id)) return;
    return dispatch({type: "add-item/cart", payload: {...product, quantity: 1}});
  }



  return (
    <div className={styles.productCard} >
        <div className={styles.titleContainer} >
            <h2>{product.title}</h2>
        </div>

        <div className={styles.imgContainer} >
            <img src={product.images[0]} alt={product.images[0]} className={styles.img} />
        </div>

        <div className={styles.priceContainer} >
            <em className={styles.before} >${Number(product.price + product.discountPercentage).toFixed(2)}</em>
            <p className={styles.price} >${product.price}</p>
        </div>

        <div className={styles.buttonContainer} >
         {/* <Button backgroundColor="#30D3F4" fontSize={18} padding={4} borderRadius={10} width={150} externalFunction={() => checkIfAlreadyIncluded(cart, product)} type="add-item/cart" payload={product} >Add</Button> */}
         <button onClick={() => checkIfAlreadyIncluded(cart, product)} >add</button>
        </div>
    </div>
  )
}

export default ProductItem


ProductItem.propTypes = {
    product: PropTypes.object,
}