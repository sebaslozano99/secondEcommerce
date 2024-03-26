import { UseProductContext } from "../../contexts/DataContext"
import styles from "./WishList.module.css";
import WishListItem from "../../components/wishListItem/WishListItem";

const WishList = () => {

  const { wishList } = UseProductContext();

  return (
    <div className={styles.container} >
        {
            wishList.map(element => <WishListItem key={element.id} element={element}  /> )
        }
    </div>
  )
}

export default WishList