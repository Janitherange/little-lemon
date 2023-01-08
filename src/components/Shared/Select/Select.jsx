import chevronUp from "../../../assets/icons8-chevron-up.png";
import chevronDown from "../../../assets/icons8-chevron-down.png";
import chevronUpWhite from "../../../assets/icons8-chevron-up-white.png";
import chevronDownWhite from "../../../assets/icons8-chevron-down-white.png";
import styles from "./Select.module.css";
import { useState } from "react";

const Select = ({ data, setSelectValue }) => {
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState("select");

  const toggleMenu = () => {
    const modal = document.getElementById("select_modal");
    document.getElementById("root").appendChild(modal);
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <div className={styles.container}>
      <div
        id="select_modal"
        style={open ? { display: "block" } : { display: "none" }}
        onClick={() => toggleMenu()}
      />
      <button
        id="selectButton"
        type="button"
        className={item === "select" ? styles.button : styles.buttonSelected}
        onClick={() => {
          toggleMenu();
        }}
      >
        <span id="occasion">{item}</span>
        <span>
          {open && item === "select" ? (
            <img className={styles.chevron} src={chevronUp} alt="chevron" />
          ) : !open && item === "select" ? (
            <img className={styles.chevron} src={chevronDown} alt="chevron" />
          ) : open && item !== "select" ? (
            <img
              className={styles.chevron}
              src={chevronUpWhite}
              alt="chevron"
            />
          ) : !open && item !== "select" ? (
            <img
              className={styles.chevron}
              src={chevronDownWhite}
              alt="chevron"
            />
          ) : null}
        </span>
      </button>
      {open && (
        <ul className={styles.ul}>
          {data &&
            data.map((item, id) => (
              <li
                className={`${styles.li} li_${id}`}
                key={item}
                onClick={() => {
                  setItem(item);
                  closeMenu();
                  setSelectValue(item);
                }}
              >
                {item}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
