import { Navbar, Hero, About, Project, Contact, Footer } from "./components";
import "./App.css";
import ArrowTop from "./components/arrow-top/ArrowTop";

function App() {
  return (
    <div className="App">
      <ArrowTop />
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
