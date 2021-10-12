import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import { getShowTimeDetail } from '../../../redux/action/PhimAction';
import moment from 'moment';

function CheckoutBar(props) {
    const { danhSachPhim, chiTietLichChieu, lichChieu } = useSelector(state => state.PhimReducer);
    let dispatch = useDispatch();
    const [tenPhim, setTenPhim] = useState("Phim");
    const [rapChieu, setRapChieu] = useState("Rạp");
    const [ngayXem, setNgayXem] = useState("Ngày xem");
    const [gioXem, setGioXem] = useState("Suất chiếu");

    const [list1, setList1] = useState(false);
    const [list2, setList2] = useState(false);
    const [list3, setList3] = useState(false);
    const [list4, setList4] = useState(false);

    let showList1 = () => setList1((list1) => !list1);
    let showList2 = () => setList2((list2) => !list2);
    let showList3 = () => setList3((list3) => !list3);
    let showList4 = () => setList4((list4) => !list4);

    let menuRef = useRef();

    useEffect(() => {
        let handleClickOutSide = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setList1(false);
                setList2(false);
                setList3(false);
                setList4(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutSide);
        return () => {
            document.removeEventListener("mousedown", handleClickOutSide);
        }
    });
    return (
        <div className="container checkout-bar">
            <div className="checkout__bar" ref={menuRef}>
                <div className="checkout__item" onClick={() => showList1()}>
                    <p className="btn__list">
                        <span>{tenPhim}</span>
                        <i class="fa fa-angle-down"></i>
                    </p>
                    <div className={list1 ? "checkout__list show__list" : "checkout__list"}>
                        {danhSachPhim.map((film, index) => {
                            return <div className="list__item" key={index}>
                                <p className="item__link" onClick={() => {
                                    dispatch(getShowTimeDetail(film.maPhim))
                                    setTenPhim(film.tenPhim)
                                    setList2(true);
                                }}>
                                    {film.tenPhim}
                                </p>
                            </div>
                        })}
                    </div>
                </div>

                <div className="checkout__item" onClick={() => showList2()}>
                    <p className="btn__list">
                        <span>{rapChieu}</span>
                        <i class="fa fa-angle-down"></i>
                    </p>
                    <div className={list2 ? "checkout__list show__list" : "checkout__list"}>
                        {tenPhim !== "Phim" ?
                            chiTietLichChieu.heThongRapChieu?.map((rapChieu) => {
                                return <>
                                    {rapChieu.cumRapChieu?.map((cumRap, index) => {
                                        return <div className="list__item" key={index}>
                                            <p className="item__link" onClick={() => {
                                                setRapChieu(cumRap.tenCumRap)
                                                setList3(true)
                                            }}>
                                                {cumRap.tenCumRap}
                                            </p>
                                        </div>
                                    })}
                                </>
                            }) : <p className="list__default">Vui lòng chọn phim</p>
                        }
                    </div>
                </div>

                <div className="checkout__item" onClick={() => showList3()}>
                    <p className="btn__list">
                        <span>{ngayXem}</span>
                        <i class="fa fa-angle-down"></i>
                    </p>
                    <div className={list3 ? "checkout__list show__list" : "checkout__list"}>
                        {rapChieu !== "Rạp" ?
                            chiTietLichChieu.heThongRapChieu?.map((heThongRap) => {
                                return <>
                                    {heThongRap.cumRapChieu?.map((cumRap) => {
                                        return <>
                                            {cumRap.lichChieuPhim?.map((lichChieu, index) => {
                                                return <div className="list__item" key={index}>
                                                    <p className="item__link" onClick={() => {
                                                        let lichChieuFormat = moment(lichChieu.ngayChieuGioChieu).format("dddd mm yyyy");
                                                        setNgayXem(lichChieuFormat);
                                                        setList4(true);
                                                    }}>
                                                        {moment(lichChieu.ngayChieuGioChieu).format("dddd mm yyyy")}
                                                    </p>
                                                </div>
                                            })}
                                        </>
                                    })}
                                </>
                            }) : <p className="list__default">Vui lòng chọn rạp</p>}
                    </div>
                </div>

                <div className="checkout__item" onClick={() => showList4()}>
                    <p className="btn__list">
                        <span>{gioXem}</span>
                        <i class="fa fa-angle-down"></i>
                    </p>
                    <div className={list4 ? "checkout__list show__list" : "checkout__list"}>
                        {ngayXem !== "Ngày xem" ?
                            chiTietLichChieu.heThongRapChieu?.map((heThongRap) => {
                                return <>
                                    {heThongRap.cumRapChieu?.map((cumRap) => {
                                        return <>
                                            {cumRap.lichChieuPhim?.map((lichChieu, index) => {
                                                return <div className="list__item" key={index}>
                                                    <p className="item__link" onClick={() => {
                                                        let lichChieuFormat = moment(lichChieu.ngayChieuGioChieu).format("hh:mm:A");
                                                        setGioXem(lichChieuFormat);
                                                        dispatch({
                                                            type: "GET_SCHEDULE",
                                                            lichChieu: {
                                                                maLichChieu: lichChieu.maLichChieu
                                                            }
                                                        })
                                                    }}>
                                                        {moment(lichChieu.ngayChieuGioChieu).format("hh:mm:A")}
                                                    </p>
                                                </div>
                                            })}
                                        </>
                                    })}
                                </>
                            }) : <p className="list__default">Vui lòng chọn ngày</p>}
                    </div>
                </div>

                <div className="checkout__item">
                    {gioXem === "Suất chiếu" ? <div class="button">Mua vé ngay</div> : <NavLink to={`/checkout/${lichChieu.maLichChieu}`} className="button btn-buy">Mua vé ngay</NavLink>}
                </div>
            </div>
        </div>
    );
}

export default React.memo(CheckoutBar);