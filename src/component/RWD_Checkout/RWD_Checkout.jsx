import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bookMovieAction } from '../../redux/action/PhimAction';
import ButtonLoading from '../Loading/ButtonLoading';

function RWD_Checkout(props) {
    const { thongTinRapChieu, DSGheDangDat, renderBookChair, renderTotal, setShowDetail, showDetail, paramsId } = props;
    const { thongTinPhim } = thongTinRapChieu
    const { accountInfo } = useSelector(state => state.UserReducer);
    const { hinhThucThanhToan } = useSelector(state => state.BookTicketReducer);
    let dispatch = useDispatch();
    let handleChange = (e) => {
        dispatch({
            type: "PAY_CHECK",
            pay: e.target.value
        })
    }
    return (
        <div className="rwd-checkout">
            <div className={showDetail ? "checkout__movie show-detail" : "checkout__movie"}>
                <div className="movie__backward">
                    <span onClick={() => {
                        setShowDetail(false);
                    }}><i class="fa fa-arrow-left"></i>
                    </span>
                </div>
                <div className="movie__total">
                    <p>{renderTotal().toLocaleString()} đ</p>
                </div>
                <div className="movie__info">
                    <div className="info__item">
                        <p>Tên phim :</p>
                        <p>{thongTinPhim?.tenPhim}</p>
                    </div>
                    <div className="info__item">
                        <p>Tên rạp :</p>
                        <p>{thongTinPhim?.tenCumRap}</p>
                    </div>
                    <div className="info__item">
                        <p>Địa chỉ :</p>
                        <p>{thongTinPhim?.diaChi}</p>
                    </div>
                    <div className="info__item">
                        <p>Ngày chiếu :</p>
                        <p>{thongTinPhim?.ngayChieu} - {thongTinPhim?.gioChieu} - {thongTinPhim?.tenRap}</p>
                    </div>
                </div>
                <div className="movie__bookchairs">
                    <p>Ghế : {renderBookChair()}</p>
                    <p>{renderTotal().toLocaleString()} đ</p>
                </div>
                <div className="movie__user">
                    <div className="user__input">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" value={accountInfo.email} />
                    </div>
                    <div className="user__input">
                        <label htmlFor="soDT">Số điện thoại</label>
                        <input type="text" id="soDT" value={accountInfo.soDT} />
                    </div>
                    <div className="user__input">
                        <label htmlFor="maGiamGia">Mã giảm giá</label>
                        <div className="input__inner">
                            <input type="text" id="maGiamGia" value="Tạm thời không hỗ trợ..." />
                            <div className="inner__button">Áp dụng</div>
                        </div>
                    </div>
                </div>
                <div className="movie__paycheck">
                    <p className="paycheck__title">Hình thức thanh toán</p>
                    <div className={DSGheDangDat.length !== 0 ? "paycheck__warning hide-warning" : "paycheck__warning"}>
                        <p>Vui lòng chọn ghế để hiển thị hình thức thanh toán phù hợp</p>
                    </div>
                    <form className={DSGheDangDat.length !== 0 ? "paycheck__form show-pay" : "paycheck__form"}>
                        <div className="form__checkbox">
                            <input type="radio" name="paycheck" value="ZaloPay" onChange={handleChange} />
                            <div className="checkbox__info">
                                <img src="../img/zalo.jpg" alt="zalopay" />
                                <p>Thanh toán qua ZaloPay</p>
                            </div>
                        </div>
                        <div className="form__checkbox">
                            <input type="radio" name="paycheck" value="Visa, Master, JCB" onChange={handleChange} />
                            <div className="checkbox__info">
                                <img src="../img/visa.png" alt="visapay" />
                                <p>Visa, Master, JCB</p>
                            </div>
                        </div>
                        <div className="form__checkbox">
                            <input type="radio" name="paycheck" value="ATM" onChange={handleChange} />
                            <div className="checkbox__info">
                                <img src="../img/atm.png" alt="atm" />
                                <p>Thẻ ATM nội địa</p>
                            </div>
                        </div>
                        <div className="form__checkbox">
                            <input type="radio" name="paycheck" value="Store tiện ích" onChange={handleChange} />
                            <div className="checkbox__info">
                                <img src="../img/cuahang.png" alt="cuahang" />
                                <p>Thanh toán tại cửa hàng tiện ích</p>
                            </div>
                        </div>
                    </form>
                    <div className="paycheck__note">
                        <p><i class="fa fa-exclamation-circle"></i> Vé đã mua không thể đổi hoặc hoàn tiền</p>
                        <p>Mã vé sẽ được gửi qua tin nhắn <span>ZMS</span> (tin nhắn qua Zalo) và <span>Email</span> đã nhập</p>
                    </div>
                </div>
                <div className="movie__button">
                    {DSGheDangDat.length !== 0 && hinhThucThanhToan !== "" ?
                        <button className="button" onClick={() => {
                            let bookDetail = {
                                maLichChieu: paramsId,
                                danhSachVe: DSGheDangDat,
                                taiKhoanNguoiDung: accountInfo.taiKhoan
                            }
                            dispatch(bookMovieAction(bookDetail));
                            dispatch({
                                type: "openBtnLoading"
                            })
                            setTimeout(() => {
                                setShowDetail(false);
                            }, 1000)
                        }}>
                            <ButtonLoading />
                            <span>Đặt vé</span>
                        </button>
                        : <button className="button button-disabled" disabled={true}>Đặt vé</button>}
                </div>
            </div>
        </div>
    );
}

export default RWD_Checkout;