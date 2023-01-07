import { Fragment } from "react";
import Navigation from "../../components/Shared/Navigation/Navigation.jsx";
import Footer from "../../components/Shared/Footer/Footer.jsx";
import BookingHero from "../../components/TableBooking/Hero/BookingHero.jsx";
import Booking from "../../components/TableBooking/Booking/Booking.jsx";
import { ToastContainer } from "react-toastify";

const TableBooking = () => {
  return (
    <Fragment>
      <Navigation />
      <main>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <BookingHero />
        <Booking />
      </main>
      <Footer />
    </Fragment>
  );
};

export default TableBooking;
