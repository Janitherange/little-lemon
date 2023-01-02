import styles from "./About.module.css"
import cooking from "../../assets/cooking.jpg"
import salad from "../../assets/salad.jpg"

const About = () => {
    return (
        <section className={styles.section}>
            <article className={styles.article}>
                <h1 className={styles.h1}>Little Lemon</h1>
                <h2 className={styles.h2}>Chicago</h2>
                <p className={styles.p}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent odio leo, dapibus id sollicitudin
                    ac, suscipit sed elit. Ut vulputate leo vel egestas volutpat. Pellentesque lacinia tristique ipsum,
                    ut elementum tortor sodales ut.
                </p>
            </article>
            <aside className={styles.aside}>
                <figure className={styles.figure1}>
                    <img className={styles.img} src={salad} alt="cooking"/>
                </figure>
                <figure className={styles.figure2}>
                    <img className={styles.img} src={cooking} alt="salad"/>
                </figure>
            </aside>
        </section>
    )
}

export default About