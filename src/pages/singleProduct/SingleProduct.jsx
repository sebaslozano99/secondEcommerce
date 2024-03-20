import { useParams } from "react-router-dom";
import { UseProductContext } from "../../contexts/DataContext";
import styles from "./SingleProduct.module.css";
import GallerySlider from "../../components/gallerySlider/GallerySlider";



const SingleProduct = () => {

  const { dataFromApi, cart, dispatch } = UseProductContext();
  const { id } = useParams();
  const [singleProduct] = dataFromApi.filter(element => element.id === Number(id) && element); //de-structured the array
  // console.log(id);
  // console.log(singleProduct);

  function checkIfAlreadyIncluded(array, product){
    if(array.some(element => element.id === product.id)) return;
    dispatch({type: "add-item/cart", payload: {...product, quantity: 1}});
    dispatch({type: "open-close/cart"});
  }


  return (
    <main className={styles.singleProductContainer} >

        <div className={styles.first} >
            <GallerySlider images={singleProduct?.images} />
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
            <button onClick={() => checkIfAlreadyIncluded(cart, singleProduct)} >ADD</button>
            <em>Only {singleProduct?.stock} in stock!</em>
          </div>

        </div>

    </main>
  )
}

export default SingleProduct