import React from 'react';
import './Event.css';
import { Link } from 'react-router-dom';
import Pagination from '../Shop/Component/Pagination';

function Event() {
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
                <div className="grid-container" style={{ padding: '2rem' }}>
                    {[1, 2, 3].map((index) => (
                        <div key={index} className="bg_event animate__animated animate__zoomIn col_product">
                            <div>
                                <div>
                                    <img style={{ width: '100%' }} src="https://cdn.tgdd.vn/hoi-dap/1321785/banner-la-gi-khac-gi-voi-poster-cach-de-thiet-ke-mot%20(2).jpg" alt="Event" />
                                </div>
                                <div style={{ padding: '1rem 1.2rem' }}>
                                    <h4 className="h4_event">Sample Event {index}</h4>
                                    <div style={{ marginTop: '2rem' }}>
                                        <a className="a_event">Khuyến mãi</a>
                                    </div>
                                    <div style={{ marginTop: '2rem' }}>
                                        <span style={{ fontSize: '1rem', color: 'gray' }}>Còn lại: <i style={{ color: '#fed700' }}>{10 - index} lần</i></span>
                                    </div>
                                    <hr />
                                    <div style={{ marginTop: '.5rem' }}>
                                        <span style={{ fontSize: '1rem', color: 'gray' }}>
                                            Cơ hội nhận nhiều ưu đãi khi mua sản phẩm tại shop của chúng tôi
                                        </span>
                                    </div>
                                    <div style={{ marginTop: '1rem' }} className="d-flex justify-content-center">
                                        <Link to="#" className="a_promotion">Xem Ngay</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="d-flex justify-content-center" style={{ padding: '2rem 0' }}>
                    <Pagination pagination={{}} handlerChangePage={() => { }} totalPage={1} />
                </div>
            </div>
        </div>
    );
}

export default Event;
