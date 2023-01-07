import styles from "./Menu.module.css";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Fragment } from "react";

const Menu = ({ type, close }) => {
  return (
    <Fragment>
      {type === "largeMenu" ? (
        <nav className={styles.nav}>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <NavLink to="/home" className={styles.a}>
                Home
              </NavLink>
            </li>
            <li className={styles.li}>
              <HashLink to="/home#about" className={styles.a}>
                About Us
              </HashLink>
            </li>
            <li className={styles.li}>
              <NavLink to="/menu" className={styles.a}>
                Menu
              </NavLink>
            </li>
            <li className={styles.li}>
              <NavLink to="/reservations" className={styles.a}>
                Reservations
              </NavLink>
            </li>
            <li className={styles.li}>
              <NavLink to="/book" className={styles.a}>
                Order Online
              </NavLink>
            </li>
          </ul>
        </nav>
      ) : type === "smallMenu" ? (
        <nav className={styles.smallScreenNav}>
          <ul className={styles.smallScreenUl}>
            <li>
              <NavLink
                to="/home"
                className={styles.smallScreenA}
                onClick={close}
              >
                Home
              </NavLink>
            </li>
            <li>
              <HashLink
                to="/home#about"
                className={styles.smallScreenA}
                onClick={close}
              >
                About Us
              </HashLink>
            </li>
            <li>
              <NavLink
                to="/menu"
                className={styles.smallScreenA}
                onClick={close}
              >
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/reservations"
                className={styles.smallScreenA}
                onClick={close}
              >
                Reservations
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/book"
                className={styles.smallScreenA}
                onClick={close}
              >
                Order Online
              </NavLink>
            </li>
          </ul>
        </nav>
      ) : (
        <ul>
          <li className={styles.liFooter}>
            <NavLink to="/home" className={styles.aFooter}>
              Home
            </NavLink>
          </li>
          <li className={styles.liFooter}>
            <HashLink to="/home#about" className={styles.aFooter}>
              About
            </HashLink>
          </li>
          <li className={styles.liFooter}>
            <NavLink to="/menu" className={styles.aFooter}>
              Menu
            </NavLink>
          </li>
          <li className={styles.liFooter}>
            <NavLink to="/reservations" className={styles.aFooter}>
              Reservations
            </NavLink>
          </li>
          <li className={styles.liFooter}>
            <NavLink to="/book" className={styles.aFooter}>
              Order Online
            </NavLink>
          </li>
        </ul>
      )}
    </Fragment>
  );
};

export default Menu;
