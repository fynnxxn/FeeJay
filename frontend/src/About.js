import React from "react";
import "./App.css";

function About() {
    return (
        <div className="about-us">

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

        </div>
    );
}

export default About;
