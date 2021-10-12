import React, { useState } from 'react';
import * as yup from "yup";
import ButtonLoading from '../../../component/Loading/ButtonLoading';
import { NavLink } from 'react-router-dom';
import { Formik, Form, Field, useFormik } from "formik";
import { useDispatch, useSelector } from 'react-redux';
import { phoneRegExp } from '../../../configs/setting';
import { updateUserAction } from '../../../redux/action/AdminAction';

function UpdateUser(props) {
    const { user } = useSelector(state => state.AdminReducer);
    const { btnLoading } = useSelector(state => state.LoadingReducer);
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const { handleChange, handleBlur, handleSubmit, touched, errors, isValid, values } = useFormik({
        initialValues: {
            taiKhoan: user.taiKhoan,
            matKhau: user.matKhau,
            email: user.email,
            hoTen: user.hoTen,
            soDt: user.soDt,
            maNhom: user.maNhom,
            maLoaiNguoiDung: user.maLoaiNguoiDung
        },
        validationSchema: yup.object().shape({
            taiKhoan: yup.string()
                .min(2, "Nhập ít nhất 2 ký tự")
                .max(15, "Dài nhất 20 ký tự")
                .required("Vui lòng không để trống"),
            matKhau: yup.string()
                .min(2, "Nhập ít nhất 2 ký tự")
                .max(20, "Dài nhất 20 ký tự")
                .required("Vui lòng không để trống"),
            email: yup.string()
                .email("Không hợp lệ")
                .required("Vui lòng không để trống"),
            hoTen: yup.string()
                .required("Vui lòng không để trống"),
            soDt: yup.string()
                .matches(phoneRegExp, "Không hợp lệ")
                .min(2, "Nhập ít nhất 2 ký tự")
                .max(10, "Dài nhất 10 ký tự")
                .required("Vui lòng không để trống"),
            maNhom: yup.string()
                .required("Bạn chưa chọn mã nhóm"),
            maLoaiNguoiDung: yup.string()
                .required("Bạn chưa chọn loại người dùng")
        }),
        onSubmit: (values) => {
            dispatch(updateUserAction(values));
        }
    })

    return (
        <div className="update-user">
            <div className="update-user__wrapper">
                <h5>Cập Nhật Người Dùng</h5>
                <Formik>
                    <Form className="wrapper__form" autoComplete="off" onSubmit={handleSubmit}>
                        <div className="form__group">
                            <div className="form__item">
                                <div className="form__content">
                                    <Field className="form__input" type="text" placeholder=" " name="taiKhoan" onChange={handleChange} onBlur={handleBlur} value={values.taiKhoan} />
                                    <label className="form__label">Tài Khoản</label>
                                </div>
                                {touched.taiKhoan && errors.taiKhoan ? <span className="error__message">{errors.taiKhoan}</span> : null}
                            </div>
                            <div className="form__item">
                                <div className="form__content">
                                    <Field className="form__input" type={showPassword ? "text" : "password"} placeholder=" " name="matKhau" onChange={handleChange} onBlur={handleBlur} value={values.matKhau} />
                                    <label className="form__label">Mật Khẩu</label>
                                    <button type="button" className="password__btn" title="Show password" onClick={() => {
                                        setShowPassword(!showPassword)
                                    }}>
                                        {showPassword ? <i class="fa fa-eye-slash"></i> : <i class="fa fa-eye"></i>}
                                    </button>
                                </div>
                                {touched.matKhau && errors.matKhau ? <span className="error__message">{errors.matKhau}</span> : null}
                            </div>
                        </div>

                        <div className="form__group">
                            <div className="form__item">
                                <div className="form__content">
                                    <Field input className="form__input" type="text" placeholder=" " name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} />
                                    <label className="form__label">Email</label>
                                </div>
                                {touched.email && errors.email ? <span className="error__message">{errors.email}</span> : null}
                            </div>
                            <div className="form__item">
                                <div className="form__content">
                                    <Field className="form__input" type="text" placeholder=" " name="hoTen" onChange={handleChange} onBlur={handleBlur} value={values.hoTen} />
                                    <label className="form__label">Họ Tên</label>
                                </div>
                                {touched.hoTen && errors.hoTen ? <span className="error__message">{errors.hoTen}</span> : null}
                            </div>
                            <div className="form__item">
                                <div className="form__content">
                                    <Field className="form__input" type="phone" placeholder=" " name="soDt" onChange={handleChange} onBlur={handleBlur} value={values.soDt} />
                                    <label className="form__label">Số Điện Thoại</label>
                                </div>
                                {touched.soDt && errors.soDt ? <span className="error__message">{errors.soDt}</span> : null}
                            </div>
                        </div>

                        <hr />

                        <div className="form__group">
                            <div className="form__item">
                                <div className="form__content">
                                    <Field as="select" className="form__input" name="maNhom" id="select" name="maNhom" onChange={handleChange} onBlur={handleBlur} value={values.maNhom} >
                                        <option>Chọn Mã Nhóm</option>
                                        <option value="GP01">GP01</option>
                                        <option value="GP02">GP02</option>
                                        <option value="GP03">GP03</option>
                                        <option value="GP04">GP04</option>
                                        <option value="GP05">GP05</option>
                                        <option value="GP06">GP06</option>
                                        <option value="GP07">GP07</option>
                                        <option value="GP08">GP08</option>
                                        <option value="GP09">GP09</option>
                                    </Field>
                                </div>
                                {touched.maNhom && errors.maNhom ? <span className="error__message">{errors.maNhom}</span> : null}
                            </div>
                            <div className="form__item">
                                <div className="form__content">
                                    <Field as="select" className="form__input" name="maNhom" id="select" name="maLoaiNguoiDung" onChange={handleChange} onBlur={handleBlur} value={values.maLoaiNguoiDung} >
                                        <option>Chọn Loại Người Dùng</option>
                                        <option value="KhachHang">Khách Hàng</option>
                                        <option value="QuanTri">Quản Trị Viên</option>
                                    </Field>
                                </div>
                                {touched.maLoaiNguoiDung && errors.maLoaiNguoiDung ? <span className="error__message">{errors.maLoaiNguoiDung}</span> : null}
                            </div>
                        </div>

                        <div className="form__button">
                            <NavLink to="/user_manage" className="btn-blue">
                                <i class="fa fa-angle-double-left"></i><span>Quay lại</span>
                            </NavLink>
                            {!isValid ?
                                <button className="button__disabled" disabled={true}>Cập Nhật Người Dùng</button>
                                :
                                <button className={btnLoading ? "button button-loading" : "button"} type="submit" disabled={!isValid} onClick={() => {
                                    dispatch({
                                        type: "openBtnLoading"
                                    })
                                }}>
                                    <ButtonLoading />
                                    <span>Cập Nhật Người Dùng</span>
                                </button>
                            }
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}

export default UpdateUser;