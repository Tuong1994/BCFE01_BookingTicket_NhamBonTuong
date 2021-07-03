import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import RWD_Checkout from '../../component/RWD_Checkout/RWD_Checkout';
import CountDown from '../../component/CountDown/CountDown';
import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { taiKhoan } from '../../configs/setting';
import { bookMovieAction, getTicketAction } from '../../redux/action/PhimAction';

function Checkout(props) {
    const { thongTinRapChieu } = useSelector(state => state.PhimReducer);
    const { DSGheDangDat } = useSelector(state => state.BookTicketReducer);
    const [showDetail, setShowDetail] = useState(true);
    let dispatch = useDispatch();
    useEffect(() => {
        window.scrollTo(0, 0);
        let { id } = props.match.params;
        dispatch(getTicketAction(id));
    }, [])

    let renderChair = () => {
        return thongTinRapChieu.danhSachGhe?.map((chair, index) => {
            let indexBook = DSGheDangDat.findIndex(bookChair => bookChair.maGhe === chair.maGhe);
            let classBook = indexBook !== -1 ? "booking-chair" : "";
            let classBooked = chair.daDat === true ? "booked-chair" : "";
            let classVip = chair.loaiGhe === "Vip" ? "vip-chair" : "";
            return <Fragment key={index}>
                <button className={`chair ${classVip} ${classBook} ${classBooked}`} disabled={chair.daDat} onClick={() => {
                    dispatch({
                        type: "BOOKING",
                        chair: {
                            maGhe: chair.maGhe,
                            giaVe: chair.giaVe,
                            stt: chair.stt
                        }
                    })
                }}>
                    {chair.daDat ? "X" : chair.stt}
                </button>
                {(index + 1) % 16 === 0 ? <br /> : ""}
            </Fragment>
        })
    }

    let renderBookChair = () => {
        return DSGheDangDat.map((chair, index) => {
            return <Fragment key={index}>
                <span>
                    {chair.stt}{" "}
                </span>
            </Fragment>
        })
    }

    let renderTotal = () => {
        return DSGheDangDat.reduce((total, chair, index) => {
            return total += chair.giaVe;
        }, 0)
    }

    if (!localStorage.getItem(taiKhoan)) {
        return <Redirect to="/login" />
    }
    return (
        <div className="checkout__bg">
            <div className="checkout__container">
                <div className="checkout__theatre">
                    <div className="theatre__info">
                        <p>{thongTinRapChieu.thongTinPhim?.tenCumRap} - {thongTinRapChieu.thongTinPhim?.tenRap}</p>
                        <CountDown />
                    </div>

                    <div className="theatre__screen">
                        <img src="https://tix.vn/app/assets/img/icons/screen.png" alt="" />
                    </div>

                    <div className="theatre__chairs">
                        {renderChair()}
                    </div>

                    <div className="theatre__note">
                        <p>Chú thích :</p>
                        <div className="note__content">
                            <div className="note__item">
                                <div className="vip-bg"></div>
                                <span>Ghế Vip</span>
                            </div>
                            <div className="note__item">
                                <div className="booking-bg"></div>
                                <span>Ghế đang chọn</span>
                            </div>
                            <div className="note__item">
                                <div className="booked-bg"></div>
                                <span>Ghế đã chọn</span>
                            </div>
                        </div>
                    </div>

                    <div className="checkout__detail">
                        <p className="price">Tổng tiền : <span>{renderTotal().toLocaleString()} VNĐ</span></p>
                        <button className="button" onClick={() => {
                            setShowDetail(!showDetail)
                        }}>Đặt vé</button>
                    </div>
                </div>

                <div className="checkout__movie">
                    <div className="movie__img">
                        <img src={thongTinRapChieu.thongTinPhim?.hinhAnh} alt={thongTinRapChieu.thongTinPhim?.tenPhim} />
                    </div>

                    <div className="movie__info">
                        <div className="info">
                            <h5>{thongTinRapChieu.thongTinPhim?.tenPhim}</h5>
                            <hr />
                            <p>Địa chỉ : <span>{thongTinRapChieu.thongTinPhim?.diaChi}</span></p>
                            <p>Ngày chiếu : <span>{thongTinRapChieu.thongTinPhim?.ngayChieu}</span></p>
                            <hr />
                            <p className="booking-chairs">Ghế : {renderBookChair()}</p>
                            <p className="price">Tổng tiền : <span>{renderTotal().toLocaleString()} VNĐ</span></p>
                        </div>
                        <hr />
                        <div className="checkout__button">
                            <button className="button" onClick={() => {
                                if (localStorage.getItem(taiKhoan) && DSGheDangDat !== "") {
                                    let accLogin = JSON.parse(localStorage.getItem(taiKhoan));
                                    let thongTinVe = {
                                        maLichChieu: props.match.params.id,
                                        danhSachVe: DSGheDangDat,
                                        taiKhoanNguoiDung: accLogin.taiKhoan,
                                    };
                                    dispatch(bookMovieAction(thongTinVe));
                                } else {
                                    Swal.fire({
                                        icon: "error",
                                        title: "Bạn chưa chọn ghế"
                                    })
                                }
                            }}>
                                Đặt vé
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <RWD_Checkout thongTinRapChieu={thongTinRapChieu} DSGheDangDat={DSGheDangDat} renderTotal={renderTotal} renderBookChair={renderBookChair} setShowDetail={setShowDetail} showDetail={showDetail} />
        </div >
    );
}

export default Checkout;