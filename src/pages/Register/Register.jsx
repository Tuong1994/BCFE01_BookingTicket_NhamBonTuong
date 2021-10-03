import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as yup from "yup";
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUpAction } from '../../redux/action/UserAction';
import { phoneRegExp } from '../../configs/setting';
import Loading from '../../component/Loading/Loading';
import ButtonLoading from '../../component/Loading/ButtonLoading';

function Register(props) {
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

    useEffect(() => {
        dispatch({
            type: "openLoading",
        })
    }, []);
    useEffect(() => {
        setTimeout(() => {
            dispatch({
                type: "closeLoading"
            })
        }, 1000)
    }, [])

    let dispatch = useDispatch()
    const { handleChange, handleBlur, handleSubmit, touched, errors, isValid } = useFormik({
        initialValues: {
            hoTen: "",
            soDt: "",
            taiKhoan: "",
            email: "",
            matKhau: "",
            passwordConfirm: "",
            maLoaiNguoiDung: "KhachHang",
            maNhom: "GP01",
        },
        validationSchema: yup.object().shape({
            hoTen: yup.string()
                .min(2, "Ít nhất 2 ký tự")
                .max(20, "Dài nhất 20 ký tự")
                .required("Không được để trống"),
            soDt: yup.string()
                .matches(phoneRegExp, "Không hợp lệ")
                .min(2, "Ít nhất 2 ký tự")
                .max(10, "Dài nhất 10 ký tự")
                .required("Không được để trống"),
            taiKhoan: yup.string()
                .min(2, "Ít nhaatsa 2 ký tự")
                .max(15, "Dài nhất 15 ký tự")
                .required("Không được để trống"),
            email: yup.string()
                .email("Không hợp lệ")
                .required("Không được để trống"),
            matKhau: yup.string()
                .required("Không được để trống"),
            passwordConfirm: yup.string()
                .oneOf([yup.ref("matKhau")], "Mật khẩu không đúng")
                .required("Không được để trống")
        }),
        onSubmit: (values) => {
            dispatch(signUpAction(values));
        }
    })

    return (
        <div className="register-container">
            <Loading />
            <form className="register__form" onSubmit={handleSubmit}>
                <h3>Đăng ký</h3>
                <div className={touched.taiKhoan && errors.taiKhoan ? "form__item animation" : "form__item group-1"}>
                    <label for="userName"><i class="fa fa-user"></i></label>
                    <div className="form__group">
                        <div className="form__input">
                            <input type="text" id="userName" name="taiKhoan" placeholder="Tài khoản..." onChange={handleChange} onBlur={handleBlur} />
                            <span className={touched.taiKhoan && errors.taiKhoan ? "error-icon show-icon" : "error-icon"}><i class="fa fa-exclamation-circle"></i></span>
                        </div>
                        {touched.taiKhoan && errors.taiKhoan ? <span className="error__message">{errors.taiKhoan}</span> : ""}
                    </div>
                </div>

                <div className={touched.matKhau && errors.matKhau ? "form__item animation" : "form__item group-1"}>
                    <label for="password"><i class="fa fa-lock"></i></label>
                    <div className="form__group">
                        <div className="form__input">
                            <input type={showPassword ? "text" : "password"} id="password" name="matKhau" placeholder="Mật khẩu..." onChange={handleChange} onBlur={handleBlur} />
                            <span className={touched.matKhau && errors.matKhau ? "error-icon show-icon" : "error-icon"}><i class="fa fa-exclamation-circle"></i></span>
                            <div className="password__btn" title="Show password" onClick={() => {
                                setShowPassword(!showPassword)
                            }}>
                                {showPassword ? <i class="fa fa-eye-slash"></i> : <i class="fa fa-eye"></i>}
                            </div>
                        </div>
                        {touched.matKhau && errors.matKhau ? <span className="error__message">{errors.matKhau}</span> : ""}
                    </div>
                </div>

                <div className={touched.passwordConfirm && errors.passwordConfirm ? "form__item animation" : "form__item"}>
                    <label for="passwordConfirm"><i class="fa fa-key"></i></label>
                    <div className="form__group">
                        <div className="form__input">
                            <input type={showPasswordConfirm ? "text" : "password"} id="passwordConfirm" name="passwordConfirm" placeholder="Xác nhận mật khẩu..." onChange={handleChange} onBlur={handleBlur} />
                            <span className={touched.passwordConfirm && errors.passwordConfirm ? "error-icon show-icon" : "error-icon"}><i class="fa fa-exclamation-circle"></i></span>
                            <div className="password__btn" title="Show password" onClick={() => {
                                setShowPasswordConfirm(!showPasswordConfirm)
                            }}>
                                {showPasswordConfirm ? <i class="fa fa-eye-slash"></i> : <i class="fa fa-eye"></i>}
                            </div>
                        </div>
                        {touched.passwordConfirm && errors.passwordConfirm ? <span className="error__message">{errors.passwordConfirm}</span> : ""}
                    </div>
                </div>

                <h6>Thông tin cá nhân</h6>
                <hr />
                <div className={touched.hoTen && errors.hoTen ? "form__item animation" : "form__item"} >
                    <label for="firstName"><i class="fa fa-user-edit"></i></label>
                    <div className="form__group">
                        <div className="form__input">
                            <input type="text" id="firstName" name="hoTen" placeholder="Họ tên..." onChange={handleChange} onBlur={handleBlur} />
                            <span className={touched.hoTen && errors.hoTen ? "error-icon show-icon" : "error-icon"}><i class="fa fa-exclamation-circle"></i></span>
                        </div>
                        {touched.hoTen && errors.hoTen ? <span className="error__message">{errors.hoTen}</span> : ""}
                    </div>
                </div>

                <div className={touched.soDt && errors.soDt ? "form__item animation" : "form__item"} >
                    <label for="phone"><i class="fa fa-phone"></i></label>
                    <div className="form__group">
                        <div className="form__input">
                            <input type="text" id="phone" name="soDt" placeholder="Số điện thoại..." onChange={handleChange} onBlur={handleBlur} />
                            <span className={touched.soDt && errors.soDt ? "error-icon show-icon" : "error-icon"}><i class="fa fa-exclamation-circle"></i></span>
                        </div>
                        {touched.soDt && errors.soDt ? <span className="error__message">{errors.soDt}</span> : ""}
                    </div>
                </div>

                <div className={touched.email && errors.email ? "form__item animation" : "form__item"}>
                    <label for="email"><i class="fa fa-envelope"></i></label>
                    <div className="form__group">
                        <div className="form__input">
                            <input type="text" id="email" name="email" placeholder="Email..." onChange={handleChange} onBlur={handleBlur} />
                            <span className={touched.email && errors.email ? "error-icon show-icon" : "error-icon"}><i class="fa fa-exclamation-circle"></i></span>
                        </div>
                        {touched.email && errors.email ? <span className="error__message">{errors.email}</span> : ""}
                    </div>
                </div>

                <hr />
                <div className="form__button">
                    {!isValid ?
                        <button className="button__disabled" disabled={true}>Đăng ký</button>
                        :
                        <button type="submit" className="button" disabled={!isValid} onClick={() => {
                            dispatch({
                                type: "openBtnLoading",
                            })
                        }}>
                            <ButtonLoading />
                            <span>Đăng ký</span>
                        </button>
                    }
                    <hr />
                    <p>Bạn đã có tài khoản ? {" "}
                        <span>
                            <NavLink className="form__link" to="/login">Đăng nhập tại đây</NavLink>
                        </span>
                    </p>
                </div>
                <NavLink className="return-button" to="/">
                    <i class="fa fa-times"></i>
                </NavLink>
            </form>
        </div>
    );
}

export default Register;