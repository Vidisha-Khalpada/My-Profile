import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Project from "./Components/Projects/Project";
import Skills from "./Components/Skills/Skills";
import Recognitions from "./Components/Recognitions/Recognitions";
import Education from "./Components/Education/Education";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import './App.css'
function App() {
  return (
    <div id="AppParent">
    <Navbar />
    <About />
    <Skills />
    <Project />
    <Recognitions />
    <Education />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;
