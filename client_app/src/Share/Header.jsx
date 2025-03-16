import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Image/1.jpg";

function Header() {
    const [keyword_search, set_keyword_search] = useState("");

    return (
        <header>
            <div className="header-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4">
                            <li>
                                <span>Telephone Enquiry:</span>
                                <a href="#">(+123) 123 321 345</a>
                            </li>
                        </div>
                        <div className="col-lg-9 col-md-8">
                            <ul className="d-flex justify-content-end">
                                <li>
                                    <div className="ht-setting-trigger">
                                        <span data-toggle="collapse" data-target="#collapseExample">Setting</span>
                                    </div>
                                    <div className="ul_setting">
                                        <ul className="setting_ul collapse" id="collapseExample">
                                            <li className="li_setting">
                                                <Link to="/signin">Sign In</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header-middle pl-sm-0 pr-sm-0 pl-xs-0 pr-xs-0">
                <div className="container pb_header">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="logo pb-sm-30 pb-xs-30">
                                <Link to="/">
                                    <img src={logo} style={{ width: "13rem" }} alt="Logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-9 pl-0 ml-sm-15 ml-xs-15 d-flex justify-content-between">
                            <form action="/search" className="hm-searchbox">
                                <input
                                    type="text"
                                    placeholder="Enter your search key ..."
                                    value={keyword_search}
                                    onChange={(e) => set_keyword_search(e.target.value)}
                                />
                                <button className="li-btn" type="submit">
                                    <i className="fa fa-search"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="header-bottom header-sticky">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="hb-menu">
                                    <nav>
                                        <ul>
                                            <li><Link to="/">Home</Link></li>
                                            <li><Link to="/shop/all">Menu</Link></li>
                                            <li><Link to="/event">Event</Link></li>
                                            <li><Link to="/contact">Contact</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
