import { Formik, Form, Field, useFormik } from 'formik';
import * as yup from "yup"
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCinemaAction } from '../../../redux/action/PhimAction';
import { createScheduleAction } from '../../../redux/action/AdminAction';
import { NavLink } from 'react-router-dom';

function Schedule(props) {
    const { danhSachRapChieu, phim } = useSelector(state => state.PhimReducer);
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCinemaAction())
    }, []);
    const { handleChange, handleSubmit, handleBlur, touched, errors, isValid, values } = useFormik({
        initialValues: {
            maPhim: phim.maPhim,
            tenHeThongRap: "",
            tenCumRap: "",
            tenRap: "",
            maNhom: "",
            ngayChieuGioChieu: "",
            giaVe: "",
        },
        validationSchema: yup.object().shape({
            tenHeThongRap: yup.string()
                .required("Chọn hệ thống rạp"),
            tenCumRap: yup.string()
                .required("Chọn cụm rạp"),
            tenRap: yup.string()
                .required("Chọn rạp"),
            maNhom: yup.string()
                .required("Chọn mã nhóm"),
            ngayChieuGioChieu: yup.string()
                .min(2, "Ít nhất 2 ký tự")
                .max(25, "Dài nhất 25 ký tự")
                .required("Không được để trống"),
            giaVe: yup.string()
                .min(2, "Ít nhất 2 ký tự")
                .max(10, "Dài nhất 10 ký tự")
                .required("Không được để trống")
        }),
        onSubmit: (values) => {
            dispatch(createScheduleAction(values));
        }
    })
    return (
        <div className="schedule">
            <h3>Tạo lịch chiếu</h3>
            <hr />
            <div className="schedule__film">
                <h5>Thông tin phim</h5>
                <div className="film__body">
                    <img src={phim.hinhAnh} alt={phim.tenPhim} />
                    <div className="film__info">
                        <p>Mã phim : <span>{phim.maPhim}</span></p>
                        <p>Mã nhóm : <span>{phim.maNhom}</span></p>
                        <p>Tên phim : <span>{phim.tenPhim}</span></p>
                        <p>Mô tả  : <span>{phim.moTa}</span></p>
                    </div>
                </div>
            </div>
            <hr />
            <Formik>
                <Form className="schedule__form" onSubmit={handleSubmit}>
                    <div className="form__content">
                        <div className={touched.tenHeThongRap && errors.tenHeThongRap ? "form__item animation" : "form__item"}>
                            <label for="tenHeThongRap">Hệ thống rạp</label>
                            <div className="form__group">
                                <Field as="select" id="tenHeThongRap" className="form__input" name="tenHeThongRap" onChange={handleChange} onBlur={handleBlur}>
                                    <option>Chọn hệ thống rạp</option>
                                    {danhSachRapChieu?.map((heThongRap, index) => {
                                        return <option key={index} value={heThongRap.tenHeThongRap}>{heThongRap.tenHeThongRap}</option>
                                    })}
                                </Field>
                            </div>
                            {touched.tenHeThongRap && errors.tenHeThongRap ? <span className="error__message">{errors.tenHeThongRap}</span> : ""}
                        </div>
                        <div className={touched.tenCumRap && errors.tenCumRap ? "form__item animation" : "form__item"}>
                            <label for="cumRap">Cụm rạp</label>
                            <div className="form__group">
                                <Field as="select" id="cumRap" className="form__input" name="tenCumRap" onChange={handleChange} onBlur={handleBlur}>
                                    <option>Chọn cụm rạp</option>
                                    {danhSachRapChieu.map((heThongRap, index) => {
                                        return <>
                                            {heThongRap.lstCumRap?.map((cumRap, index) => {
                                                return <option key={index} value={cumRap.tenCumRap}>{cumRap.tenCumRap}</option>
                                            })}
                                        </>
                                    })}
                                </Field>
                            </div>
                            {touched.tenCumRap && errors.tenCumRap ? <span className="error__message">{errors.tenCumRap}</span> : ""}
                        </div>
                        <div className={touched.tenRap && errors.tenRap ? "form__item animation" : "form__item"}>
                            <label for="rap">Rạp</label>
                            <div className="form__group">
                                <Field as="select" id="rap" className="form__input" name="tenRap" onChange={handleChange} onBlur={handleBlur}>
                                    <option>Chọn rạp</option>
                                    {danhSachRapChieu?.map((heThongRap, index) => {
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
                                </Field>
                            </div>
                            {touched.tenRap && errors.tenRap ? <span className="error__message">{errors.tenRap}</span> : ""}
                        </div>
                        <div className={touched.maNhom && errors.maNhom ? "form__item animation" : "form__item"}>
                            <label for="maNhom">Mã nhóm</label>
                            <div className="form__group">
                                <Field as="select" id="maNhom" className="form__input" onChange={handleChange} onBlur={handleBlur}>
                                    <option>Chọn mã nhóm</option>
                                    <option value="GP01">GP01</option>
                                    <option value="GP02">GP02</option>
                                    <option value="GP03">GP03</option>
                                    <option value="GP04">GP04</option>
                                    <option value="GP05">GP05</option>
                                    <option value="GP06">GP06</option>
                                    <option value="GP07">GP07</option>
                                    <option value="GP08">GP08</option>
                                </Field>
                            </div>
                            {touched.maNhom && errors.maNhom ? <span className="error__message">{errors.maNhom}</span> : ""}
                        </div>
                    </div>
                    <div className="form__content">
                        <div className="form__item">
                            <label for="maPhim">Mã phim</label>
                            <div className="form__group">
                                <div className="form__input">
                                    <Field id="maPhim" name="maPhim" onChange={handleChange} onBlur={handleBlur} value={values.maPhim} disabled={true} />
                                </div>
                            </div>
                        </div>
                        <div className={touched.ngayChieuGioChieu && errors.ngayChieuGioChieu ? "form__item animation" : "form__item"}>
                            <label for="ngayChieuGioChieu">Ngày khởi chiếu</label>
                            <div className="form__group">
                                <div className="form__input">
                                    <Field id="ngayChieuGioChieu" name="ngayChieuGioChieu" onChange={handleChange} onBlur={handleBlur} />
                                    <span className={touched.ngayChieuGioChieu && errors.ngayChieuGioChieu ? "error-icon show-icon" : "error-icon"}><i class="fa fa-exclamation-circle"></i></span>
                                </div>
                            </div>
                            {touched.ngayChieuGioChieu && errors.ngayChieuGioChieu ? <span className="error__message">{errors.ngayChieuGioChieu}</span> : ""}
                        </div>
                        <div className={touched.giaVe && errors.giaVe ? "form__item animation" : "form__item"}>
                            <label for="giaVe">Giá vé</label>
                            <div className="form__group">
                                <div className="form__input">
                                    <Field id="giaVe" name="giaVe" onChange={handleChange} onBlur={handleBlur} />
                                    <span className={touched.giaVe && errors.giaVe ? "error-icon show-icon" : "error-icon"}><i class="fa fa-exclamation-circle"></i></span>
                                </div>
                            </div>
                            {touched.giaVe && errors.giaVe ? <span className="error__message">{errors.giaVe}</span> : ""}
                        </div>
                        <div className="form__button">
                            <NavLink to="/film_manage" className="button"><i class="fa fa-angle-double-left"></i><span>Quay lại</span></NavLink>
                            <button className="button" type="submit" disabled={!isValid}>Tạo lịch chiếu</button>
                        </div>
                    </div>
                </Form>
            </Formik>
        </div>
    );
}

export default Schedule;