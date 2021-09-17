import React from 'react';
import * as yup from 'yup';
import ButtonLoading from '../../../component/Loading/ButtonLoading';
import { Formik, Form, Field, useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { addMovieAction } from '../../../redux/action/AdminAction';

function AddMovie({ addMovie, setAddMovie }) {
    let dispatch = useDispatch();

    const { handleChange, handleBlur, handleSubmit, setFieldValue, handleReset, touched, errors, isValid } = useFormik({
        initialValues: {
            maPhim: (Math.floor(Math.random() * 1000)).toString(),
            tenPhim: "",
            biDanh: "",
            trailer: "",
            ngayKhoiChieu: "",
            maNhom: "",
            hinhAnh: "",
            moTa: ""
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
            ngayKhoiChieu: yup.string()
                .min(2, "Ít nhất 2 ký tự")
                .max(20, "Dài nhất 20 ký tự")
                .required("Không được để trống"),
            maNhom: yup.string()
                .required("Vui lòng chọn mã nhóm"),
            hinhAnh: yup.string()
                .required("Vui lòng chọn hình ảnh"),
            moTa: yup.string()
                .min(2, "Ít nhất 2 ký tự")
                .max(500, "Dài nhất 500 ký tự")
                .required("Không được để trống"),
        }),
        onSubmit: (values) => {
            let data = new FormData();
            for (let key in values) {
                data.append(key, values[key]);
            };
            dispatch(addMovieAction(data));
        }
    })
    return (
        <div className={addMovie ? "add-movie active" : "add-movie"}>
            <div className="add-movie__bg">
                <div className="add-movie__wrapper">
                    <button className="wrapper__btn" onClick={() => {
                        setAddMovie(false)
                    }}><i class="fa fa-times"></i></button>
                    <h5>Thêm Phim</h5>
                    <Formik>
                        <Form className="wrapper__form" autoComplete="off" onSubmit={handleSubmit} onReset={handleReset}>
                            <div className="form__group">
                                <div className="form__item">
                                    <div className="form__content">
                                        <Field className="form__input" name="tenPhim" type="text" placeholder=" " onChange={handleChange} onBlur={handleBlur} />
                                        <label className="form__label">Tên Phim</label>
                                    </div>
                                    {touched.tenPhim && errors.tenPhim ? <span className="error__message">{errors.tenPhim}</span> : null}
                                </div>
                                <div className="form__item">
                                    <div className="form__content">
                                        <Field className="form__input" name="biDanh" type="text" placeholder=" " onChange={handleChange} onBlur={handleBlur} />
                                        <label className="form__label">Bí Danh</label>
                                    </div>
                                    {touched.biDanh && errors.biDanh ? <span className="error__message">{errors.biDanh}</span> : null}
                                </div>
                            </div>

                            <div className="form__group">
                                <div className="form__item">
                                    <div className="form__content">
                                        <Field className="form__input" name="trailer" type="text" placeholder=" " onChange={handleChange} onBlur={handleBlur} />
                                        <label className="form__label">Trailer</label>
                                    </div>
                                    {touched.trailer && errors.trailer ? <span className="error__message">{errors.trailer}</span> : null}
                                </div>
                                <div className="form__item">
                                    <div className="form__content">
                                        <Field className="form__input" name="ngayKhoiChieu" type="text" placeholder=" " onChange={handleChange} onBlur={handleBlur} />
                                        <label className="form__label">Ngày Khởi Chiếu</label>
                                    </div>
                                    {touched.ngayKhoiChieu && errors.ngayKhoiChieu ? <span className="error__message">{errors.ngayKhoiChieu}</span> : null}
                                </div>
                            </div>

                            <div className="form__group">
                                <div className="form__item form__item-select">
                                    <div className="form__content">
                                        <Field as="select" className="form__input form__input-select" name="maNhom" id="select" onChange={handleChange} onBlur={handleBlur}>
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
                                </div>
                                <div className="form__item">
                                    <div className="form__content">
                                        <label className="form__label form__label-file" for="hinhAnh">
                                            <i class="fa fa-file-upload"></i>
                                            <span>Upload Hình Ảnh</span>
                                        </label>
                                        <Field id="hinhAnh" name="hinhAnh" className="form__input form__input-file" type="file" onChange={(e) => {
                                            setFieldValue("hinhAnh", e.target.files[0])
                                        }} onBlur={handleBlur} />
                                    </div>
                                </div>
                            </div>

                            <div className="form__group">
                                <div className="form__item form__item-textarea">
                                    <div className="form__content">
                                        <Field as="textarea" className="form__input" name="moTa" cols="30" rows="3" placeholder=" " onChange={handleChange} onBlur={handleBlur}></Field>
                                        <label className="form__label">Mô Tả</label>
                                    </div>
                                    {touched.moTa && errors.moTa ? <span className="error__message">{errors.moTa}</span> : null}
                                </div>
                            </div>

                            <div className="form__button">
                                <button className="button" type="submit" onClick={() => {
                                    dispatch({
                                        type: "openBtnLoading"
                                    });
                                    handleReset()
                                }}>
                                    <ButtonLoading />
                                    <span>Thêm Phim</span>
                                </button>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    );
}

export default AddMovie;