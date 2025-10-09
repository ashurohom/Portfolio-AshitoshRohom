import { i } from "framer-motion/client";
import Navbar from "./components/Navbar";
import AboutMe from "./sections/AboutMe";
import Experience from "./sections/Experience";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="bg-white text-blue-900">
      <Navbar />
      <Home />
      <AboutMe />
      <Projects />
      <Experience />
      <Education />
      <Contact />

      {/* Example sections for scroll testing 
      <section id="home" className="h-screen flex justify-center items-center">
         <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1> 
      </section>*/}

      {/* <section
        id="about"
        className="h-screen flex justify-center items-center bg-blue-50"
      >
        <h1 className="text-4xl font-semibold">About Me</h1>
      </section> */}
      
{/* Comment */}
    </div>
  );
}

export default App;
