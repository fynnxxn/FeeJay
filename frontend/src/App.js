import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./HomePage";
import Products from "./Products";
import ProductDetail from "./ProductDetail";
import CategoryProducts from "./CategoryProducts";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} /> 
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/products/category/:category" element={<CategoryProducts />} />
            </Routes>
        </Router>
    );
}

export default App;
