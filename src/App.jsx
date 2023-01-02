import './App.css'
import Navigation from "./components/Navigation/Navigation.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import Highlights from "./components/Highlights/Highlights.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";
import About from "./components/About/About.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {

    return (
        <>
            <Navigation/>
            <main>
                <HeroSection/>
                <Highlights/>
                <Testimonials/>
                <About/>
            </main>
            <Footer/>
        </>
    )
}

export default App
