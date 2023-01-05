import { Fragment, useEffect, useState } from "react";
import Select from "../../Shared/Select/Select.jsx";
import styles from "./Booking.module.css";
import plus from "../../../assets/icons8-plus-math.png";
import minus from "../../../assets/icons8-subtract.png";
const Booking = () => {
  const [date, setDate] = useState("");
  const [timeArr, setTimeArr] = useState([]);
  const [selectedTime, setSelectedTime] = useState("");
  const [gustsCount, setGustsCount] = useState(0);

  const fetchData = (event) => {
    const data = event.target.value;
    setDate(event.target.value);
    const date = new Date(data);
    setTimeArr(fetchAPI(date));
  };

  return (
    <section className={styles.section}>
      <div className={styles.containerQuantity}>
        <div className={styles.h4Div}>
          <h4 className={styles.h4}>Gusts</h4>
        </div>
        <div className={styles.quantity}>
          <button
            type="button"
            className={styles.quantityButton}
            onClick={() => setGustsCount(gustsCount <= 0 ? 0 : gustsCount - 1)}
          >
            <img src={minus} alt="minus" className={styles.quantityIcon} />
          </button>
          <span className={styles.quantityValue}>{gustsCount}</span>
          <button
            type="button"
            className={styles.quantityButton}
            onClick={() => setGustsCount(gustsCount + 1)}
          >
            <img src={plus} alt="plus" className={styles.quantityIcon} />
          </button>
        </div>
      </div>
      <div className={styles.containerDate}>
        <div className={styles.date}>
          <div className={styles.h4Div}>
            <h4 className={styles.h4} onClick={fetchData}>
              Date
            </h4>
          </div>
          <input
            value={date}
            onChange={(event) => fetchData(event)}
            type="date"
            className={styles.dateInput}
          />
        </div>
      </div>
      <div className={styles.containerTime}>
        <div className={styles.h4Div}>
          <h4 className={styles.h4}>Time</h4>
        </div>
        {timeArr.length > 0 && (
          <div className={styles.timeWrapper}>
            {timeArr.map((time) => (
              <div className={styles.timeDiv}>
                <time
                  onClick={() => setSelectedTime(time)}
                  className={styles.time}
                  key={time}
                  style={
                    time === selectedTime
                      ? { backgroundColor: "#495e57", color: "#ffffff" }
                      : null
                  }
                >
                  {time}
                </time>
              </div>
            ))}
          </div>
        )}
        {timeArr.length === 0 && (
          <span className={styles.span}>Please Select a Date!</span>
        )}
      </div>
    </section>
  );
};

export default Booking;
