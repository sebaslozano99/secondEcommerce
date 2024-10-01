import { UseProductContext } from "../../contexts/DataContext";
import { UseCartContext } from "../../contexts/CartContext";
import { UseIsOpenContext } from "../../contexts/IsOpen";
import { UseAuthContext } from "../../contexts/FakeAuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";


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
      dispatchCart({type: "add-item/cart", payload: {id: product.id, newProduct: {...product, quantity: Number(1)}}});
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
    <div className="border border-[rgba(0,0,0,0.5)] rounded-[15px] shadow-[0_0_#000] transition-all ease-in-out duration-700 flex flex-col justify-between p-[1em] hover:scale-105" >
    {/* // <div className={styles.productCard} > */}

      
        <div className="flex flex-col items-center justify-center" >
            <Link to={`${product.id}`}>
              <h2 className="text-center text-black text-2xl font-semibold capitalize" >
               {product.title}
              </h2>
            </Link>
        </div>


        <div className="w-full h-[60%] flex justify-center" >
            <img src={product.images[0]} alt={product.images[0]} className="w-[70%] h-full object-contain" />
        </div>


        <div className="flex items-center justify-center gap-[15px]" >
            <em className="line-through text-stone-500 text-sm" >${Number(product.price + product.discountPercentage).toFixed(2)}</em>
            <p className="text-[1.5em]" >${product.price}</p>
        </div>



        <div className="flex justify-center gap-[15px]" >

          <button onClick={() => checkIfAlreadyIncluded(product)} disabled={isAlreadyInCart} style={isAlreadyInCart ? {cursor: "not-allowed"} : {}} className="p-[4px] bg-[#252525] text-white outline-none border-0 w-[5em] text-lg cursor-pointer" >
            {isAlreadyInCart ? "Added" : "Add"}
          </button>

          <button onClick={onAddWishList} style={isAlreadyInWishList ? {cursor: "not-allowed"} : {}} className="p-[4px] bg-[#252525] text-white outline-none border-0 w-[5em] text-lg cursor-pointer"  >
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