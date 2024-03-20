import { useRef, useEffect } from "react";
import styles from "./About.module.css";


const About = () => {

  const ref = useRef();
  useEffect(() => {
    ref.current.scrollIntoView(0,0)
  }, [])

  return (
    <div > 
      <div className={styles.firstDiv} ref={ref} >
        <h2>About Batt</h2>
        <p>Discover a world of possibilities at <em>Batt</em>, your premier destination for online shopping. From fashion-forward apparel to cutting-edge gadgets, we offer a curated selection of top-quality products. With secure transactions and prompt delivery, we ensure a seamless shopping experience. Join us and embark on a journey of style, convenience, and satisfaction.  </p>
        <img src="../../../public/IMAGES/dropshipping.jpg" alt="dropshipping-background" />
      </div>

      <div>
        <div className={styles.secondDiv} >
            <h4>Our Numbers</h4>
            
            <div>   
                <img src="../../../public/IMAGES/earth.png" alt="planet earth" />
                <p>More than <em>2.000.000 visits</em> a month and over <em> 1.200.000 purchases</em> every month through our platform.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
