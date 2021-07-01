import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { taiKhoan } from '../../configs/setting';
import { bookMovieAction } from '../../redux/action/PhimAction';

function RWD_Checkout(props) {
    const { thongTinRapChieu, DSGheDangDat, renderBookChair, renderTotal, setShowDetail, showDetail } = props;
    let dispatch = useDispatch();
    return (
        <div className="rwd-checkout__wrapper">
            <div className={showDetail ? "rwd-checkout__info show-detail" : "rwd-checkout__info"}>
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
                        <button className="btn-close" onClick={() => {
                            setShowDetail(!showDetail)
                        }}><i class="fa fa-long-arrow-alt-left"></i></button>
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
    );
}

export default RWD_Checkout;