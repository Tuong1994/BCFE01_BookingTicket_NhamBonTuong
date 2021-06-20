import { useFormik } from 'formik';
import * as yup from 'yup';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signInAction } from '../../redux/action/UserAction';
import { useEffect } from 'react';


function Login(props) {
    let dispatch = useDispatch();
    const { handleChange, handleSubmit, handleBlur, touched, errors, isValid } = useFormik({
        initialValues: {
            taiKhoan: "",
            matKhau: ""
        },
        validationSchema: yup.object().shape({
            taiKhoan: yup.string().required("Tài khoản không được để trống"),
            matKhau: yup.string().required("Mật khẩu không được để trống")
        }),
        onSubmit: (values) => {
            dispatch(signInAction(values));
        }
    });
    return (
        <div className="login-container">
            <form className="login__form" onSubmit={handleSubmit}>
                <h3>Đăng nhập</h3>
                <div className={touched.taiKhoan && errors.taiKhoan ? "form__item animation" : "form__item"}>
                    <label className="form__icon" for="taiKhoan"><i class="fa fa-user"></i></label>
                    <div className="form__group">
                        <div className="form__input">
                            <input type="text" id="taiKhoan" name="taiKhoan" placeholder="Nhập tài khoản" onChange={handleChange} onBlur={handleBlur} />
                            <span className={touched.taiKhoan && errors.taiKhoan ? "error-icon show-icon" : "error-icon"}><i class="fa fa-exclamation-circle"></i></span>
                        </div>
                        {touched.taiKhoan && errors.taiKhoan ? <span className="error__message">{errors.taiKhoan}</span> : ""}
                    </div>
                </div>

                <div className={touched.matKhau && errors.matKhau ? "form__item animation" : "form__item"}>
                    <label className="form__icon" for="matKhau"><i class="fa fa-lock"></i></label>
                    <div className="form__group">
                        <div className="form__input">
                            <input type="password" id="matKhau" name="matKhau" placeholder="Nhập mật khẩu" onChange={handleChange} onBlur={handleBlur} />
                            <span className={touched.matKhau && errors.matKhau ? "error-icon show-icon" : "error-icon"}><i class="fa fa-exclamation-circle"></i></span>
                        </div>
                        {touched.matKhau && errors.matKhau ? <span className="error__message">{errors.matKhau}</span> : ""}
                    </div>
                </div>


                <div className="form__button">
                    <button className="button" type="submit" disabled={!isValid}>
                        Đăng nhập
                    </button>
                    <hr />
                    <p>Bạn chưa có tài khoản ? {" "}
                        <span>
                            <NavLink className="form__link" to="/register">Đăng ký tại đây</NavLink>
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

export default Login;