import React from 'react';
import { NavLink } from 'react-router-dom';

function CinemaSubContent({ tenPhim, hinhAnh, maPhim }) {
    return (
        <div className="content">
            <div className="content__img">
                <img src={hinhAnh} alt={tenPhim} />
            </div>
            <div className="content__item">
                <p>{tenPhim}</p>
                <NavLink to={`/film_detail/${maPhim}`} className="button">
                    Chọn suất chiếu
                </NavLink>
            </div>
        </div>
    );
}

export default CinemaSubContent;