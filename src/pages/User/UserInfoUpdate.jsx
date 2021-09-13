import React from 'react';
import * as yup from 'yup';
import { phoneRegExp } from '../../configs/setting';
import { Formik, Form, Field, useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import ButtonLoading from '../../component/Loading/ButtonLoading';
import { useState } from 'react';
import { updateAction } from '../../redux/action/UserAction';

function UserInfoUpdate() {
    const [showPassword, setShowPassword] = useState(false);
    const { accountInfo, userBookedInfo } = useSelector(state => state.UserReducer);
  
    let dispatch = useDispatch();
    const { handleChange, handleBlur, handleSubmit, handleReset, touched, errors, isValid, values } = useFormik({
        initialValues: {
            taiKhoan: accountInfo.taiKhoan,
            matKhau: userBookedInfo.matKhau,
            email: accountInfo.email,
            hoTen: accountInfo.hoTen,
            soDt: accountInfo.soDT,
            maNhom: accountInfo.maNhom,
            maLoaiNguoiDung: accountInfo.maLoaiNguoiDung,
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
        }),
        onSubmit: (values) => {
            dispatch(updateAction(values));
        }
    })

    return (
        <div className="user-info-update__wrapper">
            <Formik>
                <Form className="wrapper__form" onSubmit={handleSubmit} autoComplete="off">
                    <div className="form__item">
                        <div className="form__content">
                            <Field className="form__input" type="text" placeholder=" " name="taiKhoan" value={values.taiKhoan} onChange={handleChange} onBlur={handleBlur} disabled={true} />
                            <label className="form__label">Tài Khoản</label>
                        </div>
                        {touched.taiKhoan && errors.taiKhoan ? <span className="error__message">{errors.taiKhoan}</span> : null}
                    </div>
                    <div className="form__item">
                        <div className="form__content">
                            <Field className="form__input" type={showPassword ? "text" : "password"} placeholder=" " name="matKhau" value={values.matKhau} onChange={handleChange} onBlur={handleBlur} />
                            <label className="form__label">Mật Khẩu</label>
                            <button type="button" className="password__btn" title="Show password" onClick={() => {
                                setShowPassword(!showPassword)
                            }}>
                                {showPassword ? <i class="fa fa-eye-slash"></i> : <i class="fa fa-eye"></i>}
                            </button>
                        </div>
                        {touched.matKhau && errors.matKhau ? <span className="error__message">{errors.matKhau}</span> : null}
                    </div>
                    <div className="form__item">
                        <div className="form__content">
                            <Field className="form__input" type="text" placeholder=" " name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                            <label className="form__label">Email</label>
                        </div>
                        {touched.email && errors.email ? <span className="error__message">{errors.email}</span> : null}
                    </div>
                    <div className="form__item">
                        <div className="form__content">
                            <Field className="form__input" type="text" placeholder=" " name="hoTen" value={values.hoTen} onChange={handleChange} onBlur={handleBlur} />
                            <label className="form__label">Họ Tên</label>
                        </div>
                        {touched.hoTen && errors.hoTen ? <span className="error__message">{errors.hoTen}</span> : null}
                    </div>
                    <div className="form__item">
                        <div className="form__content">
                            <Field className="form__input" type="phone" placeholder=" " name="soDt" value={values.soDt} onChange={handleChange} onBlur={handleBlur} />
                            <label className="form__label">Số Điện Thoại</label>
                        </div>
                        {touched.soDt && errors.soDt ? <span className="error__message">{errors.soDt}</span> : null}
                    </div>
                    <div className="form__button">
                        <button className="button" type="submit" disabled={!isValid} onReset={handleReset} onClick={() => {
                            dispatch({
                                type: "openBtnLoading",
                            });
                        }}>
                            <ButtonLoading />
                            <span>Cập nhật</span>
                        </button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
}

export default UserInfoUpdate;