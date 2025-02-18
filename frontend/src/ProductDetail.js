import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useCart } from "./CartContext";



function ProductDetail() {

    const {addToCart} = useCart();
    const { id } = useParams(); // Holt die ID aus der URL
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        axios.get(`http://localhost:8080/products/${id}`)
            .then(response => setProduct(response.data))
            .catch(error => setError("Produkt nicht gefunden"));
    }, [id]);

    if (error) return <h2>{error}</h2>;
    if (!product) return <h2>Lädt...</h2>;

    return (
        <div className="product-page">        
            <div className="section product-detail">
                <div className="product-image" style={{backgroundImage: `url(${product.imageUrl})`}}>
                </div>
                <div className="product-details-wrap">
                    <div className="product-detail-main-details">
                        <h1 className="product-detail-name"> 
                            {product.name} 
                        </h1>
                        <div className="product-detail-price">
                            {product.price} EUR
                        </div>
                        <div className="paragrpah-light">
                            {product.description}
                        </div>
                    </div>

                    <div className="divider dark-divider"></div>

                    <div className="product-informations">
                        <ul className="list-unstyled">
                            <li className="list-item">
                                <div className="paragraph-light">
                                    Shipping time
                                </div>
                                <div className="product-detail-unit-text">
                                    {product.shipping} Business days
                                </div>    
                            </li>
                            <li className="list-item">
                                <div className="paragraph-light">
                                    Weight
                                </div>
                                <div className="product-detail-unit-text">
                                    {product.weight} g
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="divider"></div>

                    <div className="add-to-cart">
                        <label for="quantity" className="quantity-field-label">
                            Quantity
                        </label>
                        <div className="product-detail-wrap">
                            <input 
                                type="number" 
                                pattern="^[0-9]" 
                                inputMode="numeric" 
                                id="quantity" 
                                name="add-to-cart-quantity-input" 
                                min="1" 
                                className="addtocartquantityinput text-field quantity-field" 
                                value={quantity}
                                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                            />
                            <input 
                                type="submit" 
                                data-loading-text="Adding to cart..." 
                                className="addtocartbutton primary-button add-to-cart-button" 
                                value="Add to cart"
                                onClick={() => {
                                    addToCart(product, quantity);
                                    console.log('Zum Warenkorb hinzugefügt: ', product, quantity);
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ProductDetail;
