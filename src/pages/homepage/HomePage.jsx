import { UseProductContext } from "../../contexts/DataContext";
import { useEffect, useRef} from "react";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";
import { faShieldVirus } from "@fortawesome/free-solid-svg-icons";
import { faLockOpen } from "@fortawesome/free-solid-svg-icons";


function HomePage(){

  const { dispatch } = UseProductContext();
  const ref = useRef();


  useEffect(() => {
    ref.current.scrollIntoView({
      block: "start",
    })
  }, [])

  return (
    <main ref={ref} className={styles.container} >
      <div className={styles.banner} ></div>

      <section className={styles.sectionOne} >
        <div className={styles.sectionOneFirstDiv} >
          <h2>Batt is the only place on the internet where You can FIND all you need at the CHEAPEST price!</h2>
        </div>

        <div className={styles.sectionOneSecondDiv} >

          <div className={styles.insideDiv} >
            <div>
              <FontAwesomeIcon icon={faLaptop}  className={styles.icon} />
              <h5>Easy to use</h5>
            </div>

            <p>All you need is at some clicks away from You. Go to Products page and You will agree with this.</p>
          </div>

          <div className={styles.insideDiv} >
            <div>
              <FontAwesomeIcon icon={faShieldVirus}  className={styles.icon} />
              <h5>Own your data</h5>
            </div>

            <p>Data ownership is vitally important for maintinaing compliance with ever changing privacy laws. Rest assured knowing your data is in your control.</p>
          </div>

          <div className={styles.insideDiv} >
            <div>
              <FontAwesomeIcon icon={faLockOpen} className={styles.icon} />
              <h5>Respect data privacy</h5>
            </div>

            <p>All the personal information that You shared is protected respecting the privacy of our users. All data is anonymized and no personal data is ever collected.</p>
          </div>

        </div>

      </section>

      <section className={styles.sectionTwo} >
        <h2>Categories that might interest you</h2>

        <div className={styles.divTwo}>
          <div>
            <Link to="products?category=mens-shirts" onClick={() => dispatch({type: "change/category", payload: "mens-shirts"})} >
             <img src="../../public/IMAGES/mensClothing.png" alt="men's clothing" title="Men's Shirts" />
            </Link>
          </div>

          <div>
            <Link to={`products?category=smartphones`} onClick={() => dispatch({type: "change/category", payload: "smartphones"})} >
             <img src="../../public/IMAGES/smartphonesBanner.png" alt="smartphone's banner" title="Smartphones" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}

export default HomePage