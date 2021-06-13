import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCinemaDetailAction } from '../../../redux/action/PhimAction';

function Schedule(props) {
    const { chiTietRapChieu } = useSelector(state => state.PhimReducer);
    console.log(chiTietRapChieu);
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCinemaDetailAction())
    }, []);
    return (
        <div className="schedule-wrapper">
            <h3>Tạo lịch chiếu</h3>
            <hr />
            <form className="schedule__form">
                <div className="form__content">
                    <div className="form__item">
                        <label for="maNhom">Hệ thống rạp</label>
                        <div className="form__group">
                            <select id="maNhom" className="form__input">
                                {chiTietRapChieu?.map((heThongRap, index) => {
                                    return <option key={index} value={heThongRap.tenHeThongRap}>{heThongRap.tenHeThongRap}</option>
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="form__item">
                        <label for="maNhom">Cụm rạp</label>
                        <div className="form__group">
                            <select id="maNhom" className="form__input">
                                {chiTietRapChieu.map((heThongRap, index) => {
                                    return <>
                                        {heThongRap.lstCumRap?.map((cumRap, index) => {
                                            return <option key={index} value={cumRap.tenCumRap}>{cumRap.tenCumRap}</option>
                                        })}
                                    </>
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="form__item">
                        <label for="maNhom">Rạp</label>
                        <div className="form__group">
                            <select id="maNhom" className="form__input">
                                {chiTietRapChieu?.map((heThongRap, index) => {
                                    return <>
                                        {heThongRap.lstCumRap?.map((cumRapChieu, index) => {
                                            return <>
                                                {cumRapChieu.danhSachPhim?.map((cumRap, index) => {
                                                    return <>
                                                        {cumRap.lstLichChieuTheoPhim?.map((rapChieu, index) => {
                                                            return <option key={index} value={rapChieu.tenRap}>{rapChieu.tenRap}</option>
                                                        })}
                                                    </>
                                                })}
                                            </>
                                        })}
                                    </>
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="form__item">
                        <label for="maNhom">Mã nhóm</label>
                        <div className="form__group">
                            <select id="maNhom" className="form__input">
                                <option value="GP01">GP01</option>
                                <option value="GP02">GP02</option>
                                <option value="GP03">GP03</option>
                                <option value="GP04">GP04</option>
                                <option value="GP05">GP05</option>
                                <option value="GP06">GP06</option>
                                <option value="GP07">GP07</option>
                                <option value="GP08">GP08</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="form__content">
                    <div className="form__item">
                        <label for="ngayKhoiChieu">Ngày khởi chiếu</label>
                        <div className="form__group">
                            <div className="form__input">
                                <input id="ngayKhoiChieu" />
                            </div>
                        </div>
                    </div>
                    <div className="form__item">
                        <label for="ngayKhoiChieu">Giá vé</label>
                        <div className="form__group">
                            <div className="form__input">
                                <input id="ngayKhoiChieu" />
                            </div>
                        </div>
                    </div>
                    <div className="form__button">
                        <button className="button" type="submit">Tạo lịch chiếu</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Schedule;