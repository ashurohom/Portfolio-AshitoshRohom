import Navbar from "./components/Navbar";
import Home from "./sections/Home";

function App() {
  return (
    <div className="bg-white text-blue-900">
      <Navbar />
      <Home />

      {/* Example sections for scroll testing */}
      <section id="home" className="h-screen flex justify-center items-center">
        {/* <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1> */}
      </section>

      <section
        id="about"
        className="h-screen flex justify-center items-center bg-blue-50"
      >
        <h1 className="text-4xl font-semibold">About Me</h1>
      </section>

      <section
        id="projects"
        className="h-screen flex justify-center items-center bg-blue-100"
      >
        <h1 className="text-4xl font-semibold">Projects</h1>
      </section>
      
      <section
        id="contact"
        className="h-screen flex justify-center items-center bg-blue-100"
      >
        <h1 className="text-4xl font-semibold">Contact</h1>
      </section>
    </div>
  );
}

export default App;
