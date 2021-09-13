import React from 'react';
import moment from 'moment';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Schedule({ chiTietLichChieu }) {
    const [showTime, setShowTime] = useState("");
    
    return (
        <div className="schedule">
            <div className="schedule__cineplex">
                {chiTietLichChieu.heThongRapChieu?.map((cineplex, index) => {
                    return <div className={showTime == index ? "cineplex__logo logo-active" : "cineplex__logo"} key={index} onClick={() => {
                        setShowTime(index)
                    }}>
                        <img src={cineplex.logo} alt={cineplex.tenHeThongRap} />
                    </div>
                })}
            </div>

            <div className="schedule__showtime">
                {chiTietLichChieu.heThongRapChieu?.map((cineplexes, index) => {
                    return <div className={showTime == index ? "showtime__content show-schedule" : "showtime__content"} key={index}>
                        {cineplexes.cumRapChieu?.map((cinema, index) => {
                            return <div className="content__inner" key={index}>
                                <div className="content__info">
                                    <img src="../img/rapChieu.png" alt={cinema.tenCumRap} />
                                    <div className="info">
                                        <p>{cinema.tenCumRap}</p>
                                        <p>2D Digital</p>
                                    </div>
                                </div>
                                <div className="content__button">
                                    {cinema.lichChieuPhim?.map((showtime, index) => {
                                        return <NavLink className="button" to={`/checkout/${showtime.maLichChieu}`} key={index}>
                                            {moment(showtime.ngayChieuGioChieu).format("ddd : hh:mm A")} - {showtime.tenRap}
                                        </NavLink>
                                    })}
                                </div>
                            </div>
                        })}
                    </div>
                })}
            </div>
        </div>
    );
}

export default Schedule;