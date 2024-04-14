import { UseProductContext } from "../../contexts/DataContext";
import { useSearchParams } from "react-router-dom";
import Filter from "../../components/filter/Filter";
import ProductItem from "../../components/productItem/ProductItem";
import Loading from "../../components/loading/Loading";


const Products = () => {
  const { dataFromApi, isLoading } = UseProductContext();
  const [searchParams] = useSearchParams({category: "smartphones", price: "0"});
  const price = searchParams.get("price");
  const array = Array.from({length: 7});


  return (
    <main className="w-full min-h-[90vh]" >
      <Filter />

     {!isLoading ? 
      <div className="w-full min-h-[90vh] p-[1.5em] grid grid-cols-auto-fit-400 auto-rows-[400px] gap-6" >
        {
          dataFromApi?.filter(element => element.price >= price).map((element) => <ProductItem key={element.id} product={element} />  )
        }
      </div>

        :

      <div className="w-full min-h-[90vh] p-[1.5em] grid grid-cols-auto-fit-400 auto-rows-[400px] gap-6" >
        {
          array.map((element, index) => <Loading key={index} /> )
        }
      </div>
    }
    </main>
  )
}

export default Products