import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

function BookInfo({ thongTinRapChieu, renderTotal }) {
    const { accountInfo } = useSelector(state => state.UserReducer);
    const { DSGheDangDat, thanhCong, hinhThucThanhToan } = useSelector(state => state.BookTicketReducer);
    const { thongTinPhim } = thongTinRapChieu;
    let dispatch = useDispatch();

    let renderBookInfo = () => {
        if (thanhCong) {
            return <div className="checkout__bookinfo">
                <div className="bookinfo">
                    <h3>Đặt vé thành công</h3>
                    <div className="bookinfo__movie">
                        <img src={thongTinPhim?.hinhAnh} alt={thongTinPhim?.tenPhim} />
                        <div className="movie__detail">
                            <p>{thongTinPhim?.tenPhim}</p>
                            <p>{thongTinPhim?.tenCumRap}</p>
                            <p>{thongTinPhim?.diaChi}</p>
                            <div className="detail__item">
                                <div className="item">
                                    <p>Suất chiếu :</p>
                                    <p>{thongTinPhim?.ngayChieu} - {thongTinPhim?.gioChieu}</p>
                                </div>
                                <div className="item">
                                    <p>Phòng :</p>
                                    <p>{thongTinPhim?.tenRap}</p>
                                </div>
                                <div className="item">
                                    <p>Ghế :</p>
                                    {DSGheDangDat?.map((chair, index) => {
                                        return <Fragment key={index}>
                                            {index === 0 ?
                                                <span>
                                                    {chair.stt}{" "}
                                                </span> :
                                                <span>
                                                    {","}{chair.stt}{" "}
                                                </span>}
                                        </Fragment>
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bookinfo__user">
                        <h4>Thông tin đặt vé</h4>
                        <div className="user__info">
                            <div className="info__item">
                                <p>Tài khoản :</p>
                                <p>{accountInfo.taiKhoan}</p>
                            </div>
                            <div className="info__item">
                                <p>Email :</p>
                                <p>{accountInfo.email}</p>
                            </div>
                            <div className="info__item">
                                <p>Số điện thoại :</p>
                                <p>{accountInfo.soDT}</p>
                            </div>
                            <div className="info__item">
                                <p>Thanh toán :</p>
                                <p>{hinhThucThanhToan}</p>
                            </div>
                            <div className="info__item">
                                <p>Tổng tiền</p>
                                <p>{renderTotal()} đ</p>
                            </div>
                        </div>
                        <p className="user__note">Kiểm tra lại vé đã đặt trong thông tin tài khoản của bạn !</p>
                    </div>
                    <div className="bookinfo__button">
                        <button className="button" onClick={() => {
                            dispatch({
                                type: "closeBookInfo"
                            })
                            window.location.reload(true);
                        }}>Mua thêm vé</button>
                        <NavLink  to="/" className="button">Quay lại trang chủ</NavLink>
                    </div>
                </div>
            </div>
        } else {
           return null
        }
    }

    return (
        <>
            {renderBookInfo()}
        </>
    );
}

export default BookInfo;