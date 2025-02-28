import React from "react";

const Footer = () => {
    return (
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
                        <a href="https://github.com/fynnxxn/FeeJay" className="footer-link">GitHub</a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;
