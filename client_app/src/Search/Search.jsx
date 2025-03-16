import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';
import './Search.css';

function Search() {
    const [page, setPage] = useState(1);
    const [showLoad, setShowLoad] = useState(true);

    const sampleProducts = [
        { id: 1, name: 'Sample Product 1', image: 'https://via.placeholder.com/200', price: '500,000 VNĐ' },
        { id: 2, name: 'Sample Product 2', image: 'https://via.placeholder.com/200', price: '700,000 VNĐ' },
        { id: 3, name: 'Sample Product 3', image: 'https://via.placeholder.com/200', price: '900,000 VNĐ' }
    ];

    return (
        <div className="content-wraper pt-60 pb-60">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
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
                            <div className="row">
                                <div className="col">
                                    <InfiniteScroll
                                        style={{ overflow: 'none' }}
                                        dataLength={sampleProducts.length}
                                        next={() => setPage(page + 1)}
                                        hasMore={true}
                                        loader={showLoad ? <div className="lds-roller"><div></div><div></div></div> : <h4 className="text-center" style={{ paddingTop: '3rem', color: '#FED700' }}>Yay! You have seen it all</h4>}
                                    >
                                        {sampleProducts.map(value => (
                                            <div className="row product-layout-list" key={value.id}>
                                                <div className="col-lg-3 col-md-5">
                                                    <div className="product-image">
                                                        <Link to="#">
                                                            <img src={value.image} alt="Product" />
                                                        </Link>
                                                        <span className="sticker">New</span>
                                                    </div>
                                                </div>
                                                <div className="col-lg-5 col-md-7">
                                                    <div className="product_desc">
                                                        <h4><a className="product_name" href="#">{value.name}</a></h4>
                                                        <div className="price-box">
                                                            <span className="new-price">{value.price}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </InfiniteScroll>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;
