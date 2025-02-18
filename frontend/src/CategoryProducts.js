import { useEffect, useState } from "react";
import { useParams, useLocation} from "react-router-dom";
import axios from "axios";

function CategoryProducts() {
    const { category } = useParams(); // Holt den Kategorienamen aus der URL
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([])
    const location = useLocation();

    useEffect(() => {
        axios.get("http://localhost:8080/products")
            .then(response => {
                setProducts(response.data);
                const allCategories = [...new Set(response.data.map(product => product.category))];
                setCategories(allCategories);
            })
            .catch(error => console.error(error));
    }, []);

    const filteredProducts = category
        ? products.filter(product => product.category === category) : products; 

    return (
        <div className="filtered-products">

            <div className="section">
                <div className="container heading-wrap">
                    <h1>
                        Our Products
                    </h1>
                        <div className="store-categories-wrap">
                            <a href="/products" className={`products-category-link ${location.pathname === "/products" ? " current" : ""}`}>
                                All Products
                            </a>
                        <div className="dyn-list">
                            <div role="list" className="collection-list dyn-items">
                                {categories.length > 0 ? (
                                    categories.map(category => (
                                        <div key={category} role="listitem" className="dyn-items">
                                            <a href={`/products/category/${category}`} className={`products-category-link ${location.pathname === `/products/category/${category}` ? "current" : ""}`}>
                                                {category}
                                            </a>
                                        </div>
                                    ))
                                ) : (
                                    <p>Loading categories...</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="dyn-list">
                    <div role="list" className="collection-wrap dyn-items">
                        {filteredProducts.map(product => (
                            <div key={product.id} role="listitem" className="collection-item dyn-items">   
                                <a href={`/products/${product.id}`} className="product-image-wrap inline-block" style={{backgroundImage: `url(${product.imageUrl})`}}>
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

export default CategoryProducts;
