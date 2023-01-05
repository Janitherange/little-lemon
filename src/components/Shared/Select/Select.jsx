import chevronUp from "../../../assets/icons8-chevron-up.png";
import chevronDown from "../../../assets/icons8-chevron-down.png";
import chevronUpWhite from "../../../assets/icons8-chevron-up-white.png";
import chevronDownWhite from "../../../assets/icons8-chevron-down-white.png";
import styles from "./Select.module.css";
import { useState } from "react";

const Select = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState("select");

  const openMenu = () => {
    const modal = document.getElementById("select_modal");
    document.getElementById("root").appendChild(modal);
    setOpen(!open);
  };

  return (
    <div className={styles.container}>
      <div
        id="select_modal"
        style={open ? { display: "block" } : { display: "none" }}
        onClick={() => openMenu(false)}
      />
      <input
        type="date"
        className={item === "select" ? styles.button : styles.buttonSelected}
      />
      {/*  <span>{item}</span>*/}
      {/*  <span>*/}
      {/*    {open && item === "select" ? (*/}
      {/*      <img className={styles.chevron} src={chevronUp} alt="chevron" />*/}
      {/*    ) : !open && item === "select" ? (*/}
      {/*      <img className={styles.chevron} src={chevronDown} alt="chevron" />*/}
      {/*    ) : open && item != "select" ? (*/}
      {/*      <img*/}
      {/*        className={styles.chevron}*/}
      {/*        src={chevronUpWhite}*/}
      {/*        alt="chevron"*/}
      {/*      />*/}
      {/*    ) : !open && item != "select" ? (*/}
      {/*      <img*/}
      {/*        className={styles.chevron}*/}
      {/*        src={chevronDownWhite}*/}
      {/*        alt="chevron"*/}
      {/*      />*/}
      {/*    ) : null}*/}
      {/*  </span>*/}
      {/*</input>*/}
      {open && (
        <ul className={styles.ul}>
          {data &&
            data.map((item) => (
              <li
                className={styles.li}
                key={item.id}
                onClick={() => {
                  setItem(item.month);
                  openMenu();
                }}
              >
                {item.month}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
