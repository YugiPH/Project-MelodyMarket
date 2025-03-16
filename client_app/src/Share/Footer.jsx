import React from 'react';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-static-middle">
                <div className="container">
                    <div className="footer-logo-wrap pt-50 pb-35">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="footer-logo">
                                    <p className="info">
                                        We are a team of designers and developers that create high quality HTML Template & Woocommerce, Shopify Theme.
                                    </p>
                                </div>
                                <ul className="des">
                                    <li>
                                        <span>Address: </span>
                                        828 Sư Vạn Hạnh, Quận 10, TP.HCM
                                    </li>
                                    <li>
                                        <span>Phone: </span>
                                        <a href="#">0763557366</a>
                                    </li>
                                    <li>
                                        <span>Email: </span>
                                        <a href="mailto://tienkim9920@gmail.com">tienkim9920@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-6">
                                <div className="footer-block">
                                    <h3 className="footer-block-title">Product</h3>
                                    <ul>
                                        <li><a href="#">Prices drop</a></li>
                                        <li><a href="#">New products</a></li>
                                        <li><a href="#">Best sales</a></li>
                                        <li><a href="#">Contact us</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-6">
                                <div className="footer-block">
                                    <h3 className="footer-block-title">Our company</h3>
                                    <ul>
                                        <li><a href="#">Delivery</a></li>
                                        <li><a href="#">Legal Notice</a></li>
                                        <li><a href="#">About us</a></li>
                                        <li><a href="#">Contact us</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="footer-newsletter">
                                    <h4>Sign up to newsletter</h4>
                                    <form action="#" method="post" className="footer-subscribe-form">
                                        <div className="mc-form subscribe-form form-group">
                                            <input type="email" autoComplete="off" placeholder="Enter your email" />
                                            <button className="btn">Subscribe</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
