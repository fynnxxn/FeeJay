import { useEffect, useState } from "react";
import axios from "axios";

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/products")
            .then(response => setProducts(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="products">
            <div className="section">
                <div className="container heading-wrap">
                    <h1>
                        Our Products
                    </h1>
                </div>
            </div>

            <div className="section">
                <div className="dyn-list">
                    <div role="list" className="collection-wrap dyn-items">
                        {products.map(product => (
                            <div key={product.id} role="listitem" className="collection-item dyn-items">
                                <a href={`/products/${product.id}`} className="product-image-wrap inline-block" style={{ backgroundImage: `url(${product.imageUrl})` }}>
                                    <div className="product-description">
                                        <div className="product-name-text">
                                            {product.name}
                                        </div>
                                        <div className="product-price-text">
                                            {product.price} EUR
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;
