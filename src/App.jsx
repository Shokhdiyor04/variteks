import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./css/main.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import { ProductCategory } from "./pages/ProductCategory";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/product-category/:name" element={<ProductCategory />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
