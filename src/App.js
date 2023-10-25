import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Servicesa from "./components/Services";
import Slide from "./components/Slide";
import Slide2 from "./components/Slide2";
import Slide3 from "./components/Slide3";
import Visi from "./components/Visi";
import "../src/App.css";
import "../src/Sektion.css";
import "../src/Intro.css";


function App() {
  return (
    <div>
      <Navbar />
    <Intro />
    <AboutMe />
    <Visi />
    <Servicesa />
    <Slide />
    <Slide2 />
    <Slide3 />
    </div>
  );
}

export default App;
