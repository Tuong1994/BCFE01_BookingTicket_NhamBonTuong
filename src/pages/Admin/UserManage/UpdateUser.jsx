import { Field, Form, Formik, useFormik } from 'formik';
import * as yup from "yup";
import React from 'react';
import { phoneRegExp } from '../../../configs/setting';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserAction } from '../../../redux/action/AdminAction';
import {NavLink} from 'react-router-dom';

function UpdateUser(props) {
    const { user } = useSelector(state => state.AdminReducer);
    let dispatch = useDispatch();
    const { handleChange, handleBlur, handleSubmit, touched, errors, isValid, values } = useFormik({
        initialValues: {
            taiKhoan: user.taiKhoan,
            matKhau: user.matKhau,
            email: user.email,
            soDt: user.soDt,
            maNhom: user.maNhom,
            maLoaiNguoiDung: user.maLoaiNguoiDung,
            hoTen: user.hoTen
        },
        validationSchema: yup.object().shape({
            taiKhoan: yup.string()
                .min(2, "Ít nhất 2 ký tự")
                .max(20, "Dài nhất 20 ký tự")
                .required("Không được để trống"),
            matKhau: yup.string()
                .required("Không được để trống"),
            email: yup.string()
                .email("Không hợp lệ")
                .required("Không được để trống"),
            soDt: yup.string()
                .matches(phoneRegExp, "Không hợp lệ")
                .min(2, "Ít nhất 2 ký tự")
                .max(10, "Dài nhất 10 ký tự")
                .required("Không được để trống"),
            hoTen: yup.string()
                .required("Không được để trống")
        }),
        onSubmit: (values) => {
            dispatch(updateUserAction(values));
            console.log("updateUser", values);
        }
    })
    return (
        <div className="updateuser-wrapper">
            <h3>Cập nhật người dùng</h3>
            <Formik>
                <Form className="updateuser__form" onSubmit={handleSubmit}>
                    <div className={touched.taiKhoan && errors.taiKhoan ? "form__item animation" : "form__item"}>
                        <label for="taiKhoan">Tài khoản</label>
                        <div className="form__input">
                            <Field className="input" id="taiKhoan" type="text"  value={values.taiKhoan} disabled={true} name="taiKhoan" onChange={handleChange} onBlur={handleBlur} />
                            <span className={touched.taiKhoan && errors.taiKhoan ? "error-icon show-icon" : "error-icon"}><i class="fa fa-exclamation-circle"></i></span>
                        </div>
                        {touched.taiKhoan && errors.taiKhoan ? <span className="error__message">{errors.taiKhoan}</span> : ""}
                    </div>

                    <div className={touched.matKhau && errors.matKhau ? "form__item animation" : "form__item"}>
                        <label for="matKhau">Mật khẩu</label>
                        <div className="form__input">
                            <Field className="input" id="matKhau" type="text" value={values.matKhau} name="matKhau" onChange={handleChange} onBlur={handleBlur} />
                            <span className={touched.matKhau && errors.matKhau ? "error-icon show-icon" : "error-icon"}><i class="fa fa-exclamation-circle"></i></span>
                        </div>
                        {touched.matKhau && errors.matKhau ? <span className="error__message">{errors.matKhau}</span> : ""}
                    </div>

                    <div className={touched.hoTen && errors.hoTen ? "form__item animation" : "form__item"}>
                        <label for="hoTen">Họ tên</label>
                        <div className="form__input">
                            <Field className="input" id="hoTen" type="text" value={values.hoTen} name="hoTen" onChange={handleChange} onBlur={handleBlur} />
                            <span className={touched.hoTen && errors.hoTen ? "error-icon show-icon" : "error-icon"}><i class="fa fa-exclamation-circle"></i></span>
                        </div>
                        {touched.hoTen && errors.hoTen ? <span className="error__message">{errors.hoTen}</span> : ""}
                    </div>

                    <div className={touched.email && errors.email ? "form__item animation" : "form__item"}>
                        <label for="email">Email</label>
                        <div className="form__input">
                            <Field className="input" id="email" type="text" value={values.email} name="email" onChange={handleChange} onBlur={handleBlur} />
                            <span className={touched.email && errors.email ? "error-icon show-icon" : "error-icon"}><i class="fa fa-exclamation-circle"></i></span>
                        </div>
                        {touched.email && errors.email ? <span className="error__message">{errors.email}</span> : ""}
                    </div>

                    <div className="form__item">
                        <label for="maNhom">Mã nhóm</label>
                        <Field className="input" as="select" id="maNhom" name="maNhom" className="form__input" value={values.maNhom} onChange={handleChange} onBlur={handleBlur} >
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

                    <div className={touched.soDt && errors.soDt ? "form__item animation" : "form__item"}>
                        <label for="soDt">Số điện thoại</label>
                        <div className="form__input">
                            <Field className="input" id="soDt" type="text" value={values.soDt} name="soDt" onChange={handleChange} onBlur={handleBlur} />
                            <span className={touched.soDt && errors.soDt ? "error-icon show-icon" : "error-icon"}><i class="fa fa-exclamation-circle"></i></span>
                        </div>
                        {touched.soDt && errors.soDt ? <span className="error__message">{errors.soDt}</span> : ""}
                    </div>

                    <div className="form__item">
                        <label for="maLoaiNguoiDung">Loại người dùng</label>
                        <Field className="input" as="select" id="maLoaiNguoiDung" name="maLoaiNguoiDung" value={values.maLoaiNguoiDung} className="form__input" onChange={handleChange} onBlur={handleBlur} >
                            <option>Chọn loại người dùng</option>
                            <option value="KhachHang">Khách Hàng</option>
                            <option value="QuanTri">Quản trị viên</option>
                        </Field>
                    </div>

                    <div className="form__button">
                        <NavLink to="/user_manage" className="btn-blue"><i class="fa fa-angle-double-left"></i><span>Quay lại</span></NavLink>
                        <button className="button" type="submit" disabled={!isValid}>Cập nhật</button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
}

export default UpdateUser;