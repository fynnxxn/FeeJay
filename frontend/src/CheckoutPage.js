import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CheckoutPage = ({ cart }) => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("credit-card");
    const navigate = useNavigate();

    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handleCheckout = () => {
        if (cart.length > 0 && name && address) {
            alert("Bestellung erfolgreich!");
            navigate("/");
        } else {
            alert("Bitte alle Felder ausfüllen!");
        }
    };

    return (
        <div className="checkout-page">
            <h2>Checkout</h2>
            
            <h3>Bestellübersicht</h3>
            <ul>
                {cart.map((item) => (
                    <li key={item.id}>{item.name} - {item.quantity} x {item.price}€</li>
                ))}
            </ul>
            <p><strong>Gesamtpreis:</strong> {totalPrice}€</p>

            <h3>Lieferadresse</h3>
            <input 
                type="text" 
                placeholder="Name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
            />
            <input 
                type="text" 
                placeholder="Adresse" 
                value={address} 
                onChange={(e) => setAddress(e.target.value)} 
            />

            <h3>Zahlungsmethode</h3>
            <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                <option value="credit-card">Kreditkarte</option>
                <option value="paypal">PayPal</option>
                <option value="bank-transfer">Banküberweisung</option>
            </select>

            <button 
                onClick={handleCheckout} 
                disabled={cart.length === 0}
            >
                Bestellung abschließen
            </button>
        </div>
    );
};

export default CheckoutPage;
