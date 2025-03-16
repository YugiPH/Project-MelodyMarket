import React from "react";
import { Link } from "react-router-dom";
import Products from "./Component/Products";
import Pagination from "./Component/Pagination";
import Search from "./Component/Search";

function Shop() {
    return (
        <div>
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="breadcrumb-content">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li className="active">Shop</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="li-main-blog-page li-main-blog-details-page pt-60 pb-60 pb-sm-45 pb-xs-45">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 order-lg-1 order-2">
                            <div className="li-blog-sidebar-wrapper">
                                <div className="li-blog-sidebar">
                                    <div className="li-sidebar-search-form">
                                        <Search handler_Search={() => { }} />
                                    </div>
                                </div>
                                <div className="li-blog-sidebar pt-25">
                                    <h4 className="li-blog-sidebar-title">All Product</h4>
                                    <ul className="li-blog-archive">
                                        <li>
                                            <Link to="/shop/all">All</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-9 order-1 order-lg-2">
                            <div className="shop-top-bar">
                                <div className="product-select-box">
                                    <div className="product-short">
                                        <p>Sort By:</p>
                                        <select className="nice-select">
                                            <option value="trending">Relevance</option>
                                            <option value="rating">Price (Low &gt; High)</option>
                                            <option value="rating">Price (High &gt; Low)</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="shop-products-wrapper">
                                <div className="tab-content">
                                    <div id="grid-view" className="tab-pane active" role="tabpanel">
                                        <div className="product-area shop-product-area">
                                            <Products products={[]} />
                                        </div>
                                    </div>

                                    <div className="paginatoin-area">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <p>Showing 0 of 0 items</p>
                                            </div>
                                            <Pagination pagination={{}} handlerChangePage={() => { }} totalPage={1} />
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

export default Shop;
