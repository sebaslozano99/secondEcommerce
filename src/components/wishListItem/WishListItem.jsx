import PropTypes from "prop-types";
import styles from "./WishListItem.module.css";
import GallerySlider from "../gallerySlider/GallerySlider";


const WishListItem = ({element}) => {
  return (
    <div className={styles.itemContainer} >
      <div className={styles.galleryContainer} >
        <GallerySlider images={element.images} />
      </div>

      <div className={styles.textContainer} >
        <h3>{element.title}</h3>
        <em>{element.rating}⭐</em>
        <p>{element.description}</p>
        <div>
          {element.category}
        </div>
      </div>
    </div>
  )
}

export default WishListItem;

WishListItem.propTypes = {
  element: PropTypes.object,
}