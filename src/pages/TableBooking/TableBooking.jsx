import {Fragment} from "react";
import Navigation from "../../components/Shared/Navigation/Navigation.jsx";
import Footer from "../../components/Shared/Footer/Footer.jsx";
import BookingHero from "../../components/TableBooking/Hero/BookingHero.jsx";
import Booking from "../../components/TableBooking/Booking/Booking.jsx";

const TableBooking = () => {
    return(
            <Fragment>
                <Navigation/>
                <main>
                    <BookingHero/>
                    <Booking/>
                </main>
                <Footer/>
            </Fragment>
    )
}

export default TableBooking;
