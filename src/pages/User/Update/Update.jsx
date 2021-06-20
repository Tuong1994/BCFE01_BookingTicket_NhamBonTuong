import { useFormik, yupToFormErrors } from 'formik';
import * as yup from "yup";
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { phoneRegExp } from '../../../configs/setting';
import { updateAction } from '../../../redux/action/UserAction';

function Update(props) {
    let { accountInfo } = useSelector(state => state.UserReducer);
    let dispatch = useDispatch()
    const { handleChange, handleBlur, handleSubmit, touched, errors, isValid, values } = useFormik({
        initialValues: {
            taiKhoan: accountInfo.taiKhoan,
            email: accountInfo.email,
            soDt: accountInfo.soDT,
            maNhom: accountInfo.maNhom,
            maLoaiNguoiDung: accountInfo.maLoaiNguoiDung,
            hoTen: accountInfo.hoTen
        },
        validationSchema: yup.object().shape({
            hoTen: yup.string()
                .required("Không đươc để trống"),
            email: yup.string()
                .email("Không hợp lệ")
                .required("Không được để trống"),
            soDt: yup.string()
                .matches(phoneRegExp, "Không hợp lệ")
                .required("Không được để trống")
        }),
        onSubmit: (values) => {
            console.log(values);
            dispatch(updateAction(values));
        }
    })
    return (
        <div className="userUpdate-wrapper">
            <form className="form" onSubmit={handleSubmit}>
                <h3>Cập nhật thông tin</h3>
                <hr />
                <div className={touched.taiKhoan && errors.taiKhoan ? "form__item animation" : "form__item"} >
                    <label for="taiKhoan">Tài khoản</label>
                    <div className="form__input">
                        <input type="text" id="taiKhoan" name="taiKhoan" value={values.taiKhoan} placeholder="..." onChange={handleChange} onBlur={handleBlur} />
                        <span className={touched.taiKhoan && errors.taiKhoan ? "error-icon show-icon" : "error-icon"}><i class="fa fa-exclamation-circle"></i></span>
                    </div>
                    {touched.hoTen && errors.hoTen ? <span className="errors__message">{errors.hoTen}</span> : ""}
                </div>

                <div className={touched.hoTen && errors.hoTen ? "form__item animation" : "form__item"} >
                    <label for="firstName">Họ tên</label>
                    <div className="form__input">
                        <input type="text" id="firstName" name="hoTen" value={values.hoTen} placeholder="..." onChange={handleChange} onBlur={handleBlur} />
                        <span className={touched.hoTen && errors.hoTen ? "error-icon show-icon" : "error-icon"}><i class="fa fa-exclamation-circle"></i></span>
                    </div>
                    {touched.hoTen && errors.hoTen ? <span className="errors__message">{errors.hoTen}</span> : ""}
                </div>

                <div className={touched.soDt && errors.soDt ? "form__item animation" : "form__item"} >
                    <label for="phone">Số điện thoại</label>
                    <div className="form__input">
                        <input type="text" id="phone" name="soDt" value={values.soDt} placeholder="..." onChange={handleChange} onBlur={handleBlur} />
                        <span className={touched.soDt && errors.soDt ? "error-icon show-icon" : "error-icon"}><i class="fa fa-exclamation-circle"></i></span>
                    </div>
                    {touched.soDt && errors.soDt ? <span className="errors__message">{errors.soDt}</span> : ""}
                </div>

                <div className={touched.email && errors.email ? "form__item animation" : "form__item"}>
                    <label for="email">Email</label>
                    <div className="form__input">
                        <input type="text" id="email" name="email" value={values.email} placeholder="..." onChange={handleChange} onBlur={handleBlur} />
                        <span className={touched.email && errors.email ? "error-icon show-icon" : "error-icon"}><i class="fa fa-exclamation-circle"></i></span>
                    </div>
                    {touched.email && errors.email ? <span className="errors__message">{errors.email}</span> : ""}
                </div>

                <div className="form__button">
                    <button className="button" type="submit" disabled={!isValid}>Cập nhật</button>
                </div>
            </form>
        </div>
    );
}

export default Update;