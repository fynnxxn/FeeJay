import React, { useState } from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';

function CartPage() {
    const { cart, removeFromCart, updateQuantity } = useCart();
    const [quantities, setQuantities] = useState({});
    const navigate = useNavigate();

    const handleQuantityChange = (id, value) => {
        const newQuantity = Math.max(1, parseInt(value) || 1);
        setQuantities(prev => ({ ...prev, [id]: newQuantity }));

        setTimeout(() => {
            updateQuantity(id, newQuantity);
        }, 500);
    };

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="cart-page">
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

            {/* Warenkorb-Übersicht */}
            <div className="section">
                <div className="container heading-wrap">
                    <h1>Your Cart</h1>
                    <a href="/products" className="continue-shopping link">
                        Continue Shopping
                    </a>
                </div>

                

                    {cart.length === 0 ? (
                        <p className="empty-cart">Your cart is empty.</p>
                    ) : (
                        <div className="cart-container">
                            <div className="divider dark-divider"></div>
                            <ul className="cart-list">
                                {cart.map(item => (
                                    <li key={item.id} className="cart-item">
                                        <div className="cart-item-details">
                                            <div className="cart-item-name">{item.name}</div>
                                            <div className="cart-item-price">{item.price} EUR</div>
                                        </div>

                                        <div className="cart-item-controls">
                                            {/* Anzahl-Input */}
                                            <input
                                                type="number"
                                                min="1"
                                                value={quantities[item.id] ?? item.quantity}
                                                onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                                                className="cart-quantity-input"
                                            />
                                            <button className="remove-button" onClick={() => removeFromCart(item.id)}>🗑</button>
                                        </div>          
                                    </li>
                                ))}
                            </ul>

                            <div className='divider dark-divider'></div>

                            {/* Gesamtpreis & Aktionen */}
                            <div className="cart-summary">
                                <h3 className="total-price">Total: {totalPrice.toFixed(2)} EUR</h3>
                                <button
                                    className="primary-button"
                                    onClick={() => navigate("/checkout")}
                                    disabled={cart.length === 0}
                                >
                                    Zur Kasse
                                </button>
                            </div>
                        </div>
                    )}   
            </div>

            {/* Footer */}
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

export default CartPage;
