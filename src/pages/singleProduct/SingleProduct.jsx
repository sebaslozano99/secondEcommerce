import { UseProductContext } from "../../contexts/DataContext";
import { UseIsOpenContext } from "../../contexts/IsOpen";
import { UseCartContext } from "../../contexts/CartContext";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./SingleProduct.module.css";
import GallerySlider from "../../components/gallerySlider/GallerySlider";
import { UseAuthContext } from "../../contexts/FakeAuthContext";



const SingleProduct = () => {

  const navigate = useNavigate();
  const { dataFromApi } = UseProductContext();
  const { id } = useParams();
  const [singleProduct] = dataFromApi.filter(element => element.id === Number(id) && element); //de-structured the array
  const { dispatchIsOpen } = UseIsOpenContext();
  const { cart, dispatchCart } = UseCartContext();
  const { isAuthenticated } = UseAuthContext();
  const isAlreadyInCart = cart.some(element => element.id === singleProduct.id);


  // console.log(cart.some(element => element.id === singleProduct.id));

  function checkIfAlreadyIncluded(product){

    //if product is already included in the cart, do nothing, else add it and open cart
    if(isAuthenticated) {

      if(isAlreadyInCart) return;

      dispatchCart({type: "add-item/cart", payload: {id: product.id, newProduct: {...product, quantity: Number(1)}}});
      dispatchIsOpen({type: "open-close/cart"});

    }
    else{
      navigate("/login");
    }

  }

  return (
    <main className={styles.singleProductContainer} >

        <div className={styles.first} >
            <GallerySlider images={singleProduct?.images} sidePreview={true} />
        </div>


        <div className={styles.second} >

          <div className={styles.textsContainer} >

            <div className={styles.categoryContainer} >
              <h6>{singleProduct?.category}</h6>
            </div>

            <h2>{singleProduct?.title}</h2>

            <div  className={styles.priceRateContainer}>
             <p>${singleProduct?.price}</p>
             <em>${Number(singleProduct?.price + singleProduct?.discountPercentage).toFixed(2)}</em>
            </div>

          </div>

          <div className={styles.descriptionContainer} >
            <p>{singleProduct?.description}</p>
          </div>

          <div className={styles.btnContainer} >
            <button onClick={() => checkIfAlreadyIncluded(singleProduct)} style={isAlreadyInCart && {cursor: "not-allowed"}} >{isAlreadyInCart ? "ADDED" : "ADD"}</button>
            <em>Only {singleProduct?.stock} in stock!</em>
          </div>

        </div>

    </main>
  )
}

export default SingleProduct