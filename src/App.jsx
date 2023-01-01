import './App.css'
import Navigation from "./components/Navigation/Navigation.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import Highlights from "./components/Highlights/Highlights.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";

function App() {

    return (
        <>
            <Navigation/>
            <main>
                <HeroSection/>
                <Highlights/>
                <Testimonials/>
            </main>
            <footer>

            </footer>
        </>
    )
}

export default App
