import { Fragment } from "react";
import Navigation from "../../components/Shared/Navigation/Navigation.jsx";
import Footer from "../../components/Shared/Footer/Footer.jsx";
import ReservationsHero from "../../components/Reservations/Hero/ReservationsHero.jsx";
import Orders from "../../components/Reservations/Orders/Orders.jsx";

const Reservations = () => {
  return (
    <Fragment>
      <Navigation />
      <main>
        <ReservationsHero />
        <Orders />
      </main>
      <Footer />
    </Fragment>
  );
};

export default Reservations;
