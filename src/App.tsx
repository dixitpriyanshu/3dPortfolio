import Navbar from "./components/Navbar";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import FeatureCards from "./sections/FeatureCards";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import LogoShowcase from "./sections/LogoShowcase";
import ShowcaseSection from "./sections/ShowcaseSection";
import TechStack from "./sections/TechStack";

const App = () => (
  <>
    <Navbar />
    <Hero />
    <ShowcaseSection />
    <LogoShowcase />
    <FeatureCards />
    <Experience />
    <TechStack />
    {/* <Testimonials /> */}
    <Contact />
    <Footer />
  </>
);

export default App;
