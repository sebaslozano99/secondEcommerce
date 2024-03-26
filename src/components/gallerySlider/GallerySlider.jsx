import PropTypes from "prop-types";
import styles from "./GallerySlider.module.css";
import { useState } from "react";

const GallerySlider = ({images, sidePreview}) => {

  const [index, setIndex] = useState(0);

  function next(){
    setIndex(index => index < images.length - 1 ? index + 1 : 0);
  }

  function prev(){
    setIndex(index => index > 0 ? index - 1 : images.length - 1);
  }

  return (
    <div className={styles.mainContainer} >

      {sidePreview && <div className={styles.prevImages} >
        {
          images?.map((element, i) => i < 4 ?  <div  className={index === i ? styles.currentImage : null} key={element} onMouseEnter={() => setIndex(i)} >
            <img src={element} alt={element} />
          </div>
          : 
          null
          )
        }
      </div>}

      <div className={sidePreview ? styles.sliderContainer : `${styles.sliderContainer} ${styles.sliderContainerTotal}`} >
        <button className={styles.prev} onClick={prev} >&#8592;</button>
        <div>
          <img src={images?.at(index)} alt={images?.at(index)} />
        </div>
        <button className={styles.next} onClick={next} >&#8594;</button>
      </div>
    </div>
  )
}

export default GallerySlider;

GallerySlider.propTypes = {
  images: PropTypes.array,
  sidePreview: PropTypes.bool,
}