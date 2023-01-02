import styles from "./Footer.module.css"
import logo from "../../assets/Asset 20@4x.png"
import facebook from "../../assets/icons8-facebook-50.png"
import twitter from "../../assets/icons8-twitter-circled-50.png"
import linkedin from "../../assets/icons8-linkedin-circled-50.png"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <figure className={styles.figure}>
                    <img className={styles.img} src={logo} alt="footer logo"/>
                </figure>
                <nav>
                    <h4 className={styles.h4}>Navigation</h4>
                    <ul>
                        <li className={styles.li}><a className={styles.a}>Home</a></li>
                        <li className={styles.li}><a className={styles.a}>About</a></li>
                        <li className={styles.li}><a className={styles.a}>Menu</a></li>
                        <li className={styles.li}><a className={styles.a}>Reservations</a></li>
                        <li className={styles.li}><a className={styles.a}>Order Online</a></li>
                        <li className={styles.li}><a className={styles.a}>Login</a></li>
                    </ul>
                </nav>
                <nav>
                    <h4 className={styles.h4}>Contact</h4>
                    <ul>
                        <li className={styles.li}><a className={styles.a}>1227 B, Baker Street</a></li>
                        <li className={styles.li}><a className={styles.a}>contact@littlelemon.com</a></li>
                        <li className={styles.li}><a className={styles.a}>+44886787651</a></li>
                    </ul>
                </nav>
                <nav>
                    <h4 className={styles.h4}>Social Media Links</h4>
                    <ul className={styles.ul}>
                        <li className={styles.li}><a >
                            <img className={styles.social} src={facebook} alt="facebook"/>
                        </a></li>
                        <li className={styles.li}><a>
                            <img className={styles.social} src={twitter} alt="twitter"/>
                        </a></li>
                        <li className={styles.li}><a>
                            <img className={styles.social} src={linkedin} alt="linkedin"/>
                        </a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}

export default Footer