import HeroSection from "../components/website/HeroSection";
import Services from "../components/website/Services";
import Testimonials from "../components/website/testimonials";

const HomeScreen = () => {
    return(
        <div className="min-h-screen mt-18">
        <HeroSection/>
        <Services/>
        <Testimonials/>
        </div>
    )
};

export default HomeScreen; //default export