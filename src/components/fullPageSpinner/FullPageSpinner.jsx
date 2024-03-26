import styles from "./FullPageSpinner.module.css";


const FullPageSpinner = () => {
  return (
    <div className={styles.container} >
        <div className={styles.spinner}></div>
    </div>
  )
}

export default FullPageSpinner