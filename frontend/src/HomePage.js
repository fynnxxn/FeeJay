import React, { useEffect, useState } from "react";
import axios from "axios";
import './App.css';

function HomePage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/products")
            .then(response => setProducts(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="home-page">
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
            
            <div className="intro-header">
                <div className="intro-content">
                    <div className="intro-text">
                        <div className="heading-jumbo">
                            FEEJAY <br></br>
                        </div>
                        <div className="paragraph-bigger">
                            Simple Products for a better life <br></br>
                        </div>
                        <a href="/products" className="secondary-button inline-block">
                            <div>Explore</div>
                        </a>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="main-heading-wrap">
                    <h1>FeeJay</h1>
                    <div className="paragraph-bigger bigger-light">
                        The only shop you need for life changing essentials <br></br>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="layout-grid main-paragraph-wrap">
                    <p id="left" className="paragraph-light">
                        The brand FeeJay was born in 2024 when two students had to develop a website for a university project. The idea came straight to our head. We thought that a simple E-Commerce Store cant be this hard, but thats wrong, it is indeed very hard.
                    </p>
                    <p id="right" className="paragraph-light">
                        But even though Jamie and Fynnian are not the smartest and students in the class, they want to work on project together and with a little bit of practice we hope that this will website scores 40 points in the module "Webprogrammierung". Thank You!
                    </p>
                </div>
            </div>
            
            <div className="container">
                <div className="products-heading">
                    <h3>Featured Products</h3>
                    <div className="paragraph bigger bigger-light"> 
                        Check out new and popular products
                    </div>
                </div>
            </div>

            <div className="product-list">
                <div role="list" className="collection-wrap product-list">
                    {products.slice(0, 3).map(product => (
                        <div key={product.id} role="listitem" className="collection-item product-list">   
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

            <footer className="footer">
                <p>&copy; 2025 FeeJay. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default HomePage;
