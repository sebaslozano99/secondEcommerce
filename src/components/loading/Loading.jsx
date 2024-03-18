import styles from "./Loading.module.css";


const Loading = () => {
  return (
    <div className={styles.productCard} >
        <div className={styles.titleContainer} >
            <h2 className={styles.skeleton} ></h2>
        </div>

        <div className={styles.imgContainer} >
            <img className={`${styles.img} ${styles.skeleton}`} />
        </div>

        <div className={styles.priceContainer} >
            <em className={`${styles.before} ${styles.skeleton}`} ></em>
            <p className={`${styles.price} ${styles.skeleton}`} ></p>
        </div>

        <div className={`${styles.buttonContainer}`} >
         <button className={styles.skeleton} ></button>
        </div>
    </div>
  )
}

export default Loading