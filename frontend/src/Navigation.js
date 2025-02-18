import React from "react";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";

const Navigation = () => {
    const { getTotalItemCount } = useCart();

    return (
        <div className="navigation-items">
            <Link to="/" className="logo-link nav-brand" aria-label="home">
                <img src="/logo.png" width="65" alt="logo" />
            </Link>
            <div className="navigation-wrap">
                <nav role="navigation" className="navigation-items-menu">
                    <Link to="/products" className="navigation-item link">Products</Link>
                    <Link to="/about" className="navigation-item link">About</Link>
                    <Link to="/contact" className="navigation-item link">Contact</Link>
                    <Link to="/cart" className="navigation-item navigation-item-cart link">
                        Cart {getTotalItemCount() > 0 && <span className="cart-badge">{getTotalItemCount()}</span>}
                    </Link>
                </nav>
            </div>
        </div>
    );
};

export default Navigation;
