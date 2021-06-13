import { Field, Form, Formik, useFormik } from 'formik';
import * as yup from "yup";
import React from 'react';
import { useDispatch } from 'react-redux';
import { addMovieAction } from '../../../redux/action/AdminAction';

function AddMovie(props) {
    let dispatch = useDispatch();
    const { handleChange, handleSubmit, handleBlur, setFieldValue, touched, errors, isValid, values } = useFormik({
        initialValues: {
            maPhim: (Math.floor(Math.random() * 10000)).toString(),
            tenPhim: "",
            biDanh: "",
            trailer: "",
            maNhom: "",
            ngayKhoiChieu: "",
            hinhAnh: "",
            moTa: "",
        },
        validationSchema: yup.object().shape({
            tenPhim: yup.string()
                .min(2, "Ít nhất 2 ký tự")
                .required("Không được để trống"),
            biDanh: yup.string()
                .min(2, "Ít nhất 2 ký tự")
                .max(30, "Dài nhất 30 ký tự")
                .required("Không được để trống"),
            trailer: yup.string()
                .required("Không được để trống"),
            maNhom: yup.string()
                .required("Vui lòng chọn mã nhóm"),
            ngayKhoiChieu: yup.string()
                .min(2, "Ít nhất 2 ký tự")
                .max(20, "Dài nhất 20 ký tự")
                .required("Không được để trống"),
            hinhAnh: yup.string()
                .required("Vui lòng chọn hình ảnh"),
            moTa: yup.string()
                .min(2, "Ít nhất 2 ký tự")
                .max(500, "Dài nhất 500 ký tự")
                .required("Không được để trống"),
        }),
        onSubmit: (values, {resetForm}) => {
            let data = new FormData();
            for (let key in values) {
                data.append(key, values[key]);
                // console.log("data", data.get(key));
            }
            console.log("data",typeof data.get("maPhim"));
            dispatch(addMovieAction(data));
            resetForm();
        }
    })
    return (
        <div className="addmovie-wrapper">
            <h3>Thêm phim</h3>
            <Formik>
                <Form className="addmovie__form" onSubmit={handleSubmit}>
                    <div className="form__content">
                        <div className={touched.tenPhim && errors.tenPhim ? "form__item animation" : "form__item"}>
                            <label for="tenPhim">Tên phim</label>
                            <div className="form__input">
                                <Field id="tenPhim" type="text" name="tenPhim" className="input" onChange={handleChange} onBlur={handleBlur} />
                                <span className={touched.tenPhim && errors.tenPhim ? "error-icon show-icon" : "error-icon"}><i class="fa fa-exclamation-circle"></i></span>
                            </div>
                            {touched.tenPhim && errors.tenPhim ? <span className="error__message">{errors.tenPhim}</span> : ""}
                        </div>

                        <div className={touched.biDanh && errors.biDanh ? "form__item animation" : "form__item"}>
                            <label for="biDanh">Bí danh</label>
                            <div className="form__input">
                                <Field id="biDanh" type="text" name="biDanh" className="input" onChange={handleChange} onBlur={handleBlur} />
                                <span className={touched.biDanh && errors.biDanh ? "error-icon show-icon" : "error-icon"}><i class="fa fa-exclamation-circle"></i></span>
                            </div>
                            {touched.biDanh && errors.biDanh ? <span className="error__message">{errors.biDanh}</span> : ""}
                        </div>

                        <div className={touched.trailer && errors.trailer ? "form__item animation" : "form__item"}>
                            <label for="trailer">Trailer</label>
                            <div className="form__input">
                                <Field id="trailer" type="text" name="trailer" className="input" onChange={handleChange} onBlur={handleBlur} />
                                <span className={touched.trailer && errors.trailer ? "error-icon show-icon" : "error-icon"}><i class="fa fa-exclamation-circle"></i></span>
                            </div>
                            {touched.trailer && errors.trailer ? <span className="error__message">{errors.trailer}</span> : ""}
                        </div>

                        <div className={touched.maNhom && errors.maNhom ? "form__item animation" : "form__item"}>
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
                            {touched.maNhom && errors.maNhom ? <span className="error__message">{errors.maNhom}</span> : ""}
                        </div>

                        <div className={touched.ngayKhoiChieu&& errors.ngayKhoiChieu? "form__item animation" : "form__item"}>
                            <label for="ngayKhoiChieu">Ngày khởi chiếu</label>
                            <div className="form__input">
                                <Field id="ngayKhoiChieu" name="ngayKhoiChieu" className="input" onChange={handleChange} onBlur={handleBlur} />
                                <span className={touched.ngayKhoiChieu && errors.ngayKhoiChieu ? "error-icon show-icon" : "error-icon"}><i class="fa fa-exclamation-circle"></i></span>
                            </div>
                            {touched.ngayKhoiChieu && errors.ngayKhoiChieu ? <span className="error__message">{errors.ngayKhoiChieu}</span> : ""}
                        </div>

                        <div className={touched.hinhAnh && errors.hinhAnh ? "form__item animation" : "form__item"}>
                            <label for="hinhAnh">Hình ảnh</label>
                            <div className="form__input">
                                <Field id="hinhAnh" type="file" name="hinhAnh" className="input" onChange={(event) => {
                                    setFieldValue("hinhAnh", event.target.files[0])
                                }} onBlur={handleBlur} />
                            </div>
                            {touched.hinhAnh && errors.hinhAnh ? <span className="error__message">{errors.hinhAnh}</span> : ""}
                        </div>
                    </div>

                    <div className={touched.moTa && errors.moTa ? "form__desc animation" : "form__desc"}>
                        <label for="moTa">Mô tả</label>
                        <div className="form__input">
                            <Field as="textarea" id="moTa" name="moTa" rows="10" cols="30" className="input" onChange={handleChange} onBlur={handleBlur} />
                            <span className={touched.moTa && errors.moTa ? "error-icon show-icon" : "error-icon"}><i class="fa fa-exclamation-circle"></i></span>
                        </div>
                        {touched.moTa && errors.moTa ? <span className="error__message">{errors.moTa}</span> : ""}
                    </div>

                    <div className="form__button">
                        <button className="button" type="submit" disabled={!isValid}>Thêm phim</button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
}

export default AddMovie;