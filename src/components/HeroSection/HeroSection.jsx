import styles from "./HeroSection.module.css"
import Button from "../Button/Button.jsx";
import heroImg from "../../assets/banner.jpg"

const HeroSection = () => {
    return (
        <div className={styles.center}>
            <section className={styles.section}>
                <article className={styles.article}>
                    <h1 className={styles.h1}>Little Lemon</h1>
                    <h2 className={styles.h2}>Chicago</h2>
                    <p className={styles.p}>
                        We are family owned Mediterranean resturent, focused on traditional recipes served with a modern
                        twist.
                    </p>
                    <div>
                        <Button name="Reserve a Table" type="lightGold"/>
                    </div>
                </article>
                <aside>
                    <figure className={styles.figure}>
                        <img className={styles.img} src={heroImg} alt="hero image"/>
                    </figure>
                </aside>
            </section>
        </div>
    )
}

export default HeroSection;