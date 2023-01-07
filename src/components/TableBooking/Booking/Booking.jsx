import { useState } from "react";
import styles from "./Booking.module.css";
import plus from "../../../assets/icons8-plus-math.png";
import minus from "../../../assets/icons8-subtract.png";
import Select from "../../Shared/Select/Select.jsx";
import { toast } from "react-toastify";
const Booking = () => {
  const [date, setDate] = useState("");
  const [timeArr, setTimeArr] = useState([]);
  const [selectedTime, setSelectedTime] = useState("");
  const [gustsCount, setGustsCount] = useState(0);
  const [days, setDays] = useState({
    day1: "",
    day2: "",
    day3: "",
    day4: "",
    day5: "",
  });
  const [selectedOccasion, setSelectedOccasion] = useState("");

  const fetchData = (event) => {
    const data = event.target.value;
    setDate(event.target.value);
    const date = new Date(data);
    setTimeArr(fetchAPI(date));

    const day1 = new Date();
    day1.setDate(date.getDate() - 2);

    const day2 = new Date();
    day2.setDate(date.getDate() - 1);

    const day3 = new Date();
    day3.setDate(date.getDate());

    const day4 = new Date();
    day4.setDate(date.getDate() + 1);

    const day5 = new Date();
    day5.setDate(date.getDate() + 2);

    setDays({
      day1: getShortDay(day1.getDay()),
      day2: getShortDay(day2.getDay()),
      day3: getShortDay(day3.getDay()),
      day4: getShortDay(day4.getDay()),
      day5: getShortDay(day5.getDay()),
    });
  };

  const getShortDay = (day) => {
    switch (day) {
      case 1:
        return "Mon";
      case 2:
        return "Thu";
      case 3:
        return "Wed";
      case 4:
        return "Thu";
      case 5:
        return "Fri";
      case 6:
        return "Sat";
      case 0:
        return "Sun";
      default:
        return "";
    }
  };

  const reset = () => {
    setDate("");
    setSelectedTime("");
    setGustsCount(0);
    setTimeArr([]);
  };

  const occasion = ["Birthday", "Anniversary"];

  const setSelectValue = (value) => {
    setSelectedOccasion(value);
  };

  const saveBooking = () => {
    if (
      date !== "" &&
      selectedTime !== "" &&
      gustsCount > 0 &&
      selectedOccasion !== "select"
    ) {
      toast.success("Reservation Successful!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      const previousData = JSON.parse(
        localStorage.getItem("reservation") || "[]"
      );
      const data = {
        date: date,
        time: selectedTime,
        gusts: gustsCount,
        occasion: selectedOccasion,
      };

      previousData.push(data);

      localStorage.setItem("reservation", JSON.stringify(previousData));
    } else {
      toast.error("Please Select All fields", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  // const saveBooking = () => {
  //   const previousData = JSON.parse(
  //     localStorage.getItem("reservation") || "[]"
  //   );
  //   const data = {
  //     date: date,
  //     time: selectedTime,
  //     gusts: gustsCount,
  //     occasion: selectedOccasion,
  //   };
  //
  //   previousData.push(data);
  //
  //   localStorage.setItem("reservation", JSON.stringify(previousData));
  // };

  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>Order Online</h2>
      <section className={styles.section}>
        <div className={styles.containerQuantity}>
          <h4 className={styles.h4}>Gusts</h4>
          <div className={styles.h4Div}>
            <div className={styles.quantity}>
              <button
                type="button"
                className={styles.quantityButton}
                onClick={() =>
                  setGustsCount(gustsCount <= 0 ? 0 : gustsCount - 1)
                }
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
        </div>
        <div className={styles.occasionContainer}>
          <h4 className={styles.h4}>Occasion</h4>
          <div className={styles.occasion}>
            <Select data={occasion} setSelectValue={setSelectValue} />
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
          {date !== "" && (
            <div className={styles.spanDateContainer}>
              <div className={styles.flexWrapper}>
                <div className={styles.spanDate}>
                  <p>{days.day1}</p>
                  <p>{new Date(date).getDate() - 2}</p>
                </div>
                <div className={styles.spanDate}>
                  <p>{days.day2}</p>
                  <p>{new Date(date).getDate() - 1}</p>
                </div>
              </div>
              <div className={styles.flexWrapper}>
                <div className={styles.spanDateActive}>
                  <p>{days.day3}</p>
                  <p>{new Date(date).getDate()}</p>
                </div>
              </div>
              <div className={styles.flexWrapper}>
                <div className={styles.spanDate}>
                  <p>{days.day4}</p>
                  <p>{new Date(date).getDate() + 1}</p>
                </div>
                <div className={styles.spanDate}>
                  <p>{days.day5}</p>
                  <p>{new Date(date).getDate() + 2}</p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className={styles.containerTime}>
          <div className={styles.h4Div}>
            <h4 className={styles.h4}>Time</h4>
          </div>
          {timeArr.length > 0 && (
            <div className={styles.timeWrapper}>
              {timeArr.map((time) => (
                <div key={time} className={styles.timeDiv}>
                  <time
                    onClick={() => setSelectedTime(time)}
                    className={styles.time}
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
        <div>
          <div className={styles.buttonContainer}>
            <button
              className={styles.submitButton}
              onClick={() => {
                saveBooking();
              }}
            >
              Submit
            </button>
            <button className={styles.cancelButton} onClick={reset}>
              Cancel
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
