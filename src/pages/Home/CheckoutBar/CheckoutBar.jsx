import moment from 'moment';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function CheckoutBar(props) {
    const { danhSachPhim, chiTietRapChieu } = useSelector(state => state.PhimReducer);
    let [tenPhim, setTenPhim] = useState("Phim");
    let [rapChieu, setRapChieu] = useState("Rạp");
    let [ngayXem, setNgayXem] = useState("Ngày xem");

    return (
        <div className="container checkout-bar__container">
            <div className="checkout__bar">
                <div className="checkout__item">
                    <button className="btn__list btn-1" href="#" >
                        {tenPhim.length > 15 ? <span>{tenPhim.substr(0, 15)}...</span> : <span>{tenPhim}</span>}
                        <i class="fa fa-angle-down"></i>
                    </button>
                    <div className="checkout__list">
                        {danhSachPhim.map((film, index) => {
                            return <div className="list__item" key={index}>
                                <button className="checkout__link" onClick={() => {
                                    setTenPhim(film.tenPhim)
                                }}>
                                    {film.tenPhim}
                                </button>
                            </div>
                        })}
                    </div>
                </div>

                <div className="checkout__item">
                    <button className="btn__list btn-2">
                        {rapChieu.length > 8 ? <span>{rapChieu.substr(0, 8)}...</span> : <span>{rapChieu}</span>}
                        <i class="fa fa-angle-down"></i>
                    </button>
                    <div className="checkout__list">
                        {chiTietRapChieu.map((rapChieu, index) => {
                            return <div className="list__item" key={index}>
                                <button className="checkout__link" onClick={() => {
                                    setRapChieu(rapChieu.tenHeThongRap)
                                }}>
                                    {rapChieu.tenHeThongRap}
                                </button>
                            </div>
                        })}
                    </div>
                </div>

                <div className="checkout__item">
                    <button className="btn__list btn-3">
                        <span>{ngayXem}</span>
                        <i class="fa fa-angle-down"></i>
                    </button>
                    <div className="checkout__list">
                        {chiTietRapChieu.map((heThongRap, index) => {
                            return <>
                                {heThongRap.lstCumRap?.map((cumRapChieu, index) => {
                                    return <>
                                        {cumRapChieu.danhSachPhim?.map((cumRap, index) => {
                                            return <>
                                                {cumRap.lstLichChieuTheoPhim?.map((lichChieu, index) => {
                                                    return <div className="list__item" key={index}>
                                                        <button className="checkout__link" onClick={() => {
                                                            setNgayXem(lichChieu.ngayChieuGioChieu)
                                                        }}>
                                                            {moment(lichChieu.ngayChieuGioChieu).format("dddd hh:mm : A")}
                                                        </button>
                                                    </div>
                                                })}
                                            </>
                                        })}
                                    </>
                                })}
                            </>
                        })}
                    </div>
                </div>

                {/* <div className="checkout__item">
                    <button className="btn__list btn-4">
                        <span>Suất chiếu</span>
                        <i class="fa fa-angle-down"></i>
                    </button>
                    <div className="checkout__list">
                        <button className="checkout__link">1</button>
                    </div>
                </div> */}

                <div className="checkout__item">
                    <button className="button">Mua vé ngay</button>
                </div>
            </div>
        </div>
    );
}

export default CheckoutBar;