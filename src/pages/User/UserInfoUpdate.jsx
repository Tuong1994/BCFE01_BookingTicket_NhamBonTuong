import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import { phoneRegExp } from '../../configs/setting';
import { Formik, Form, Field, useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { updateAction } from "../../redux/action/UserAction";
import ButtonLoading from '../../component/Loading/ButtonLoading';

function UserInfoUpdate({ showForm, setShowForm, userBookedInfo }) {
    const { accountInfo } = useSelector(state => state.UserReducer);
    const [password, setPassword] = useState(false);
    const [passwordConfirm, setPasswordConfirm] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        if (showForm) {
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.body.style.overflow = "unset";
        }
    }, [showForm])
    const { handleChange, handleBlur, handleSubmit, touched, errors, isValid, values } = useFormik({
        initialValues: {
            taiKhoan: accountInfo.taiKhoan,
            matKhau: userBookedInfo.matKhau,
            xacNhanMatKhau: userBookedInfo.matKhau,
            email: accountInfo.email,
            hoTen: accountInfo.hoTen,
            soDT: accountInfo.soDT,
            maNhom: accountInfo.maNhom,
            maLoaiNguoiDung: accountInfo.maLoaiNguoiDung,
        },
        validationSchema: yup.object().shape({
            taiKhoan: yup.string()
                .min(2, "Nhập ít nhất 2 ký tự")
                .max(15, "Dài nhất 20 ký tự")
                .required("Vui lòng không để trống"),
            matKhau: yup.string()
                .required("Vui lòng không để trống"),
            xacNhanMatKhau: yup.string()
                .oneOf([yup.ref("matKhau")], "Mật khẩu không đúng")
                .required("Vui lòng không để trống"),
            email: yup.string()
                .email("Không hợp lệ")
                .required("Vui lòng không để trống"),
            hoTen: yup.string()
                .required("Vui lòng không để trống"),
            soDT: yup.string()
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
        <div className={showForm ? "user-info-update__wrapper show-form" : "user-info-update__wrapper"}>
            <Formik>
                <Form className="wrapper__form" onSubmit={handleSubmit} autoComplete="off">
                    <button type="button" className="form__closebtn" onClick={() => {
                        setShowForm(false);
                    }}>
                        <i className="fa fa-times"></i>
                    </button>
                    <h4>Cập nhật thông tin</h4>

                    <div className="form__group">
                        <div className="form__item">
                            <div className="form__content">
                                <Field className="form__input" type="text" placeholder=" " name="taiKhoan" value={values.taiKhoan} onChange={handleChange} onBlur={handleBlur} disabled={true} />
                                <label className="form__label">Tài Khoản</label>
                            </div>
                            {touched.taiKhoan && errors.taiKhoan ? <span className="error__message">{errors.taiKhoan}</span> : null}
                        </div>
                        <div className="form__item">
                            <div className="form__content">
                                <Field className="form__input" type={password ? "text" : "password"} placeholder=" " name="matKhau" value={values.matKhau} onChange={handleChange} onBlur={handleBlur} />
                                <label className="form__label">Mật khẩu</label>
                                <span className="password__btn" onClick={() => {
                                    setPassword(!password)
                                }}>
                                    <i className={password ? "fa fa-eye-slash" : "fa fa-eye"}></i>
                                </span>
                            </div>
                            {touched.matKhau && errors.matKhau ? <span className="error__message">{errors.matKhau}</span> : null}
                        </div>
                        <div className="form__item">
                            <div className="form__content">
                                <Field className="form__input" type={passwordConfirm ? "text" : "password"} placeholder=" " name="xacNhanMatKhau" value={values.matKhau} onChange={handleChange} onBlur={handleBlur} />
                                <label className="form__label">Nhập lại mật khẩu</label>
                                <span className="password__btn" onClick={() => {
                                    setPasswordConfirm(!passwordConfirm)
                                }}>
                                    <i className={passwordConfirm ? "fa fa-eye-slash" : "fa fa-eye"}></i>
                                </span>
                            </div>
                            {touched.xacNhanMatKhau && errors.xacNhanMatKhau ? <span className="error__message">{errors.xacNhanMatKhau}</span> : null}
                        </div>
                    </div>

                    <div className="form__group">
                        <div className="form__item">
                            <div className="form__content">
                                <Field className="form__input" type="text" placeholder=" " name="hoTen" value={values.hoTen} onChange={handleChange} onBlur={handleBlur} />
                                <label className="form__label">Họ Tên</label>
                            </div>
                            {touched.hoTen && errors.hoTen ? <span className="error__message">{errors.hoTen}</span> : null}
                        </div>
                        <div className="form__item">
                            <div className="form__content">
                                <Field className="form__input" type="phone" placeholder=" " name="soDT" value={values.soDT} onChange={handleChange} onBlur={handleBlur} />
                                <label className="form__label">Số Điện Thoại</label>
                            </div>
                            {touched.soDT && errors.soDT ? <span className="error__message">{errors.soDT}</span> : null}
                        </div>
                        <div className="form__item">
                            <div className="form__content">
                                <Field className="form__input" type="text" placeholder=" " name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                                <label className="form__label">Email</label>
                            </div>
                            {touched.email && errors.email ? <span className="error__message">{errors.email}</span> : null}
                        </div>
                    </div>

                    <div className="form__button">
                        {!isValid ?
                            <button className="button__disabled" disabled={true}>Cập nhật</button>
                            :
                            <button className="button" type="submit" disabled={!isValid} onClick={() => {
                                dispatch({
                                    type: "openBtnLoading",
                                });
                            }}>
                                <ButtonLoading />
                                <span>Cập nhật</span>
                            </button>
                        }
                    </div>
                </Form>
            </Formik>
        </div>
    );
}

export default UserInfoUpdate;