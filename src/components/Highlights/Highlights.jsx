import Button from "../Button/Button.jsx";
import styles from "./Highlights.module.css"
import icon from "../../assets/icons8-delivery-bike-64.png"
import highlight1 from "../../assets/nadine-primeau--ftWfohtjNw-unsplash.jpg"
import highlight2 from "../../assets/aliona-gumeniuk-7sJMQ_amtiQ-unsplash.jpg"
import highlight3 from "../../assets/towfiqu-barbhuiya-yPYOG4_j6YI-unsplash.jpg"

const Highlights = () => {
    return (
        <div className={styles.container}>
            <section className={styles.sectionTop}>
                <h2 className={styles.h2}>This weeks specials!</h2>
                <div className={styles.center}>
                    <Button name="Online Menu" type="darkGold"/>
                </div>
            </section>
            <section className={styles.sectionBottom}>
                <article className={styles.article}>
                    <img className={styles.img} src={highlight1} alt="highlight 1"/>
                    <aside className={styles.aside}>
                        <div className={styles.row}>
                            <h3>Geek Salad</h3>
                            <span className={styles.span}>$12.99</span>
                        </div>
                        <p className={styles.p}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent odio leo, dapibus id sollicitudin ac, suscipit sed elit. Ut vulputate leo vel egestas volutpat. Pellentesque lacinia tristique ipsum, ut elementum tortor sodales ut.
                        </p>
                        <Button name="Order Delivery" icon={icon}/>
                    </aside>
                </article>
                <article className={styles.article}>
                    <img className={styles.img} src={highlight2} alt="highlight 2"/>
                    <aside className={styles.aside}>
                        <div className={styles.row}>
                            <h3>Geek Salad</h3>
                            <span className={styles.span}>$12.99</span>
                        </div>
                        <p className={styles.p}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent odio leo, dapibus id sollicitudin ac, suscipit sed elit. Ut vulputate leo vel egestas volutpat. Pellentesque lacinia tristique ipsum, ut elementum tortor sodales ut.
                        </p>
                        <Button name="Order Delivery" icon={icon}/>
                    </aside>
                </article>
                <article className={styles.article}>
                    <img className={styles.img} src={highlight3} alt="highlight 3"/>
                    <aside className={styles.aside}>
                        <div className={styles.row}>
                            <h3>Geek Salad</h3>
                            <span className={styles.span}>$12.99</span>
                        </div>
                        <p className={styles.p}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent odio leo, dapibus id sollicitudin ac, suscipit sed elit. Ut vulputate leo vel egestas volutpat. Pellentesque lacinia tristique ipsum, ut elementum tortor sodales ut.
                        </p>
                        <Button name="Order Delivery" icon={icon}/>
                    </aside>
                </article>
            </section>
        </div>
    )
}

export default Highlights