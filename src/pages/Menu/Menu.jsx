import { Fragment } from "react";
import Navigation from "../../components/Shared/Navigation/Navigation.jsx";
import Footer from "../../components/Shared/Footer/Footer.jsx";
import FoodMenuHero from "../../components/FoodMenu/Hero/FoodMenuHero.jsx";
import FoodMenu from "../../components/FoodMenu/Menu/FoodMenu.jsx";

const Menu = () => {
  return (
    <Fragment>
      <Navigation />
      <main>
        <FoodMenuHero />
        <FoodMenu />
      </main>
      <Footer />
    </Fragment>
  );
};

export default Menu;
