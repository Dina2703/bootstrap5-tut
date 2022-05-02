import "./App.css";
import Cards from "./components/Cards";
import HeroSection from "./components/HeroSection";

import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Newsletter />
      <Cards />
    </div>
  );
}

export default App;
