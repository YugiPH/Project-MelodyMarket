import React from 'react';
import { Link } from 'react-router-dom';

function Products() {
    const sampleProducts = [
        { id: 1, name: 'Sample Product 1', image: 'https://via.placeholder.com/200', price: '500,000 VNĐ' },
        { id: 2, name: 'Sample Product 2', image: 'https://via.placeholder.com/200', price: '700,000 VNĐ' },
        { id: 3, name: 'Sample Product 3', image: 'https://via.placeholder.com/200', price: '900,000 VNĐ' }
    ];

    return (
        <div className="row">
            {sampleProducts.map(product => (
                <div className="col-lg-4 col-md-4 col-sm-6 mt-40 animate__animated animate__zoomIn col_product" key={product.id}>
                    <div className="single-product-wrap">
                        <div className="product-image">
                            <Link to="#">
                                <img src={product.image} alt="Product" />
                            </Link>
                            <span className="sticker">New</span>
                        </div>
                        <div className="product_desc">
                            <div className="product_desc_info">
                                <div className="product-review">
                                    <h5 className="manufacturer">
                                        <a href="#">{product.name}</a>
                                    </h5>
                                </div>
                                <div className="price-box">
                                    <span className="new-price">{product.price}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Products;
