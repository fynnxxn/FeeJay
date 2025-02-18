import { useEffect, useState } from "react";
import { useParams, useLocation} from "react-router-dom";
import axios from "axios";

function CategoryProducts() {
    const { category } = useParams(); // Holt den Kategorienamen aus der URL
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([])
    const location = useLocation();

    useEffect(() => {
        axios.get("http://localhost:8080/products")
            .then(response => {
                setProducts(response.data);
                const allCategories = [...new Set(response.data.map(product => product.category))];
                setCategories(allCategories);
            })
            .catch(error => console.error(error));
    }, []);

    const filteredProducts = category
        ? products.filter(product => product.category === category) : products; 

    return (
        <div className="filtered-products">
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
                                {categories.length > 0 ? (
                                    categories.map(category => (
                                        <div key={category} role="listitem" className="dyn-items">
                                            <a href={`/products/category/${category}`} className={`products-category-link ${location.pathname === `/products/category/${category}` ? "current" : ""}`}>
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
                        {filteredProducts.map(product => (
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

            <div className="section">
                <div className="container">
                    <div className="layout-grid footer">
                        <a href="/" id="logo-footer" className="logo-link inline-block" aria-label="home">
                            <img src="/logo.png" width="65" alt="logo"></img>
                        </a>

                        <div id="menu-top" className="label">
                            menu
                        </div>
                        <div id="menu-content" className="links-section-footer">
                            <a href="/" className="footer-link">Home</a>
                            <a href="/products" className="footer-link">Products</a>
                            <a href="/contact" className="footer-link">Contact</a>
                            <a href="/about" className="footer-link">About</a>
                        </div>

                        <div id="help-top" className="label">
                            help
                        </div>
                        <div id="help-content" className="links-section-footer">
                            <a href="/contact" className="footer-link">Shipping</a>
                            <a href="/contact" className="footer-link">Returns</a>
                            <a href="/contact" className="footer-link">Product Care</a>
                        </div>

                        <div id="legal-top" className="label">
                            legal
                        </div>
                        <div id="legal-content" className="links-section-footer">
                            <a href="/imprint" className="footer-link">Imprint</a>
                        </div>

                        <div id="follow-top" className="label">
                            follow
                        </div>
                        <div id="follow-content" className="links-section-footer">
                            <a href="https://www.instagram.com/jamie.tsc/" className="footer-link">Instagram</a>
                            <a href="https://www.linkedin.com/in/jamie-jentsch-63308a28b/?originalSubdomain=de" className="footer-link">LinkedIn</a>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default CategoryProducts;
