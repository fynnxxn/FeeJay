import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./HomePage";
import Products from "./Products";
import ProductDetail from "./ProductDetail";
import CategoryProducts from "./CategoryProducts";
import CartPage from "./CartPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} /> 
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/products/category/:category" element={<CategoryProducts />} />
                <Route path="/cart" element={<CartPage/>} />
                <Route path="/checkout" element={<CheckoutPage cart={cart} />} />
            </Routes>
        </Router>
    );
}

export default App;
