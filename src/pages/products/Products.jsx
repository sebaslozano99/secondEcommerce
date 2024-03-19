import { UseProductContext } from "../../contexts/DataContext";
import { useSearchParams } from "react-router-dom";
import styles from "./Products.module.css";
import Filter from "../../components/filter/Filter";
import ProductItem from "../../components/productItem/ProductItem";
import Loading from "../../components/loading/Loading";


const Products = () => {
  const { dataFromApi, isLoading } = UseProductContext();
  const [searchParams] = useSearchParams({category: "smartphones", price: "0"});
  const price = searchParams.get("price");
  const array = Array.from({length: 7});


  return (
    <main className={styles.main} >
      <Filter />

     {!isLoading ? 
      <div className={styles.mainDiv} >
        {
          dataFromApi?.filter(element => element.price >= price).map((element) => <ProductItem key={element.id} product={element} />  )
        }
      </div>

        :

      <div className={styles.mainDiv} >
        {
          array.map((element, index) => <Loading key={index} /> )
        }
      </div>
    }
    </main>
  )
}

export default Products