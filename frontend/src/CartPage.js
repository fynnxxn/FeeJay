import React from 'react';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';
import { useState } from "react";

function CartPage() {
    const { cart, removeFromCart, clearCart, updateQuantity } = useCart();
    const [quantities, setQuantites] = useState({});

    const handleQuantityChange = (id, value) => {
        const newQuantity = Math.max(1, parseInt(value) || 1);
        setQuantites(prev => ({ ...prev, [id]: newQuantity}));

        //Verzögertes Update, um möglicherweise zu viele Requests zu verhindern
        setTimeout(() => {
            updateQuantity(id, newQuantity);
        }, 500);
    };

    //Dynamische PReisberechnung
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="cart-page">
            <div className="navigation-items">
                <a href="/" className="logo-link nav-brand" aria-label="home">
                    <img src="/logo.png" width="65" alt="logo"></img>
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
            <h1>Your Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <ul>
                        {cart.map(item => (
                            <li key={item.id}>
                                <span>{item.name} - {item.price} EUR</span>

                                {/* Input für die Anzahl der Artikel */}
                                <input
                                    type="number"
                                    min="1"
                                    value={quantities[item.id] ?? item.quantity} //Falls leer wird die Anzahl aus cart genutzt
                                    onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                                    className="addtocartquantityinput text-field quantity-field"
                                />

                                <button onClick={() => removeFromCart(item.id)}>🗑</button>
                            </li>
                        ))}
                    </ul>
                    <h3>Total: {totalPrice.toFixed(2)} EUR</h3>
                    <button onClick={clearCart}>Clear Cart</button>
                </div>
            )}
            <Link to="/products">Continue Shopping</Link>
        </div>
    );
}

export default CartPage;
