import Evolution from "./Componets/Evolution/Evolution";
import Features from "./Componets/Features/Features";
import Footer from "./Componets/Footer/Footer";
import Gallery from "./Componets/Gallery/Gallery";
import Home from "./Componets/Home/Home";
import Navbar from "./Componets/Navbar/Navbar";

const App = () => {
  return (
    <div className="bg-[#f9f9f9] overflow-x-hidden">
      <div className="">
        <Navbar />
        <Home />
      </div>
      <Evolution/>
      <Features/>
      <Gallery/>
      <Footer/>
    </div>
  );
};

export default App;
