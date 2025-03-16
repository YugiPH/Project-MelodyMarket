import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home_Category() {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 3, slidesToScroll: 1 }
            },
            {
                breakpoint: 600,
                settings: { slidesToShow: 2, slidesToScroll: 2 }
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1, slidesToScroll: 1 }
            }
        ]
    };

    return (
        <div className="product-area pt-60 pb-50">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="li-product-tab">
                            <ul className="nav li-product-menu">
                                <li><a className="active" href="#"><span>Sale</span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Slider {...settings}>
                    {[1, 2, 3, 4].map((index) => (
                        <div className="col-lg-12 col_product" style={{ zIndex: '999', height: '30rem' }} key={index}>
                            <div className="single-product-wrap">
                                <div className="product-image">
                                    <img src="https://via.placeholder.com/200" alt="Product" />
                                    <span className="sticker">-10%</span>
                                </div>
                                <div className="product_desc">
                                    <div className="product_desc_info">
                                        <div className="product-review">
                                            <h5 className="manufacturer">
                                                <a href="#">Sample Product</a>
                                            </h5>
                                        </div>
                                        <div className="price-box">
                                            <del className="new-price">500,000 VNĐ</del>
                                            <span className="new-price" style={{ color: 'red' }}>450,000 VNĐ</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Home_Category;
