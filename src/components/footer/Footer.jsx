import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer >
       <div className={styles.footer}>
        <div>
                <h5>Product</h5>
                <ul>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Cloud</li>
                </ul>
            </div>
            <div>
                <h5>Learn</h5>
                <ul>
                    <li>Docs</li>
                    <li>Guides</li>
                    <li>Api Reference</li>
                    <li>Release Notes</li>
                </ul>
            </div>
            <div>
                <h5>Resources</h5>
                <ul>
                    <li>Developers</li>
                    <li>GitHub</li>
                    <li>Discord</li>
                    <li>Twitter</li>
                </ul>
            </div>
            <div>
                <h5>About</h5>
                <ul>
                    <li>Company</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                    <li>Privacy</li>
                </ul>
            </div>

       </div>

        <div className={styles.secondDiv} >
            <div>
                <FontAwesomeIcon icon={faFacebook} className={styles.social} />
                <FontAwesomeIcon icon={faTwitter} className={styles.social} />
                <FontAwesomeIcon icon={faLinkedin} className={styles.social} />
            </div>
            <p>&copy; {new Date().getFullYear()} Batt inc.</p>
        </div>
    </footer>
  )
}

export default Footer