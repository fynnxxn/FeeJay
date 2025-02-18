import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    // Warenkorb aus localStorage wiederherstellen
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    // Warenkorb im localStorage speichern, wenn er sich ändert
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  //Artikel zum Warenkorb hinzufügen
  const addToCart = async (product, quantity) => {
    try {
      const response = await fetch("http://localhost:8080/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...product, quantity })
      });
      const updatedCart = await response.json();
      setCart(updatedCart);
    } catch (error) {
      console.error("Fehler beim Hinzufügen:", error);
    }
  };

  //Einzelnen Artikel aus dem Warenkorb löschen
  const removeFromCart = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/cart/${id}`, {
        method: "DELETE"
      });
      const updatedCart = await response.json();
      setCart(updatedCart);
    } catch (error) {
      console.error("Fehler beim Entfernen:", error);
    }
  };

  //Warenkorb vollständig löschen
  const clearCart = async () => {
    try {
      await fetch("http://localhost:8080/cart", { method: "DELETE" });
      setCart([]);
    } catch (error) {
      console.error("Fehler beim Leeren des Warenkorbs:", error);
    }
  };

  //Anzahl updaten => wird für die Preisberechnung benötigt später
  const updateQuantity = (id, quantity) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  //Zum berechnen der insgesamt im Warenkorb enthaltenden Artikel
  const getTotalItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }


  // Beim Laden des Shops den Warenkorb vom Server holen
  useEffect(() => {
    fetch("http://localhost:8080/cart")
      .then(res => res.json())
      .then(data => setCart(data))
      .catch(error => console.error("Fehler beim Laden des Warenkorbs:", error));
  }, []);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, updateQuantity, getTotalItemCount }}>
      {children}
    </CartContext.Provider>
  );
};
