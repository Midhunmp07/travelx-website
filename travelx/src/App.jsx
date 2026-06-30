import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Destinations from "./components/Destinations";
import Packages from "./components/Packages";
import MoodFinder from "./components/MoodFinder";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Destinations />
      <Packages />
      <MoodFinder />
      <Contact />
      <Footer />
    </>
  );
}

export default App;