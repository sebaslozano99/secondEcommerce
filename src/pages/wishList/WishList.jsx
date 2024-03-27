import { UseProductContext } from "../../contexts/DataContext"
import styles from "./WishList.module.css";
import WishListItem from "../../components/wishListItem/WishListItem";

const WishList = () => {

  const { wishList } = UseProductContext();
  console.log(wishList);

  return (
    <div className={wishList.length ? styles.container : styles.emptyContainer} >
      {
        !wishList.length ?

        <div>NO ITEMS IN HERE!</div>

        :

        wishList.map(element => <WishListItem key={element.id} element={element}  /> )
        
      }
    </div>
  )
}

export default WishList