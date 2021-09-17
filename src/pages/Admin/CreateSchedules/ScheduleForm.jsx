import React, { useRef } from 'react';
import moment from 'moment';
import { Fragment } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createScheduleAction } from '../../../redux/action/AdminAction';
import { getCinemaByCinplexAction } from '../../../redux/action/PhimAction';

function ScheduleForm(props) {
    const { danhSachPhim, danhSachHeThongRap } = props;
    const { danhSachRapTheoHeThong } = useSelector(state => state.PhimReducer);
    const priceArr = [75000, 90000, 120000];

    const listRef = useRef(null);

    const [showList1, setShowList1] = useState(false);
    const [showList2, setShowList2] = useState(false);
    const [showList3, setShowList3] = useState(false);
    const [showList4, setShowList4] = useState(false);
    const [showList5, setShowList5] = useState(false);

    const [phim, setPhim] = useState({
        default: "Chọn phim",
        tenPhim: "",
        maPhim: ""
    })
    const [heThongRap, setHeThongRap] = useState("Chọn hệ thống rạp")
    const [cumRap, setCumRap] = useState("Chọn cụm rạp")
    const [rap, setRap] = useState({
        default: "Chọn rạp",
        tenRap: "",
        maRap: ""
    })
    const [giaVe, setGiaVe] = useState("Chon giá vé")
    const [ngayChieuGioChieu, setNgayChieuGioChieu] = useState("");

    let handleChange = (e) => {
        setNgayChieuGioChieu(e.target.value)
    };
  
    let dispatch = useDispatch();

    useEffect(() => {
        let handleClickOutSide = (e) => {
            if (listRef.current && !listRef.current.contains(e.target)) {
                setShowList1(false);
                setShowList2(false);
                setShowList3(false);
                setShowList4(false);
                setShowList5(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutSide);
        return () => {
            document.removeEventListener("mousedown", handleClickOutSide);
        }
    })

    return (
        <div className="schedule__form">
            <div className="form" ref={listRef}>
                <div className="form__wrapper">
                    <div className="wrapper__group" onClick={() => {
                        setShowList1(!showList1);
                    }}>
                        <div className="group__item">
                            {phim.tenPhim === "" ? <p>{phim.default}</p> : <p>{phim.tenPhim}</p>}
                            <span><i class="fa fa-angle-down"></i></span>
                        </div>
                        <div className={showList1 ? "group__list show-list" : "group__list"}>
                            {danhSachPhim?.map((movie, index) => {
                                return <p className="list__item" key={index} onClick={() => {
                                    setPhim({
                                        tenPhim: movie.tenPhim,
                                        maPhim: movie.maPhim
                                    });
                                    setShowList2(true);
                                }}>
                                    {movie.tenPhim}
                                </p>
                            })}
                        </div>
                    </div>

                    <div className="wrapper__group" onClick={() => {
                        setShowList2(!showList2);
                    }}>
                        <div className="group__item">
                            <p>{heThongRap}</p>
                            <span><i class="fa fa-angle-down"></i></span>
                        </div>
                        <div className={showList2 ? "group__list show-list" : "group__list"}>
                            {phim === "Chọn phim" ?
                                <p className="list__item">Vui lòng chọn phim</p> :
                                danhSachHeThongRap?.map((cineplex, index) => {
                                    return <p className="list__item" key={index} onClick={() => {
                                        setHeThongRap(cineplex.tenHeThongRap);
                                        setShowList3(true);
                                        dispatch(getCinemaByCinplexAction(cineplex.maHeThongRap))
                                    }}>
                                        {cineplex.tenHeThongRap}
                                    </p>
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className="form__wrapper">
                    <div className="wrapper__group" onClick={() => {
                        setShowList3(!showList3);
                    }}>
                        <div className="group__item">
                            <p>{cumRap}</p>
                            <span><i class="fa fa-angle-down"></i></span>
                        </div>
                        <div className={showList3 ? "group__list show-list" : "group__list"}>
                            {heThongRap === "Chọn hệ thống rạp" ?
                                <p className="list__item">Vui lòng chọn hế thống rạp</p> :
                                danhSachRapTheoHeThong?.map((cinema, index) => {
                                    return <p className="list__item" key={index} onClick={() => {
                                        setCumRap(cinema.tenCumRap);
                                        setShowList4(true);
                                    }}>
                                        {cinema.tenCumRap}
                                    </p>
                                })
                            }
                        </div>
                    </div>

                    <div className="wrapper__group" onClick={() => {
                        setShowList4(!showList4);
                    }}>
                        <div className="group__item">
                            {rap.tenRap === "" ? <p>{rap.default}</p> : <p>{rap.tenRap}</p>}
                            <span><i class="fa fa-angle-down"></i></span>
                        </div>
                        <div className={showList4 ? "group__list show-list" : "group__list"}>
                            {cumRap === "Chọn cụm rạp" ?
                                <p className="list__item">Vui lòng chọn cụm rạp</p> :
                                danhSachRapTheoHeThong?.map((cinema, index) => {
                                    return <Fragment key={index}>
                                        {cinema.danhSachRap?.map((theater, index) => {
                                            return <p className="list__item" key={index} onClick={() => {
                                                setRap({
                                                    tenRap: theater.tenRap,
                                                    maRap: theater.maRap
                                                })
                                                setShowList5(true)
                                            }}>
                                                {theater.tenRap}
                                            </p>
                                        })}
                                    </Fragment>
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className="form__wrapper">
                    <div className="wrapper__group" onClick={() => {
                        setShowList5(!showList5);
                    }}>
                        <div className="group__item">
                            <p>{giaVe}</p>
                            <span><i class="fa fa-angle-down"></i></span>
                        </div>
                        <div className={showList5 ? "group__list show-list" : "group__list"}>
                            {rap === "Chọn rạp" ?
                                <p className="list__item">Vui lòng chọn rạp</p> :
                                priceArr.map((price, index) => {
                                    return <p className="list__item" key={index} onClick={() => {
                                        setGiaVe(price)
                                    }}>
                                        {price} đ
                                    </p>
                                })
                            }
                        </div>
                    </div>

                    <div className="wrapper__last-group">
                        <div className="form__date">
                            <div className="group__item">
                                <input type="datetime-local" id="ngayChieu" className="date__input" onChange={handleChange} />
                                <span className="input__button"><i class="fa fa-calendar"></i></span>
                            </div>
                        </div>
                        <div className="form__button">
                            {ngayChieuGioChieu === "" || phim === "Chọn phim" || heThongRap === "Chọn hệ thống rạp" || cumRap === "Chọn cụm rạp" || rap === "Chọn rạp" || giaVe === "Chọn giá vé" ?
                                <button className="button button__disabled" disabled={true}>Tạo lịch chiếu</button>
                                :
                                <button className="button" onClick={() => {
                                    let lichChieu = {
                                        maPhim: phim.maPhim,
                                        ngayChieuGioChieu: moment(ngayChieuGioChieu).format("DD/MM/YYYY hh:mm:ss"),
                                        maRap: rap.maRap,
                                        giaVe: giaVe
                                    }
                                    dispatch(createScheduleAction(lichChieu));
                                }}>Tạo lịch chiếu</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ScheduleForm;