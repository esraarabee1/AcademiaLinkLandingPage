import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Feature from "./components/Feature";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Newsletter from "./components/Newsletter";
import Footer from "./shared/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Feature />
      <About />
      <Pricing />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
