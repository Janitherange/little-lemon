import highlight1 from "../../../assets/nadine-primeau--ftWfohtjNw-unsplash.jpg";
import highlight2 from "../../../assets/aliona-gumeniuk-7sJMQ_amtiQ-unsplash.jpg";
import highlight3 from "../../../assets/towfiqu-barbhuiya-yPYOG4_j6YI-unsplash.jpg";
import highlight4 from "../../../assets/adam-bartoszewicz-fd5n2sZsV5g-unsplash.jpg";
import highlight5 from "../../../assets/jennifer-schmidt-MRHyv-hHxgk-unsplash.jpg";
import highlight6 from "../../../assets/junior-reis-XdNgE6NIHp4-unsplash.jpg";
import highlight7 from "../../../assets/thomas-tucker-MNtag_eXMKw-unsplash.jpg";
import highlight8 from "../../../assets/victoria-shes-UC0HZdUitWY-unsplash.jpg";
import highlight9 from "../../../assets/steve-tsang-OterGMpkdsM-unsplash.jpg";
import styles from "./FoodMenu.module.css";
const FoodMenu = () => {
  const data = [
    {
      id: 1,
      name: "Geek Salad",
      price: 12.99,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              odio leo, dapibus id sollicitudin ac, suscipit sed elit. Ut
              vulputate leo vel egestas volutpat. Pellentesque lacinia tristique
              ipsum, ut elementum tortor sodales ut.`,
      image: highlight1,
    },
    {
      id: 2,
      name: "Cheese Salad",
      price: 14.99,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              odio leo, dapibus id sollicitudin ac, suscipit sed elit. Ut
              vulputate leo vel egestas volutpat. Pellentesque lacinia tristique
              ipsum, ut elementum tortor sodales ut.`,
      image: highlight2,
    },
    {
      id: 3,
      name: "Beacon Salad",
      price: 24.99,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              odio leo, dapibus id sollicitudin ac, suscipit sed elit. Ut
              vulputate leo vel egestas volutpat. Pellentesque lacinia tristique
              ipsum, ut elementum tortor sodales ut.`,
      image: highlight3,
    },
    {
      id: 4,
      name: "Tofu",
      price: 34.99,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              odio leo, dapibus id sollicitudin ac, suscipit sed elit. Ut
              vulputate leo vel egestas volutpat. Pellentesque lacinia tristique
              ipsum, ut elementum tortor sodales ut.`,
      image: highlight4,
    },
    {
      id: 5,
      name: "Chicken Salad",
      price: 34.99,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              odio leo, dapibus id sollicitudin ac, suscipit sed elit. Ut
              vulputate leo vel egestas volutpat. Pellentesque lacinia tristique
              ipsum, ut elementum tortor sodales ut.`,
      image: highlight5,
    },
    {
      id: 6,
      name: "Burger",
      price: 34.99,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              odio leo, dapibus id sollicitudin ac, suscipit sed elit. Ut
              vulputate leo vel egestas volutpat. Pellentesque lacinia tristique
              ipsum, ut elementum tortor sodales ut.`,
      image: highlight6,
    },
    {
      id: 7,
      name: "Pizza",
      price: 34.99,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              odio leo, dapibus id sollicitudin ac, suscipit sed elit. Ut
              vulputate leo vel egestas volutpat. Pellentesque lacinia tristique
              ipsum, ut elementum tortor sodales ut.`,
      image: highlight7,
    },
    {
      id: 8,
      name: "BBQ",
      price: 34.99,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              odio leo, dapibus id sollicitudin ac, suscipit sed elit. Ut
              vulputate leo vel egestas volutpat. Pellentesque lacinia tristique
              ipsum, ut elementum tortor sodales ut.`,
      image: highlight8,
    },
    {
      id: 9,
      name: "Noodles",
      price: 34.99,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              odio leo, dapibus id sollicitudin ac, suscipit sed elit. Ut
              vulputate leo vel egestas volutpat. Pellentesque lacinia tristique
              ipsum, ut elementum tortor sodales ut.`,
      image: highlight9,
    },
  ];

  return (
    <div className={styles.container}>
      <section className={styles.sectionTop}>
        <h2 className={styles.h2}>This weeks specials!</h2>
      </section>
      <section className={styles.sectionBottom}>
        {data &&
          data.map((item) => (
            <article key={item.id} className={styles.article}>
              <img className={styles.img} src={item.image} alt={item.name} />
              <aside className={styles.aside}>
                <div className={styles.row}>
                  <h3>{item.name}</h3>
                  <span className={styles.span}>${item.price}</span>
                </div>
                <p className={styles.p}>{item.description}</p>
              </aside>
            </article>
          ))}
      </section>
    </div>
  );
};

export default FoodMenu;
