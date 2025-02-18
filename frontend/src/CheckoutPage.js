import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";

const CheckoutPage = () => {
    const { cart, clearCart } = useCart();
    const navigate = useNavigate();

    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [orderSuccess, setOrderSuccess] = useState(false);

    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handleCheckout = async() => {
        const orderData = {
            firstname,
            lastname,
            street,
            city,
            article: cart.map(item => item.name), // Artikel als Array
            quantity: cart.map(item => item.quantity) // Mengen als Array
        };
    
        try {
            const response = await fetch("http://localhost:8080/checkout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(orderData)
            });
    
            const data = await response.json();
            if (response.ok) {
                setOrderSuccess(true);
                clearCart();
                setTimeout(() => navigate("/"), 2000);
            } else {
                alert("Fehler: " + data.message);
            }
        } catch (error) {
            console.error("Fehler beim Senden der Bestellung:", error);
            alert("Fehler beim Senden der Bestellung!");
        }
    };

    return (
        <div className="checkout-page">
            {/* Navigation */}
            <div className="navigation-items">
                <a href="/" className="logo-link nav-brand" aria-label="home">
                    <img src="/logo.png" width="65" alt="logo" />
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

            {/* Checkout Container */}
            <div className="section">
                <div className="container heading-wrap">
                    <h1>Checkout</h1>
                    <div className="paragraph-bigger bigger-light">
                        Order summary
                    </div>
                </div>
                    {orderSuccess ? (
                        <p className="success-message">✅ Bestellung erfolgreich! Du wirst weitergeleitet...</p>
                    ) : (
                        <div className="checkout-container">
                            {/* Bestellübersicht */}
                            <div className="divider dark-divider checkout-divider"></div>
                            <ul className="checkout-list">
                                {cart.map((item) => (
                                    <li key={item.id} className="checkout-item">
                                        <div>{item.name} - {item.quantity} x {item.price} EUR</div>
                                    </li>
                                ))}
                            </ul>
                            <div className="divider dark-divider checkout-divider"></div>
                            <h3 className="total-price checkout"> Total: {totalPrice.toFixed(2)} EUR</h3> 

                            {/* Lieferadresse */}
                            <h3>Delivery adress</h3>
                            <div className="checkout-adress-input">
                                <input 
                                    type="text" 
                                    placeholder="First Name" 
                                    value={firstname} 
                                    onChange={(e) => setFirstName(e.target.value)} 
                                    className="checkout-input"
                                />
                                <input 
                                    type="text" 
                                    placeholder="Last Name" 
                                    value={lastname} 
                                    onChange={(e) => setLastName(e.target.value)} 
                                    className="checkout-input"
                                />

                                <input 
                                    type="text" 
                                    placeholder="Street" 
                                    value={street} 
                                    onChange={(e) => setStreet(e.target.value)} 
                                    className="checkout-input"
                                />
                                
                                <input 
                                    type="text" 
                                    placeholder="City" 
                                    value={city} 
                                    onChange={(e) => setCity(e.target.value)} 
                                    className="checkout-input"
                                />
                            </div>

                            <button 
                                onClick={handleCheckout} 
                                disabled={cart.length === 0 || !firstname || !lastname || !street || !city}
                                className="primary-button"
                            >
                                Bestellung abschließen
                            </button>
                        </div>
                    )}
            </div>

            {/* Footer */}
            <div className="section">
                <div className="container">
                    <div className="layout-grid footer">
                        <a href="/" id="logo-footer" className="logo-link inline-block" aria-label="home">
                            <img src="/logo.png" width="65" alt="logo" />
                        </a>

                        <div id="menu-top" className="label">Menu</div>
                        <div id="menu-content" className="links-section-footer">
                            <a href="/" className="footer-link">Home</a>
                            <a href="/products" className="footer-link">Products</a>
                            <a href="/contact" className="footer-link">Contact</a>
                            <a href="/about" className="footer-link">About</a>
                        </div>

                        <div id="help-top" className="label">Help</div>
                        <div id="help-content" className="links-section-footer">
                            <a href="/shipping" className="footer-link">Shipping</a>
                            <a href="/contact" className="footer-link">Returns</a>
                            <a href="/contact" className="footer-link">Product Care</a>
                        </div>

                        <div id="legal-top" className="label">Legal</div>
                        <div id="legal-content" className="links-section-footer">
                            <a href="/imprint" className="footer-link">Imprint</a>
                        </div>

                        <div id="follow-top" className="label">Follow</div>
                        <div id="follow-content" className="links-section-footer">
                            <a href="https://www.instagram.com/jamie.tsc/" className="footer-link">Instagram</a>
                            <a href="https://www.linkedin.com/in/jamie-jentsch-63308a28b/?originalSubdomain=de" className="footer-link">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
