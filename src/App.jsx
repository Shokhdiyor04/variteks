import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./css/main.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import ProductCategory from "./pages/ProductCategory";
import { ProductCategoryPage } from "./pages/ProductCategoryPages";
import ContactUs from "./pages/ContactUs";
import PersonnalManagement from "./pages/PersonnalManagement";
import AntiVaricoseProducts from "./pages/AntiVaricoseProducts";
import LiposuctionCorsets from "./pages/LiposuctionCorsets";
import AntiVaricoseProductsOrder from "./pages/AntiVaricoseProductsOrder";
import Certificate from "./pages/Certificate";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/product-category/:name" element={<ProductCategory />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/personnal-management" element={<PersonnalManagement />} />
        <Route path="/product-category" element={<ProductCategory />} />
        <Route
          path="/anti-varicose-products"
          element={<AntiVaricoseProducts />}
        />
        <Route path="/liposuction-corsets" element={<LiposuctionCorsets />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route
          path="/anti-varicose-products-order"
          element={<AntiVaricoseProductsOrder />}
        />
        <Route
          path="/product-category/:name"
          element={<ProductCategoryPage />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
