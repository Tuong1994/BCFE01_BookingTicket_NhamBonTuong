import React, { useState } from 'react';
import CinemaSubContent from './CinemaSubContent';

function CinemaContent({ tenCumRap, diaChi, danhSachPhim }) {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className="content__subtitle">
            <div className="subtitle__img" onClick={() => {
                setIsActive(!isActive)
            }}>
                <img src="../../img/rapChieu.png" alt={tenCumRap} />
                <div className="subtitle__info">
                    <p>{tenCumRap}</p>
                    <p>{diaChi}</p>
                </div>
            </div>
            <div className={isActive ? "subtitle__content show" : "subtitle__content"}>
                {danhSachPhim?.slice(0, 10).map(({ tenPhim, hinhAnh, maPhim }, index) => {
                    return <CinemaSubContent tenPhim={tenPhim} hinhAnh={hinhAnh} maPhim={maPhim} key={index} />
                })}
            </div>
        </div>
    );
}

export default CinemaContent;