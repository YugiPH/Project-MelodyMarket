import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Paypal from './Paypal';
import MoMo from './MoMo';
import { changeCount } from '../Redux/Action/ActionCount';
import './Checkout.css';

function Checkout() {
    const [carts, setCarts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [price, setPrice] = useState(0);
    const [redirect, setRedirect] = useState(false);
    const [orderID, setOrderID] = useState('');
    const [showError, setShowError] = useState(false);
    const [information, setInformation] = useState({ fullname: '', phone: '', address: '', email: '' });

    const { register, handleSubmit, errors } = useForm();
    const dispatch = useDispatch();
    const countChange = useSelector(state => state.Count.isLoad);

    useEffect(() => {
        const storedCarts = JSON.parse(localStorage.getItem('carts')) || [];
        setCarts(storedCarts);
        calculateTotal(storedCarts);
    }, []);

    const calculateTotal = (carts) => {
        let sumPrice = carts.reduce((sum, item) => sum + (item.count * item.price_product), 0);
        const storedCoupon = JSON.parse(localStorage.getItem('coupon'));
        if (storedCoupon) {
            setDiscount((sumPrice * storedCoupon.promotion) / 100);
            sumPrice -= (sumPrice * storedCoupon.promotion) / 100;
        }
        setTotalPrice(sumPrice + price);
    };

    const handleInputChange = (e) => {
        setInformation({ ...information, [e.target.name]: e.target.value });
    };

    const handleCheckout = (data) => {
        if (!information.fullname || !information.phone || !information.email) {
            setShowError(true);
            return;
        }
        localStorage.clear();
        setRedirect(true);
        dispatch(changeCount(countChange));
    };

    return (
        <div>
            {redirect && <Redirect to="/success" />}
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="breadcrumb-content">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li className="active">Checkout</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container pt-3 pb-3">
                <div className="row">
                    <div className="col-lg-6 col-12 pb-5">
                        <form onSubmit={handleSubmit(handleCheckout)}>
                            <div className="checkbox-form">
                                <h3>Billing Details</h3>
                                <div className="row">
                                    {['fullname', 'phone', 'address', 'email'].map((field, index) => (
                                        <div className="col-md-12" key={index}>
                                            <div className="checkout-form-list">
                                                <label>{field.charAt(0).toUpperCase() + field.slice(1)} <span className="required">*</span></label>
                                                <input
                                                    type={field === 'email' ? 'email' : 'text'}
                                                    name={field}
                                                    placeholder={`Enter ${field}`}
                                                    ref={register({ required: true })}
                                                    value={information[field]}
                                                    onChange={handleInputChange}
                                                />
                                                {errors[field] && <span style={{ color: 'red' }}>* {field} is required</span>}
                                            </div>
                                        </div>
                                    ))}
                                    <div className="col-md-12">
                                        <div className="order-button-payment">
                                            <input value="Place order" type="submit" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="your-order">
                            <h3>Your order</h3>
                            <div className="your-order-table table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr><th>Product</th><th>Total</th></tr>
                                    </thead>
                                    <tbody>
                                        {carts.map((item, index) => (
                                            <tr key={index}>
                                                <td>{item.name_product} × {item.count}</td>
                                                <td>{(item.price_product * item.count).toLocaleString()} VNĐ</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                    <tfoot>
                                        <tr><th>Shipping Cost</th><td>{price.toLocaleString()} VNĐ</td></tr>
                                        <tr><th>Discount</th><td>{discount.toLocaleString()} VNĐ</td></tr>
                                        <tr><th>Order Total</th><td><strong>{totalPrice.toLocaleString()} VNĐ</strong></td></tr>
                                    </tfoot>
                                </table>
                            </div>
                            <div className="payment-method">
                                <div className="payment-accordion">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5><a className="collapsed" data-toggle="collapse" data-target="#collapseThree">PayPal</a></h5>
                                        </div>
                                        <div id="collapseThree" className="collapse">
                                            <div className="card-body">
                                                {showError ? 'Please Check Information!' : <Paypal information={information} total={totalPrice} />}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header">
                                            <h5><a className="collapsed" data-toggle="collapse" data-target="#collapseMomo">MoMo</a></h5>
                                        </div>
                                        <div id="collapseMomo" className="collapse">
                                            <div className="card-body">
                                                {showError ? 'Please Check Information!' : <MoMo orderID={orderID} total={totalPrice} />}
                                            </div>
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

export default Checkout;
