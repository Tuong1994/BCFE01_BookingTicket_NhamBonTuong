import React from 'react';
import { useSelector } from 'react-redux';
import CinemaTitle from './CinemaTitle';

function RWDCinema(props) {
    const {danhSachRapChieu} = useSelector(state => state.PhimReducer)

    return (
        <div className="rwd-cinema" id="cineplex">
            {danhSachRapChieu?.map(({logo, tenHeThongRap, lstCumRap }, index) => {
               return <CinemaTitle logo={logo} tenHeThongRap={tenHeThongRap} lstCumRap={lstCumRap}  key={index} />
            })}
        </div>
    );
}

export default RWDCinema;