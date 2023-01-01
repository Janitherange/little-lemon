import logo from "../../assets/Asset 16@4x.png"
import styles from "./Navigation.module.css"

const Navigation = () => {
    return (
        <div className={styles.menu}>
            <header className={styles.header}>
                <img className={styles.img} src={logo} alt="logo"/>
            </header>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li className={styles.li}><a className={styles.a} href="/home">Home</a></li>
                    <li className={styles.li}><a className={styles.a} href="/about">About Us</a></li>
                    <li className={styles.li}><a className={styles.a} href="/blog">Menu</a></li>
                    <li className={styles.li}><a className={styles.a} href="/home">Reservations</a></li>
                    <li className={styles.li}><a className={styles.a} href="/about">Order Online</a></li>
                    <li className={styles.li}><a className={styles.a} href="/blog">Login</a></li>
                </ul>
            </nav>
        </div>
    )
}
export default Navigation;