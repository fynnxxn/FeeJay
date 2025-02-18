import React from "react";
import "./App.css"; // Falls du eine eigene CSS-Datei dafür hast

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
                    </nav>
                </div>
            </div>

            <div className="intro-header">
                <div className="intro-content">
                    <div className="intro-text">
                        <div className="heading-jumbo">
                            About Us <br></br>
                        </div>
                        <div className="paragraph-bigger">
                            Who are we? <br></br>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="main-heading-wrap">
                    <h1>This is our life story</h1>
                    <div className="paragraph-bigger bigger-light">
                        Beginning of an absolute cinema
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
                <div className="layout-grid about-pictures-wrap">
                    <div id="top" className="picture-placeholder about-top"></div>
                    <div id="middle" className="picture-placeholder about-middle"></div>
                    <div id="bottom" className="picture-placeholder about-bottom"></div>
                </div>
            </div>

            <div className="about-container">
                <div className="about-quote">
                    <h2>
                        Our Philosophy
                    </h2>
                    <div className="paragraph-bigger bigger-light">
                    We believe in sustainability and fairness. Shopping with us is a risk-free experience, no delays, no defects, just pure imagination.
                    </div>
                    <div className="paragraph-light">
                        ~ Jamie Jentsch and Fynnian Kolbe 
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

export default About;
