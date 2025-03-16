import React from 'react';
import { Link } from 'react-router-dom';
import './History.css';

function DetailHistory() {
    return (
        <div>
            <div className="container" style={{ paddingTop: '3rem' }}>
                <h1>Order Details</h1>
                <ul>
                    <li style={{ fontSize: '1.1rem' }}>ID Invoice: <span>123456</span></li>
                    <li style={{ fontSize: '1.1rem' }}>Phone: <span>0123456789</span></li>
                    <li style={{ fontSize: '1.1rem' }}>Fullname: <span>John Doe</span></li>
                    <li style={{ fontSize: '1.1rem' }}>Total: <span>500,000 VNĐ</span></li>
                    <li style={{ fontSize: '1.1rem' }}>Feeship: <span>30,000 VNĐ</span></li>
                    <li style={{ fontSize: '1.1rem' }}>Payment: <span>Cash on Delivery</span></li>
                </ul>
                <div className="group_box_status" style={{ marginTop: '3rem' }}>
                    <div className="d-flex justify-content-center">
                        <div className="group_status_delivery d-flex justify-content-around">
                            <div className="detail_status_delivery">
                                <div className="w-100 d-flex justify-content-center">
                                    <div className="bg_status_delivery_active"></div>
                                </div>
                                <a className="a_status_delivery">Processing</a>
                            </div>
                            <div className="detail_status_delivery">
                                <div className="w-100 d-flex justify-content-center">
                                    <div className="bg_status_delivery"></div>
                                </div>
                                <a className="a_status_delivery">Confirmed</a>
                            </div>
                            <div className="detail_status_delivery">
                                <div className="w-100 d-flex justify-content-center">
                                    <div className="bg_status_delivery"></div>
                                </div>
                                <a className="a_status_delivery">Shipping</a>
                            </div>
                            <div className="detail_status_delivery">
                                <div className="w-100 d-flex justify-content-center">
                                    <div className="bg_status_delivery"></div>
                                </div>
                                <a className="a_status_delivery">Finished</a>
                            </div>
                        </div>
                    </div>
                    <div className="test_status d-flex justify-content-center">
                        <div className="hr_status_delivery"></div>
                    </div>
                </div>
            </div>
            <div className="Shopping-cart-area pt-60 pb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="table-content table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Name Product</th>
                                            <th>Price</th>
                                            <th>Count</th>
                                            <th>Size</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[1, 2, 3].map((index) => (
                                            <tr key={index}>
                                                <td><img src="https://via.placeholder.com/100" alt="Product" /></td>
                                                <td>Sample Product {index}</td>
                                                <td>200,000 VNĐ</td>
                                                <td>1</td>
                                                <td>M</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailHistory;
