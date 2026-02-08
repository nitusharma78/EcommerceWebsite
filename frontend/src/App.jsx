import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Shop from "./components/Shop";
import RelatedProducts from "./components/RelatedProducts";


const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/men" element={<Shop category="men" />} />
          <Route path="/women" element={<Shop category="women" />} />
          <Route path="/kids" element={<Shop category="kids" />} />
          <Route path="/home-decor" element={<Shop category="home" />} />
          <Route path="/beauty" element={<Shop category="beauty" />} />
          <Route path="/genz" element={<Shop category="genz" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
