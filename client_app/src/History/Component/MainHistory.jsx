import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function MainHistory() {
    const [show_error, set_show_error] = useState(false);

    return (
        <div>
            {show_error && (
                <div className="modal_success">
                    <div className="group_model_success pt-3">
                        <div className="text-center p-2">
                            <i className="fa fa-bell fix_icon_bell" style={{ fontSize: '40px', color: '#fff', backgroundColor: '#f84545' }}></i>
                        </div>
                        <h4 className="text-center p-3" style={{ color: '#fff' }}>Cannot cancel a paid order!</h4>
                    </div>
                </div>
            )}

            <div className="breadcrumb-area">
                <div className="container">
                    <div className="breadcrumb-content">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li className="active">History</li>
                        </ul>
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
                                            <th>ID Invoice</th>
                                            <th>Name</th>
                                            <th>Phone</th>
                                            <th>Address</th>
                                            <th>Total</th>
                                            <th>Payment</th>
                                            <th>Status</th>
                                            <th>Cancel</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[1, 2, 3].map((index) => (
                                            <tr key={index}>
                                                <td><Link to="#">View</Link></td>
                                                <td>John Doe</td>
                                                <td>0123456789</td>
                                                <td>123 Main Street</td>
                                                <td>500,000 VNĐ</td>
                                                <td style={{ color: index % 2 === 0 ? 'green' : 'red' }}>{index % 2 === 0 ? 'Paid' : 'Unpaid'}</td>
                                                <td>{index === 1 ? 'Processing' : index === 2 ? 'Confirmed' : 'Finished'}</td>
                                                <td>{index === 1 ? <span className="text-danger" style={{ cursor: 'pointer' }}>X</span> : <i className="fa fa-check text-success" style={{ fontSize: '25px' }}></i>}</td>
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

export default MainHistory;
