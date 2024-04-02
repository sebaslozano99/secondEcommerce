import { UseProductContext } from "../../contexts/DataContext";
import { UseCartContext } from "../../contexts/CartContext";
import { UseIsOpenContext } from "../../contexts/IsOpen";
import { UseAuthContext } from "../../contexts/FakeAuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./ProductItem.module.css";


const ProductItem = ({product}) => {
  const { wishList, dispatch } = UseProductContext();
  const { cart, dispatchCart } = UseCartContext();
  const { dispatchIsOpen } = UseIsOpenContext();
  const { isAuthenticated } = UseAuthContext();
  const navigate = useNavigate();
  const isAlreadyInCart = cart.some(element => element.id === product.id);
  const isAlreadyInWishList = wishList.some(element => element.id === product.id);
  

  function checkIfAlreadyIncluded(product){
    if(isAuthenticated){
      dispatchCart({type: "add-item/cart", payload: {id: product.id, newProduct: {...product, quantity: 1}}});
      dispatchIsOpen({type: "open-close/cart"});
    }
    else{
      navigate("/login");
    }

  }

  function onAddWishList(){
    if(isAuthenticated) {
      dispatch({type: "wishlist/add", payload: {id:product.id, newWish: product}});
    }
    else{
      navigate("/login");
    }
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

          <button onClick={() => checkIfAlreadyIncluded(product)} disabled={isAlreadyInCart} style={isAlreadyInCart ? {cursor: "not-allowed"} : {}} >
            {isAlreadyInCart ? "Added" : "Add"}
          </button>

          <button onClick={onAddWishList} style={isAlreadyInWishList ? {cursor: "not-allowed"} : {}}  >
            <FontAwesomeIcon icon={faHeart} color={isAlreadyInWishList ? "aqua" : ""}  />
          </button>

        </div>

    </div>
  )
}

export default ProductItem


ProductItem.propTypes = {
    product: PropTypes.object,
}