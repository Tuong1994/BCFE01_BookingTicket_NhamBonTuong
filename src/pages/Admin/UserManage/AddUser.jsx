import { Field, Form, Formik, useFormik } from 'formik';
import * as yup from "yup";
import React from 'react';
import { useDispatch } from 'react-redux';
import { addUserAction } from '../../../redux/action/AdminAction';
import { phoneRegExp } from '../../../configs/setting';
import { NavLink } from 'react-router-dom';

function AddUser(props) {
    let dispatch = useDispatch();
    const { handleChange, handleSubmit, handleBlur, touched, errors, isValid } = useFormik({
        initialValues: {
            taiKhoan: "",
            matKhau: "",
            hoTen: "",
            email: "",
            soDt: "",
            maNhom: "",
            maLoaiNguoiDung: "",
        },
        validationSchema: yup.object().shape({
            taiKhoan: yup.string()
                .min(2, "Ít nhất 2 ký tự")
                .max(15, "Dài nhất 15 ký tự")
                .required("Không được để trống"),
            matKhau: yup.string()
                .required("Không được để trống"),
            hoTen: yup.string()
                .min(2, "Ít nhất 2 ký tự")
                .max(20, "Dài nhất 20 ký tự")
                .required("Không được để trống"),
            email: yup.string()
                .email("Không hợp lệ")
                .required("Không được để trống"),
            soDt: yup.string()
                .matches(phoneRegExp, "Không hợp lệ")
                .min(2, "Ít nhất 2 ký tự")
                .max(10, "Dài nhất 10 ký tự")
                .required("Không được để trống"),
        }),
        onSubmit: (values) => {
            console.log(values);
            dispatch(addUserAction(values));
        }

    })
    return (
        <div className="adduser-wrapper">
            <h3>Thêm người dùng</h3>
            <Formik>
                <Form className="adduser__form" onSubmit={handleSubmit}>
                    <div className={touched.taiKhoan && errors.taiKhoan ? "form__item animation" : "form__item"}>
                        <label for="taiKhoan">Tài khoản</label>
                        <div className="form__input">
                            <Field id="taiKhoan" type="text" name="taiKhoan" className="input" onChange={handleChange} onBlur={handleBlur} />
                            <span className={touched.taiKhoan && errors.taiKhoan ? "error-icon show-icon" : "error-icon"}><i class="fa fa-exclamation-circle"></i></span>
                        </div>
                        {touched.taiKhoan && errors.taiKhoan ? <span className="error__message">{errors.taiKhoan}</span> : ""}
                    </div>

                    <div className={touched.matKhau && errors.matKhau ? "form__item animation" : "form__item"}>
                        <label for="matKhau">Mật khẩu</label>
                        <div className="form__input">
                            <Field id="matKhau" type="text" name="matKhau" className="input" onChange={handleChange} onBlur={handleBlur} />
                            <span className={touched.matKhau && errors.matKhau ? "error-icon show-icon" : "error-icon"}><i class="fa fa-exclamation-circle"></i></span>
                        </div>
                        {touched.matKhau && errors.matKhau ? <span className="error__message">{errors.matKhau}</span> : ""}
                    </div>

                    <div className={touched.hoTen && errors.hoTen ? "form__item animation" : "form__item"}>
                        <label for="hoTen">Họ tên</label>
                        <div className="form__input">
                            <Field id="hoTen" type="text" name="hoTen" className="input" onChange={handleChange} onBlur={handleBlur} />
                            <span className={touched.hoTen && errors.hoTen ? "error-icon show-icon" : "error-icon"}><i class="fa fa-exclamation-circle"></i></span>
                        </div>
                        {touched.hoTen && errors.hoTen ? <span className="error__message">{errors.hoTen}</span> : ""}
                    </div>

                    <div className={touched.email && errors.email ? "form__item animation" : "form__item"}>
                        <label for="email">Email</label>
                        <div className="form__input">
                            <Field id="email" type="text" name="email" type="text" className="input" onChange={handleChange} onBlur={handleBlur} />
                            <span className={touched.email && errors.email ? "error-icon show-icon" : "error-icon"}><i class="fa fa-exclamation-circle"></i></span>
                        </div>
                        {touched.email && errors.email ? <span className="error__message">{errors.email}</span> : ""}
                    </div>

                    <div className="form__item">
                        <label for="maNhom">Mã nhóm</label>
                        <Field as="select" id="maNhom" name="maNhom" className="form__input" onChange={handleChange} onBlur={handleBlur}>
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
                            <Field id="soDt" name="soDt" type="text" className="input" onChange={handleChange} onBlur={handleBlur} />
                            <span className={touched.soDt && errors.soDt ? "error-icon show-icon" : "error-icon"}><i class="fa fa-exclamation-circle"></i></span>
                        </div>
                        {touched.soDt && errors.soDt ? <span className="error__message">{errors.soDt}</span> : ""}
                    </div>

                    <div className="form__item">
                        <label for="maLoaiNguoiDung">Loại người dùng</label>
                        <Field as="select" id="maLoaiNguoiDung" name="maLoaiNguoiDung" className="form__input" onChange={handleChange} onBlur={handleBlur}>
                            <option>Chọn loại người dùng</option>
                            <option value="KhachHang">Khách Hàng</option>
                            <option value="QuanTri">Quản trị viên</option>
                        </Field>
                    </div>

                    <div className="form__button">
                        <NavLink className="btn-blue" to="/user_manage"><i class="fa fa-angle-double-left"></i><span>Quay lại</span></NavLink>
                        <button className="button" type="submit" disabled={!isValid}>Thêm người dùng</button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
}

export default AddUser;