import React, { useState } from 'react';
import * as yup from "yup";
import ButtonLoading from '../../../component/Loading/ButtonLoading';
import { Field, Formik, Form, useFormik } from "formik";
import { phoneRegExp } from '../../../configs/setting';
import { useDispatch } from 'react-redux';
import { addUserAction } from '../../../redux/action/AdminAction';
import { useSelector } from 'react-redux';

function AddUser({ addUser, setAddUser }) {
    const { btnLoading } = useSelector(state => state.LoadingReducer);
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const { handleChange, handleBlur, handleSubmit, touched, errors, isValid } = useFormik({
        initialValues: {
            taiKhoan: "",
            matKhau: "",
            email: "",
            hoTen: "",
            soDt: "",
            maNhom: "",
            maLoaiNguoiDung: "",
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
            dispatch(addUserAction(values));
        }
    });

    return (
        <div className={addUser ? "add-user active" : "add-user"}>
            <div className="add-user__bg">
                <div className="add-user__wrapper">
                    <button className="wrapper__btn" onClick={() => {
                        setAddUser(false)
                    }}><i class="fa fa-times"></i></button>
                    <h5>Thêm Người Dùng</h5>
                    <Formik>
                        <Form className="wrapper__form" onSubmit={handleSubmit} autoComplete="off">
                            <div className="form__group">
                                <div className="form__item">
                                    <div className="form__content">
                                        <Field className="form__input" type="text" placeholder=" " name="taiKhoan" onChange={handleChange} onBlur={handleBlur} />
                                        <label className="form__label">Tài Khoản</label>
                                    </div>
                                    {touched.taiKhoan && errors.taiKhoan ? <span className="error__message">{errors.taiKhoan}</span> : null}
                                </div>
                                <div className="form__item">
                                    <div className="form__content">
                                        <Field className="form__input" type={showPassword ? "text" : "password"} placeholder=" " name="matKhau" onChange={handleChange} onBlur={handleBlur} />
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
                                        <Field className="form__input" type="text" placeholder=" " name="email" onChange={handleChange} onBlur={handleBlur} />
                                        <label className="form__label">Email</label>
                                    </div>
                                    {touched.email && errors.email ? <span className="error__message">{errors.email}</span> : null}
                                </div>
                                <div className="form__item">
                                    <div className="form__content">
                                        <Field className="form__input" type="text" placeholder=" " name="hoTen" onChange={handleChange} onBlur={handleBlur} />
                                        <label className="form__label">Họ Tên</label>
                                    </div>
                                    {touched.hoTen && errors.hoTen ? <span className="error__message">{errors.hoTen}</span> : null}
                                </div>
                                <div className="form__item">
                                    <div className="form__content">
                                        <Field className="form__input" type="phone" placeholder=" " name="soDt" onChange={handleChange} onBlur={handleBlur} />
                                        <label className="form__label">Số Điện Thoại</label>
                                    </div>
                                    {touched.soDt && errors.soDt ? <span className="error__message">{errors.soDt}</span> : null}
                                </div>
                            </div>

                            <hr />

                            <div className="form__group">
                                <div className="form__item">
                                    <div className="form__content">
                                        <Field as="select" className="form__input" name="maNhom" id="maNhom" name="maNhom" onChange={handleChange} onBlur={handleBlur}>
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
                                        <Field as="select" className="form__input" name="maNhom" id="maLoaiNguoiDung" name="maLoaiNguoiDung" onChange={handleChange} onBlur={handleBlur}>
                                            <option>Chọn Loại Người Dùng</option>
                                            <option value="KhachHang">Khách Hàng</option>
                                            <option value="QuanTri">Quản Trị Viên</option>
                                        </Field>
                                    </div>
                                    {touched.maLoaiNguoiDung && errors.maLoaiNguoiDung ? <span className="error__message">{errors.maLoaiNguoiDung}</span> : null}
                                </div>
                            </div>

                            <div className="form__button">
                                {!isValid ?
                                    <button className="button__disabled" disabled={true}>Thêm người dùng</button>
                                    :
                                    <button className={btnLoading ? "button button-loading" : "button"} type="submit" disabled={!isValid} onClick={() => {
                                        dispatch({
                                            type: "openBtnLoading",
                                        });
                                    }}>
                                        <ButtonLoading />
                                        <span>Thêm Người Dùng</span>
                                    </button>
                                }
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    );
}

export default AddUser;