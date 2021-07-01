import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import { getShowTimeDetail } from '../../../redux/action/PhimAction';

function CheckoutBar(props) {
    const { danhSachPhim, phim, chiTietLichChieu, lichChieu } = useSelector(state => state.PhimReducer);
    let dispatch = useDispatch();
    const [tenPhim, setTenPhim] = useState("Phim");
    const [rapChieu, setRapChieu] = useState("Rạp");
    const [ngayXem, setNgayXem] = useState("Ngày xem");
    const [gioXem, setGioXem] = useState("Suất chiếu");

    const [list1, setList1] = useState(false);
    const [list2, setList2] = useState(false);
    const [list3, setList3] = useState(false);
    const [list4, setList4] = useState(false);

    let showList1 = () => setList1(!list1);
    let showList2 = () => setList2(!list2);
    let showList3 = () => setList3(!list3);
    let showList4 = () => setList4(!list4);

    return (
        <div className="container checkout-bar__container">
            <div className="checkout__bar">
                <div className="checkout__item" onClick={() => showList1()}>
                    <button className="btn__list btn-1" href="#" >
                        {tenPhim.length > 15 ? <span>{tenPhim.substr(0, 15)}...</span> : <span>{tenPhim}</span>}
                        <i class="fa fa-angle-down"></i>
                    </button>
                    <div className={list1 ? "checkout__list show__list" : "checkout__list"}>
                        {danhSachPhim.map((film, index) => {
                            return <div className="list__item" key={index}>
                                <button className="checkout__link" onClick={() => {
                                    dispatch({
                                        type: "GET_FILM_DETAIL",
                                        film
                                    })
                                    let { maPhim } = phim
                                    dispatch(getShowTimeDetail(maPhim))
                                    setTenPhim(film.tenPhim)
                                }}>
                                    {film.tenPhim}
                                </button>
                            </div>
                        })}
                    </div>
                </div>

                <div className="checkout__item" onClick={() => showList2()}>
                    <button className="btn__list btn-2">
                        {rapChieu.length > 8 ? <span>{rapChieu.substr(0, 8)}...</span> : <span>{rapChieu}</span>}
                        <i class="fa fa-angle-down"></i>
                    </button>
                    <div className={list2 ? "checkout__list show__list" : "checkout__list"}>
                        {chiTietLichChieu.heThongRapChieu?.map((rapChieu, index) => {
                            return <>
                                {rapChieu.cumRapChieu?.map((cumRap, index) => {
                                    return <div className="list__item" key={index}>
                                        <button className="checkout__link" onClick={() => {
                                            setRapChieu(cumRap.tenCumRap)
                                        }}>
                                            {cumRap.tenCumRap}
                                        </button>
                                    </div>
                                })}
                            </>
                        })}
                    </div>
                </div>

                <div className="checkout__item" onClick={() => showList3()}>
                    <button className="btn__list btn-3">
                        <span>{ngayXem}</span>
                        <i class="fa fa-angle-down"></i>
                    </button>
                    <div className={list3 ? "checkout__list show__list" : "checkout__list"}>
                        {chiTietLichChieu.heThongRapChieu?.map((heThongRap, index) => {
                            return <>
                                {heThongRap.cumRapChieu?.map((cumRap, index) => {
                                    return <>
                                        {cumRap.lichChieuPhim?.map((lichChieu, index) => {
                                            return <div className="list__item" key={index}>
                                                <button className="checkout__link" onClick={() => {
                                                    let lichChieuFormat = moment(lichChieu.ngayChieuGioChieu).format("dddd mm yyyy");
                                                    setNgayXem(lichChieuFormat);
                                                }}>
                                                    {moment(lichChieu.ngayChieuGioChieu).format("dddd mm yyyy")}
                                                </button>
                                            </div>
                                        })}
                                    </>
                                })}
                            </>
                        })}
                    </div>
                </div>

                <div className="checkout__item" onClick={() => showList4()}>
                    <button className="btn__list btn-4">
                        <span>{gioXem}</span>
                        <i class="fa fa-angle-down"></i>
                    </button>
                    <div className={list4 ? "checkout__list show__list" : "checkout__list"}>
                        {chiTietLichChieu.heThongRapChieu?.map((heThongRap, index) => {
                            return <>
                                {heThongRap.cumRapChieu?.map((cumRap, index) => {
                                    return <>
                                        {cumRap.lichChieuPhim?.map((lichChieu, index) => {
                                            return <div className="list__item" key={index}>
                                                <button className="checkout__link" onClick={() => {
                                                    let lichChieuFormat = moment(lichChieu.ngayChieuGioChieu).format("hh:mm:A");
                                                    setGioXem(lichChieuFormat);
                                                    dispatch({
                                                        type: "GET_SCHEDULE",
                                                        lichChieu: {
                                                            maLichChieu: lichChieu.maLichChieu
                                                        }
                                                    })
                                                    console.log(lichChieu.maLichChieu);
                                                }}>
                                                    {moment(lichChieu.ngayChieuGioChieu).format("hh:mm:A")}
                                                </button>
                                            </div>
                                        })}
                                    </>
                                })}
                            </>
                        })}
                    </div>
                </div>

                <div className="checkout__item">
                    {gioXem === "Suất chiếu" ? <button class="button" disabled={true}>Mua vé ngay</button> : <NavLink to={`/checkout/${lichChieu.maLichChieu}`} className="button btn-buy">Mua vé ngay</NavLink>}
                </div>
            </div>
        </div>
    );
}

export default CheckoutBar;