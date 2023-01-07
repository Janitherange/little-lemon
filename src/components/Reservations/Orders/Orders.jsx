import styles from "./Orders.module.css";
import { useEffect, useState } from "react";

const Orders = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("reservation") || "[]");
    setData(data);
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>Reservations</h2>
      <section className={styles.section}>
        {data.length > 0 &&
          data.map((item, id) => (
            <div key={id} className={styles.detailsContainer}>
              <div className={styles.div}>
                <span className={styles.spanBold}>Gusts</span>
                <span className={styles.span}>{item.gusts}</span>
              </div>
              <div className={styles.div}>
                <span className={styles.spanBold}>Occasion</span>
                <span className={styles.span}>{item.occasion}</span>
              </div>
              <div className={styles.div}>
                <span className={styles.spanBold}>Date</span>
                <span className={styles.span}>{item.data}</span>
              </div>
              <div className={styles.div}>
                <span className={styles.spanBold}>Time</span>
                <span className={styles.span}>{item.time}</span>
              </div>
            </div>
          ))}
      </section>
      {data.length === 0 && (
        <span className={styles.spanBold}>No Reservations Available</span>
      )}
    </div>
  );
};

export default Orders;
