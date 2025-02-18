import React from "react";
import "./App.css";

function About() {
    return (
        <div className="about-us">

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

        </div>
    );
}

export default About;
