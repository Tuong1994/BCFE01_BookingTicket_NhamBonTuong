import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCinemaAction } from '../../../redux/action/PhimAction';
import Cinema from './Cinema';

function Cineplex(props) {
    const { danhSachRapChieu } = useSelector(state => state.PhimReducer);
    let dispatch = useDispatch();
    let [showCinema, setShowCinema] = useState("");   

    useEffect(() => {
        dispatch(getCinemaAction())
    }, [])

    return (
        <div className="cineplex__tabs" id="cineplex">
            <div className="tabs__title">
                {danhSachRapChieu?.map((cineplex, index) => {
                    return <div className={showCinema == index ? "title active-cineplex" : "title"} key={index} onClick={() => {
                        setShowCinema(index);
                    }}>
                        <img src={cineplex.logo} alt={cineplex.tenHeThongRap} />
                    </div>
                })}
            </div>
            <Cinema danhSachRapChieu={danhSachRapChieu} showCinema={showCinema} />
        </div>
    );
}

export default Cineplex;