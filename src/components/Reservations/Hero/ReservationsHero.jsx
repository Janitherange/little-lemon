import styles from "./ReservationsHero.module.css";
import heroImg from "../../../assets/banner.jpg";

const ReservationsHero = () => {
  return (
    <div className={styles.center}>
      <section className={styles.section}>
        <article className={styles.article}>
          <h1 className={styles.h1}>Little Lemon</h1>
          <h2 className={styles.h2}>Chicago</h2>
          <p className={styles.p}>
            We are family owned Mediterranean resturent, focused on traditional
            recipes served with a modern twist.
          </p>
        </article>
        <aside className={styles.aside}>
          <figure className={styles.figure}>
            <img className={styles.img} src={heroImg} alt="hero image" />
          </figure>
        </aside>
      </section>
    </div>
  );
};

export default ReservationsHero;
