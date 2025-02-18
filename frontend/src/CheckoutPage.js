import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";

const CheckoutPage = () => {
    const { cart, clearCart } = useCart();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("credit-card");
    const [orderSuccess, setOrderSuccess] = useState(false);

    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handleCheckout = () => {
        if (cart.length > 0 && name && address) {
            setOrderSuccess(true);
            clearCart();
            setTimeout(() => navigate("/"), 2000);
        } else {
            alert("Bitte alle Felder ausfüllen!");
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
                <div className="container">
                    <h2 className="checkout-heading">Checkout</h2>

                    {orderSuccess ? (
                        <p className="success-message">✅ Bestellung erfolgreich! Du wirst weitergeleitet...</p>
                    ) : (
                        <div className="checkout-container">
                            {/* Bestellübersicht */}
                            <h3>Bestellübersicht</h3>
                            <ul className="checkout-list">
                                {cart.map((item) => (
                                    <li key={item.id} className="checkout-item">
                                        <span>{item.name} - {item.quantity} x {item.price}€</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="total-price"><strong>Gesamtpreis:</strong> {totalPrice.toFixed(2)}€</p>

                            {/* Lieferadresse */}
                            <h3>Lieferadresse</h3>
                            <input 
                                type="text" 
                                placeholder="Name" 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                                className="checkout-input"
                            />
                            <input 
                                type="text" 
                                placeholder="Adresse" 
                                value={address} 
                                onChange={(e) => setAddress(e.target.value)} 
                                className="checkout-input"
                            />

                            {/* Zahlungsmethode */}
                            <h3>Zahlungsmethode</h3>
                            <select 
                                value={paymentMethod} 
                                onChange={(e) => setPaymentMethod(e.target.value)}
                                className="checkout-select"
                            >
                                <option value="credit-card">Kreditkarte</option>
                                <option value="paypal">PayPal</option>
                                <option value="bank-transfer">Banküberweisung</option>
                            </select>

                            <button 
                                onClick={handleCheckout} 
                                disabled={cart.length === 0 || !name || !address}
                                className="checkout-button"
                            >
                                Bestellung abschließen
                            </button>
                        </div>
                    )}
                </div>
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
};

export default CheckoutPage;
