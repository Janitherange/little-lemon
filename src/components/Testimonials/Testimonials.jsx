import styles from "./Testimonials.module.css"
import rating1 from "../../assets/may-gauthier-0J9l9xRyMSo-unsplash.jpg"
import rating2 from "../../assets/vince-veras-AJIqZDAUD7A-unsplash.jpg"
import rating3 from "../../assets/jurica-koletic-7YVZYZeITc8-unsplash.jpg"
import rating4 from "../../assets/ben-den-engelsen-YUu9UAcOKZ4-unsplash.jpg"

const Testimonials = () => {
    return(
            <div className={styles.container}>
                <section className={styles.sectionTop}>
                    <h2 className={styles.h2}>
                        Testimonials
                    </h2>
                </section>
                <section className={styles.sectionBottom}>
                    <article className={styles.article}>
                        <h3 className={styles.h3}>4.2</h3>
                        <div className={styles.div}>
                            <img className={styles.img} src={rating1} alt="john"/>
                            <span className={styles.span}>
                                <h4 className={styles.h4}>Jhon</h4>
                            </span>
                        </div>
                        <p className={styles.p}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent odio leo, dapibus id sollicitudin ac, suscipit sed elit. Ut vulputate leo vel egestas volutpat.
                        </p>
                    </article>
                    <article className={styles.article}>
                        <h3 className={styles.h3}>4.7</h3>
                        <div className={styles.div}>
                            <img className={styles.img} src={rating2} alt="julia"/>
                            <span className={styles.span}>
                                <h4 className={styles.h4}>Julia</h4>
                            </span>
                        </div>
                        <p className={styles.p}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent odio leo, dapibus id sollicitudin ac, suscipit sed elit. Ut vulputate leo vel egestas volutpat.
                        </p>
                    </article>
                    <article className={styles.article}>
                        <h3 className={styles.h3}>4.5</h3>
                        <div className={styles.div}>
                            <img className={styles.img} src={rating3} alt="steven"/>
                            <span className={styles.span}>
                                <h4 className={styles.h4}>Steven</h4>
                            </span>
                        </div>
                        <p className={styles.p}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent odio leo, dapibus id sollicitudin ac, suscipit sed elit. Ut vulputate leo vel egestas volutpat.
                        </p>
                    </article>
                    <article className={styles.article}>
                        <h3 className={styles.h3}>4.9</h3>
                        <div className={styles.div}>
                            <img className={styles.img} src={rating4} alt="ben"/>
                            <span className={styles.span}>
                                <h4 className={styles.h4}>Ben</h4>
                            </span>
                        </div>
                        <p className={styles.p}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent odio leo, dapibus id sollicitudin ac, suscipit sed elit. Ut vulputate leo vel egestas volutpat.
                        </p>
                    </article>
                </section>
            </div>
    )
}

export default Testimonials