import {Fragment} from "react";
import Navigation from "../../components/Shared/Navigation/Navigation.jsx";
import HeroSection from "../../components/Home/Hero/HeroSection.jsx";
import Highlights from "../../components/Home/Highlights/Highlights.jsx";
import Testimonials from "../../components/Home/Testimonials/Testimonials.jsx";
import About from "../../components/Home/About/About.jsx";
import Footer from "../../components/Shared/Footer/Footer.jsx";

const Home = () => {
  return(
          <Fragment>
              <Navigation/>
              <main>
                  <HeroSection/>
                  <Highlights/>
                  <Testimonials/>
                  <About/>
              </main>
              <Footer/>
          </Fragment>
  )
}

export default Home;
