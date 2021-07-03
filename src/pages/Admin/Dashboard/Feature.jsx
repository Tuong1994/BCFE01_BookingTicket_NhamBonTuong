import React from 'react';

function Feature(props) {
    return (
        <div className="feature">
            <div className="feature__card feature__card-1">
                <div className="feature__title">
                    <h5>Doanh thu</h5>
                    <p>436.000.000 +</p>
                </div>
                <div className="feature__logo">
                    <i class="fa fa-dollar-sign"></i>
                </div>
            </div>
            <div className="feature__card feature__card-2">
                <div className="feature__title">
                    <h5>Người dùng</h5>
                    <p>1.055 +</p>
                </div>
                <div className="feature__logo">
                    <i class="fa fa-users"></i>
                </div>
            </div>
            <div className="feature__card feature__card-3">
                <div className="feature__title">
                    <h5>Cụm rạp chiếu</h5>
                    <p>06</p>
                </div>
                <div className="feature__logo">
                    <i class="fa fa-theater-masks"></i>
                </div>
            </div>
            <div className="feature__card feature__card-4">
                <div className="feature__title">
                    <h5>Phim</h5>
                    <p>51 +</p>
                </div>
                <div className="feature__logo">
                    <i class="fa fa-film"></i>
                </div>
            </div>
        </div>
    );
}

export default Feature;