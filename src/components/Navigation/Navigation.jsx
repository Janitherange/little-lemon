import logo from "../../assets/Asset 16@4x.png"
import styles from "./Navigation.module.css"
import menuClosed from "../../assets/icons8-menu-rounded-50.png"
import menuOpened from "../../assets/icons8-close-24-dark.png"
import {useEffect, useState} from "react";

const Navigation = () => {

    useEffect(() => {


    }, [])

    const [open, setOpen] = useState(false)

    const openMenu = () => {
        const modal = document.getElementById('modal');
        document.getElementById("root").appendChild(modal);
        setOpen(true);
    }

    const closeMenu = () => {
        setOpen(false);
    }

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
            <div id="modal" style={open ? {display: "block"} : {display: "none"}} onClick={closeMenu}/>
            <div className={open ? styles.showMobileMenu : styles.hideMobileMenu}>
                <nav className={styles.smallScreenNav}>
                    <ul className={styles.smallScreenUl}>
                        <li><a className={styles.smallScreenA} href="/home">Home</a></li>
                        <li><a className={styles.smallScreenA} href="/about">About Us</a></li>
                        <li><a className={styles.smallScreenA} href="/blog">Menu</a></li>
                        <li><a className={styles.smallScreenA} href="/home">Reservations</a></li>
                        <li><a className={styles.smallScreenA} href="/about">Order Online</a></li>
                        <li><a className={styles.smallScreenA} href="/blog">Login</a></li>
                    </ul>
                </nav>
                <div >
                    <img className={styles.menuIcon} src={menuOpened} alt="menu" onClick={closeMenu}/>
                </div>
            </div>
            <img className={styles.menuIcon} src={menuClosed} alt="menu" onClick={openMenu} style={open ? {display:"none"} : null}/>
        </div>
    )
}
export default Navigation;