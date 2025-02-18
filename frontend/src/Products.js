import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function Products() {
    const [products, setProducts] = useState([]);
    const location = useLocation();


    useEffect(() => {
        axios.get("http://localhost:8080/products")
            .then(response => setProducts(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="products">
            <div className="navigation-items">
                <a href="/" className="logo-link nav-brand" aria-label="home">
                    <img src="/logo.png" width="65" alt="logo"></img>
                </a>
                <div className="navigation-wrap">
                    <nav role="navigation" className="navigation-items-menu">
                        <a href="/products" className="navigation-item link">Products</a>
                        <a href="/about" className="navigation-item link">About</a>
                        <a href="/contact" className="navigation-item link">Contact</a>
                        <a href="/cart" className="navigation-item navigation-item-cart link">Cart</a>
                    </nav>
                </div>
            </div>

            <div className="section">
                <div className="container heading-wrap">
                    <h1>
                        Our Products
                    </h1>
                        <div className="store-categories-wrap">
                            <a href="/products" className={`products-category-link ${location.pathname === "/products" ? " current" : ""}`}>
                                All Products
                            </a>
                        <div className="dyn-list">
                            <div role="list" className="collection-list dyn-items">
                                {products.length > 0 ? (
                                    [...new Set(products.map(product => product.category))].map(category => (
                                        <div key={category} role="listitem" className="dyn-items">   
                                            <a href={`/products/category/${category}`} className="products-category-link">
                                                {category}
                                            </a>
                                        </div>
                                    ))
                                ) : (
                                    <p>Loading categories...</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="dyn-list">
                    <div role="list" className="collection-wrap dyn-items">
                        {products.map(product => (
                            <div key={product.id} role="listitem" className="collection-item dyn-items">   
                                <a href={`/products/${product.id}`} className="product-image-wrap inline-block" style={{backgroundImage: `url(${product.imageUrl})`}}>
                                    <div className="product-description">
                                        <div className="product-name-text">
                                            {product.name}
                                        </div>
                                        <div className="product-price-text">
                                            {product.price} EUR
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <footer className="footer">
                <p>&copy; 2025 FeeJay. All rights reserved.</p>
            </footer>

        </div>
    );
}

export default Products;
