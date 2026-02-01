import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Shop from "./components/Shop";
import RelatedProducts from "./components/RelatedProducts";


const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Shop />
      <RelatedProducts />
      <Footer />
    </div>
  );
};

export default App;
