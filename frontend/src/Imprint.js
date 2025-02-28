import React from "react";
import "./App.css";

function About() {
    return (
        <div className="about-us">
        
            <div className="intro-header">
                <div className="intro-content">
                    <div className="intro-text">
                        <div className="heading-jumbo">
                            Legal <br></br>
                        </div>
                        <div className="paragraph-bigger">
                            Imprint <br></br>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="main-heading-wrap">
                    <h1>Impressum</h1>
                </div>

                <div className="divider"></div>

                <div className="layout-grid main-paragraph-wrap">
                    <p id="left" className="paragraph-light">
                       Angaben gemäß § 5 TMG <br></br>
                       Fynnian Kolbe <br></br>
                       Schillerstraße 11b <br></br>
                       14624, Dallgow-Döberitz <br></br>
                       Deutschland
                    </p>
                    
                </div>
            </div>

        </div>
    );
}

export default About;
