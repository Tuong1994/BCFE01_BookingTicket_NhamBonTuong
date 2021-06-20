import React from 'react';

function Feature(props) {
    return (
        <div className="feature-wrapper">
            <div className="feature__card">
                <div className="feature__title">
                    <h4>Doanh thu</h4>
                </div>
                <div className="feature__rate">
                    <i class="fa fa-arrow-up"></i>
                    <span>30.56%</span>
                </div>
            </div>
            <div className="feature__card">
                <div className="feature__title">
                    <h4>Người dùng</h4>
                </div>
                <div className="feature__rate">
                    <i class="fa fa-arrow-up"></i>
                    <span>10.5%</span>
                </div>
            </div>
            <div className="feature__card">
                <div className="feature__title">
                    <h4>Lượng phim</h4>
                </div>
                <div className="feature__rate rate__down">
                    <i class="fa fa-arrow-down"></i>
                    <span>5.7%</span>
                </div>
            </div>
        </div>
    );
}

export default Feature;