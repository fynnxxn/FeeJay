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
            <div className="section">
                <div className="container heading-wrap">
                    <h1>Checkout</h1>
                    <div className="paragraph-bigger bigger-light">
                        Order summary
                    </div>
                </div>
                    {orderSuccess ? (
                        <p className="success-message">✅ Order was successfull! You will be redirected...</p>
                    ) : (
                        <div className="checkout-container">
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
                                Complete order
                            </button>
                        </div>
                    )}
            </div>

        </div>
    );
};

export default CheckoutPage;
