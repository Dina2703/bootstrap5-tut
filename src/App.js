import "./App.css";
import Accordion from "./components/Accordion";
import Cards from "./components/Cards";
import HeroSection from "./components/HeroSection";
import InstuctorsSection from "./components/InstuctorsSection";
import Learn from "./components/Learn";
import MapAddress from "./components/MapAddress";

import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Newsletter />
      <Cards />
      <Learn />
      <Accordion />
      <InstuctorsSection />
      <MapAddress />
    </div>
  );
}

export default App;
