import React, { useState } from 'react';
import axios from 'axios';

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const requestData = {
            name: name,
            email: email,
            message: message,
        };

        axios.post('http://localhost:8080/contact', requestData)
            .then(response => {
                alert('Anfrage erfolgreich gesendet!');
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch(error => {
                console.error(error);
                alert('Fehler beim Senden der Anfrage!');
            });
    };

    return (
        <div className="contact">

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

            <div className="section">
                <div className="container heading-wrap">
                    <h1>
                        Contact us
                    </h1>
                    <div className="paragraph-bigger bigger-light">
                        Hey there, fill out this form
                    </div>
                </div>

                <div className="container">
                    <div className="contact-form-wrap form">
                        <form id="contact-form" name="contact-form" className="contact-form" onSubmit={handleSubmit}>
                            <div className="credentials-inputs-wrap">
                                <div className="contact-name-field-wrap">
                                    <label for="name">
                                        Name
                                    </label>
                                    <input 
                                        className="text-field contact-field input" 
                                        maxLength={256} 
                                        name="name" 
                                        placeholder="Enter your name" 
                                        type="text" 
                                        id="name" 
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="email-name-field-wrap">
                                    <label for="email">
                                        Email Adress
                                    </label>
                                    <input 
                                        className="text-field contact-field input" 
                                        maxLength={256} 
                                        name="email" 
                                        placeholder="Enter you email" 
                                        type="email" 
                                        id="email" 
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                            <label for>Message</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                placeholder="Enter your message" 
                                maxlength="5000" 
                                data-name="Field" 
                                class="text-field textarea contact-field input"
                                required
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                            <input type="submit" className="primary-button button" value="submit"></input>
                        </form>
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

export default ContactForm;