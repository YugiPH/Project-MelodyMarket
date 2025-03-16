import React from 'react';
import './Event.css';

function DetailEvent() {
    return (
        <div>
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="breadcrumb-content">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li className="active">Event</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container" style={{ marginTop: '3rem' }}>
                <h1 className="h4_event">Sample Event CÙNG FEAR OF GOD!!!</h1>
                <div style={{ marginTop: '2rem' }}>
                    <a className="a_event">Khuyến mãi</a>
                </div>
                <div style={{ marginTop: '2rem' }}>
                    <span style={{ fontSize: '1.2rem', color: '#646464', fontWeight: 'bold' }}>Cơ hội nhận ngay phiếu giảm giá đơn hàng của FEAR OF GOD!!!</span>
                    <br />
                    <span style={{ fontSize: '1.05rem' }}>Chỉ cần bạn ghé ngay FEAR OF GOD và mua đơn hàng sẽ được giảm giá theo mã code dưới đây:</span>
                    <li style={{ fontSize: '1.05rem' }}>Mã Code: <i style={{ color: 'red' }}>SAMPLECODE123</i></li>
                    <li style={{ fontSize: '1.05rem' }}>Còn lại: <i style={{ color: 'red' }}>10</i></li>
                    <span style={{ fontSize: '1.05rem' }}>Bạn sẽ nhập mã code vào ô APPLY COUPON trong giỏ hàng của mình.</span>
                    <br />
                    <span style={{ fontSize: '1.05rem' }}>Lưu ý: <i style={{ color: 'red' }}>Mỗi mã code chỉ sử dụng được 1 lần.</i></span>
                </div>
                <div style={{ padding: '3rem 0' }}>
                    <img style={{ width: '100%' }} src="https://cdn.tgdd.vn/hoi-dap/1321785/banner-la-gi-khac-gi-voi-poster-cach-de-thiet-ke-mot%20(2).jpg" alt="Event" />
                </div>
            </div>
        </div>
    );
}

export default DetailEvent;
