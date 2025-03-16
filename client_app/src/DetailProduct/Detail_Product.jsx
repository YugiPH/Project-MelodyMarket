import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from "react-bootstrap";

function Detail_Product() {
    const [count, set_count] = useState(1);
    const [size, set_size] = useState('S');
    const [modal, set_modal] = useState(false);
    const [star, set_star] = useState(1);
    const [comment, set_comment] = useState('');
    const [validation_comment, set_validation_comment] = useState(false);

    return (
        <div>
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="breadcrumb-content">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li className="active">Detail</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="content-wraper">
                <div className="container">
                    <div className="row single-product-area">
                        <div className="col-lg-5 col-md-6">
                            <div className="product-details-left">
                                <div className="product-details-images">
                                    <div className="lg-image">
                                        <img src="https://via.placeholder.com/300" alt="product" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-6">
                            <div className="product-details-view-content pt-60">
                                <div className="product-info">
                                    <h2>Sample Product</h2>
                                    <div className="price-box pt-20">
                                        <span className="new-price new-price-2">500,000 VNĐ</span>
                                    </div>
                                    <div className="product-desc">
                                        <p>Sample description for this product.</p>
                                    </div>
                                    <div className="product-variants">
                                        <div className="produt-variants-size">
                                            <label>Size</label>
                                            <select className="nice-select" onChange={(e) => set_size(e.target.value)}>
                                                <option value="S">S</option>
                                                <option value="M">M</option>
                                                <option value="L">L</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="single-add-to-cart">
                                        <div className="cart-quantity">
                                            <div className="quantity">
                                                <label>Quantity</label>
                                                <div className="cart-plus-minus">
                                                    <input className="cart-plus-minus-box" value={count} type="text" onChange={(e) => set_count(e.target.value)} />
                                                    <div className="dec qtybutton" onClick={() => set_count(count - 1)}><i className="fa fa-angle-down"></i></div>
                                                    <div className="inc qtybutton" onClick={() => set_count(count + 1)}><i className="fa fa-angle-up"></i></div>
                                                </div>
                                            </div>
                                            <button className="add-to-cart">Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detail_Product;
