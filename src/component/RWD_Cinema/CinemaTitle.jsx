import React, { useState } from 'react';
import CinemaContent from './CinemaContent';

function CinemaTitle({logo, tenHeThongRap, lstCumRap}) {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className="cinema__item">
            <div className="cinema__logo" onClick={() => {
                setIsActive(!isActive);
            }}>
                <img src={logo} alt={tenHeThongRap} />
                <span className={isActive ? "logo__icon rotate" : "logo__icon"}>
                    <i class="fa fa-angle-up"></i>
                </span>
            </div>
            <div className={isActive ? "cinema__content show" : "cinema__content"}>
               {lstCumRap?.slice(0,8).map(({tenCumRap, diaChi, danhSachPhim}) => {
                   return <CinemaContent tenCumRap={tenCumRap} diaChi={diaChi} danhSachPhim={danhSachPhim} />
               })}
            </div>
        </div>
    );
}

export default CinemaTitle;