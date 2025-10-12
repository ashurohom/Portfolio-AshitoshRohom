import Navbar from "./components/Navbar";
import AboutMe from "./sections/AboutMe";
import Experience from "./sections/Experience";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white text-blue-900 scroll-pt-16"> {/* Add scroll-pt-16 here */}
      <Navbar />
      
      <section id="home" className="scroll-mt-16">
        <Home />
      </section>
      
      <section id="about" className="scroll-mt-16">
        <AboutMe />
      </section>
      
      <section id="projects" className="scroll-mt-16">
        <Projects />
      </section>
      
      <section id="experience" className="scroll-mt-16">
        <Experience />
      </section>
      
      <section id="education" className="scroll-mt-16">
        <Education />
      </section>
      
      <section id="contact" className="scroll-mt-16">
        <Contact />
      </section>
      
      <Footer />
    </div>
  );
}

export default App;