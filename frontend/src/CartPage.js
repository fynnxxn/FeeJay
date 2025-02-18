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

        </div>
    );
}

export default CartPage;
