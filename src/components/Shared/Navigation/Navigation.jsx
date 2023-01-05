import logo from "../../../assets/Asset 16@4x.png";
import styles from "./Navigation.module.css";
import menuClosed from "../../../assets/icons8-menu-rounded-50.png";
import menuOpened from "../../../assets/icons8-close-24-dark.png";
import { useEffect, useState } from "react";
import Menu from "../Menu/Menu.jsx";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(null);

  useEffect(() => {
    setModal(document.getElementById("nav_modal"));
  }, []);

  const openMenu = () => {
    document.getElementById("root").appendChild(modal);
    setOpen(true);
  };

  const closeMenu = () => {
    setOpen(false);
    document.getElementById("root").removeChild(modal);
  };

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <header className={styles.header}>
          <img className={styles.img} src={logo} alt="logo" />
        </header>
        <Menu type="largeMenu" />
        {open && (
          <div className={open ? styles.showMobileMenu : styles.hideMobileMenu}>
            <Menu type="smallMenu" close={closeMenu} />
          </div>
        )}
        <img
          className={styles.menuClosedIcon}
          src={open ? menuOpened : menuClosed}
          alt="menu"
          onClick={open ? closeMenu : openMenu}
        />
        <div
          id="nav_modal"
          style={open ? { display: "block" } : { display: "none" }}
          onClick={closeMenu}
        />
      </div>
    </div>
  );
};
export default Navigation;
