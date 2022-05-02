import "./App.css";
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
    </div>
  );
}

export default App;
