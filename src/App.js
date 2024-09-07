import "./App.css";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";
import Home from "./components/Home.js";
import Navbar from "./components/Navbar.js";
import Projects from "./components/Project.js";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
