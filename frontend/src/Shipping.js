import React from "react";
import "./App.css";

function About() {
    return (
        <div className="about-us">
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
                            Shipping <br></br>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="main-heading-wrap">
                    <h1>Shipping</h1>
                </div>

                <div className="divider"></div>

                <div className="layout-grid main-paragraph-wrap">
                    <p id="left" className="paragraph-light">
                       Products will not get shipped. This is just an funny project.
                    </p>
                    
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
                            <a href="/shipping" className="footer-link">Shipping</a>
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

export default About;
