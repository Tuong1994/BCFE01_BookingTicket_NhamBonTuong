import React from 'react';
import * as yup from 'yup';
import ButtonLoading from '../../../component/Loading/ButtonLoading';
import { NavLink } from 'react-router-dom';
import { Formik, Form, Field, useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { updateMovieAction } from '../../../redux/action/AdminAction';

function UpdateMovie(props) {
    const { phim } = useSelector(state => state.PhimReducer)
    let dispatch = useDispatch();
    const { handleChange, handleBlur, handleSubmit, setFieldValue, touched, errors, isValid, values } = useFormik({
        initialValues: {
            maPhim: phim.maPhim,
            tenPhim: phim.tenPhim,
            biDanh: phim.biDanh,
            trailer: phim.trailer,
            maNhom: phim.maNhom,
            ngayKhoiChieu: phim.ngayKhoiChieu,
            hinhAnh: phim.hinhAnh,
            moTa: phim.moTa,
        },
        validationSchema: yup.object().shape({
            tenPhim: yup.string()
                .min(2, "Ít nhất 2 ký tự")
                .required("Không được để trống"),
            biDanh: yup.string()
                .min(2, "Ít nhất 2 ký tự")
                .required("Không được để trống"),
            trailer: yup.string()
                .required("Không được để trống"),
            maNhom: yup.string()
                .required("Vui lòng chọn mã nhóm"),
            ngayKhoiChieu: yup.string()
                .min(2, "Ít nhất 2 ký tự")
                .required("Không được để trống"),
            hinhAnh: yup.string()
                .required("Vui lòng chọn hình ảnh"),
            moTa: yup.string()
                .min(2, "Ít nhất 2 ký tự")
                .max(1500, "Dài nhất 1500 ký tự")
                .required("Không được để trống"),
        }),
        onSubmit: (values) => {
            let data = new FormData();
            for (let key in values) {
                data.append(key, values[key]);
            }
            dispatch(updateMovieAction(data));
        }
    })
    return (
        <div className="update-movie">
            <div className="update-movie__wrapper">
                <h5>Cập Nhật Phim</h5>
                <div className="wrapper__movie">
                    <div className="movie__img">
                        <img src={phim.hinhAnh} alt={phim.tenPhim} />
                    </div>
                    <div className="movie__info">
                        <p>Tên Phim : <span>{phim.tenPhim}</span></p>
                        <p>Bí Danh : <span>{phim.biDanh}</span></p>
                        <p>Trailer : <span>{phim.trailer}</span></p>
                        <p>Đánh Giá : <span>{phim.danhGia}</span></p>
                        <p>Mô Tả : <br />{phim.moTa?.length > 200 ? <span>{phim.moTa.substr(0, 200)}...</span> : <span>{phim.moTa}</span>}</p>
                    </div>
                </div>
                <hr />
                <Formik>
                    <Form className="wrapper__form" autoComplete="off" onSubmit={handleSubmit}>
                        <div className="form__group">
                            <div className="form__item">
                                <div className="form__content">
                                    <Field className="form__input" type="text" name="tenPhim" placeholder=" " onChange={handleChange} onBlur={handleBlur} value={values.tenPhim} />
                                    <label className="form__label">Tên Phim</label>
                                </div>
                                {touched.tenPhim && errors.tenPhim ? <span className="error__message">{errors.tenPhim}</span> : null}
                            </div>
                            <div className="form__item">
                                <div className="form__content">
                                    <Field className="form__input" type="text" name="biDanh" placeholder=" " onChange={handleChange} onBlur={handleBlur} value={values.biDanh} />
                                    <label className="form__label">Bí Danh</label>
                                </div>
                                {touched.biDanh && errors.biDanh ? <span className="error__message">{errors.biDanh}</span> : null}
                            </div>
                        </div>

                        <div className="form__group">
                            <div className="form__item">
                                <div className="form__content">
                                    <Field className="form__input" type="text" name="trailer" placeholder=" " onChange={handleChange} onBlur={handleBlur} value={values.trailer} />
                                    <label className="form__label">Trailer</label>
                                </div>
                                {touched.trailer && errors.trailer ? <span className="error__message">{errors.trailer}</span> : null}
                            </div>
                            <div className="form__item">
                                <div className="form__content">
                                    <Field className="form__input" type="text" name="ngayKhoiChieu" placeholder=" " onChange={handleChange} onBlur={handleBlur} value={values.ngayKhoiChieu} />
                                    <label className="form__label">Ngày Khởi Chiếu</label>
                                </div>
                                {touched.ngayKhoiChieu && errors.ngayKhoiChieu ? <span className="error__message">{errors.ngayKhoiChieu}</span> : null}
                            </div>
                        </div>

                        <div className="form__group">
                            <div className="form__item">
                                <div className="form__content">
                                    <Field as="select" className="form__input" name="maNhom" id="select" onChange={handleChange} onBlur={handleBlur} value={values.maNhom}>
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
                                    <label className="form__label form__label-file" for="file">
                                        <i class="fa fa-file-upload"></i>
                                        <span>Upload Hình Ảnh</span>
                                    </label>
                                    <Field id="file" className="form__input form__input-file" name="hinhAnh" type="file" onChange={(e) => {
                                        setFieldValue("hinhAnh", e.target.files[0])
                                    }} onBlur={handleBlur} />
                                </div>
                            </div>
                        </div>

                        <div className="form__group">
                            <div className="form__item">
                                <div className="form__content form__textarea">
                                    <Field as="textarea" className="form__input" name="moTa" id="" cols="30" rows="3" placeholder=" " onChange={handleChange} onBlur={handleBlur} value={values.moTa}></Field>
                                    <label className="form__label">Mô Tả</label>
                                </div>
                            </div>
                            {touched.moTa && errors.moTa ? <span className="error__message">{errors.moTa}</span> : null}
                        </div>

                        <div className="form__button">
                            <NavLink to="/movie_manage" className="btn-blue">
                                <i class="fa fa-angle-double-left"></i><span>Quay lại</span>
                            </NavLink>
                            <button className="button" type="submit" disabled={!isValid} onClick={() => {
                                dispatch({
                                    type: "openBtnLoading"
                                })
                            }}>
                                <ButtonLoading />
                                <span>Cập nhật phim</span>
                            </button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}

export default UpdateMovie;