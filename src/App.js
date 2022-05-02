import "./App.css";
import Accordion from "./components/Accordion";
import Cards from "./components/Cards";
import HeroSection from "./components/HeroSection";
import Learn from "./components/Learn";

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
    </div>
  );
}

export default App;
