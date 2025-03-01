import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./HomePage";
import Products from "./Products";
import ProductDetail from "./ProductDetail";
import About from "./About";
import Contact from "./Contact";
import CartPage from "./CartPage";
import CheckoutPage from "./CheckoutPage";
import Imprint from "./Imprint";
import Shipping from "./Shipping";
import Navigation from "./Navigation";
import Footer from "./Footer";

function App() {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<HomePage />} /> 
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cart" element={<CartPage/>} />
                <Route path="/checkout" element={<CheckoutPage/>} />
                <Route path="/imprint" element={<Imprint/>} />
                <Route path="/shipping" element={<Shipping/>} />
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
