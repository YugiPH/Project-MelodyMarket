import React from 'react';

function Pagination() {
    return (
        <ul className="pagination-box">
            <li>
                <button className="btn btn-secondary Previous" style={{ cursor: 'pointer' }} disabled>
                    <i className="fa fa-chevron-left"></i>
                </button>
            </li>
            {[1, 2, 3, 4, 5].map((value) => (
                <li key={value} className={value === 1 ? "active" : ""}>
                    <a style={{ cursor: 'pointer' }}>{value}</a>
                </li>
            ))}
            <li>
                <button className="btn btn-secondary Next" style={{ cursor: 'pointer' }}>
                    <i className="fa fa-chevron-right"></i>
                </button>
            </li>
        </ul>
    );
}

export default Pagination;
