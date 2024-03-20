import { useSearchParams } from "react-router-dom";
import { UseProductContext } from "../../contexts/DataContext";
// import { useSearchParams } from "react-router-dom";
import styles from "./Filter.module.css";
import { useEffect, useRef } from "react";


function maxRangeInput(dataFromApi){
  const greatest = dataFromApi.reduce((acc, curr) => {
    if(curr.price > acc) return curr.price;
    return acc;
  }, 0)

  return greatest - ((greatest * 20) / 100);
}


const Filter = () => {
  const { dataFromApi, category, dispatch} = UseProductContext();
  const ref = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams({price: "0", category: category});
  const price = searchParams.get("price") ?? 0;
  const categoryUrl = searchParams.get("category");
  const maxRangeInputProduct = maxRangeInput(dataFromApi);



  //When user is on a different page and on that page he's scrolled to the bottom, usually the default behavior is that when moving to a different page, it will start at the bottom as in the previous page, thus I want to scroll up automatically
  useEffect(() => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "end"
    })
  }, [])


  function onChangePrice(e){
    setSearchParams(prev => {
      prev.set("price", e.target.value);
      return prev;
    }, { replace: true })
  }

  function onChangeCategory(e){
    dispatch({type: "change/category", payload: e.target.value});
    setSearchParams(prev => {
      prev.set("category", e.target.value);
      prev.set("price", 0);
      return prev;
    })
  }

  return (
    <form onSubmit={(e) => e.preventDefault()} ref={ref} className={styles.form} >
        <div className={styles.div} >
            <label id="price">Price</label>
            <input id="price" type="range" min={0} max={maxRangeInputProduct} step={maxRangeInputProduct / 4} value={Number(price)} onChange={(e) => onChangePrice(e)} />
            <span>${price}</span>
        </div>

        <div className={styles.div} >
            <label id="category">Category</label>

            <select id="category" value={categoryUrl} onChange={(e) => onChangeCategory(e)} >
                {/* <option value="all">All</option> */}
                <option value="smartphones">Smartphones</option>
                <option value="laptops">laptops</option>
                <option value="womens-dresses">Women&apos;s Dresses</option>
                <option value="womens-shoes">Women&apos;s Shoes</option>
                <option value="mens-shirts">Men&apos;s Shirts</option>
                <option value="mens-shoes">Men&apos;s Shoes</option>
            </select>
        </div>
    </form>
  )
}

export default Filter