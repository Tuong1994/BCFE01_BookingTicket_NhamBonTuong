import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import { delMovieAction } from '../../../redux/action/AdminAction';
import { getMovieAction } from '../../../redux/action/PhimAction';
import Popup from '../../../component/Popup/Popup';
import Schedule from '../../Admin/FilmManage/Schedule';

function FilmManage(props) {
    let { danhSachPhim } = useSelector(state => state.PhimReducer);
    const [popup, setPopup] = useState(false);
    const [searchFilm, setSearchFilm] = useState("");
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(getMovieAction())
    }, [])
    let renderFilmList = () => {
        return danhSachPhim.filter((film) => {
            if (searchFilm === "") {
                return film
            } else if (film.tenPhim.toLowerCase().includes(searchFilm.toLowerCase())) {
                return film
            }
        }).map((film, index) => {
            return <div className="body__item" key={index}>
                <div className="list__col-1"><p>{(index + 1)}</p></div>
                <div className="list__col-2"><p>{film.maPhim}</p></div>
                <div className="list__col-3 item__film">
                    <img src={film.hinhAnh} alt={film.tenPhim} />
                    <div className="film__info">
                        <p>Tên phim : {film.tenPhim.length > 20 ? <span>{film.tenPhim.substr(0,20)}...</span> : <span>{film.tenPhim}</span>}</p>
                        <p>Mô tả : {film.moTa.length > 80 ? <span>{film.moTa.substr(0, 80)}...</span> : <span>{film.moTa}</span>}</p>
                        <p>Lịch chiếu : <span>{moment(film.ngayKhoiChieu).format("dddd hh:mm:A")}</span></p>
                    </div>
                </div>
                <div className="list__col-4"><p>{film.maNhom}</p></div>
                <div className="list__col-5 btn-del">
                    <button className="button" onClick={() => {
                        setPopup(true)
                    }}>Tạo lịch chiếu</button>
                    <NavLink className="button" to="/update_movie" onClick={() => {
                        dispatch({
                            type: "GET_FILM_DETAIL",
                            film: {
                                maPhim: film.maPhim,
                                tenPhim: film.tenPhim,
                                hinhAnh: film.hinhAnh,
                                moTa: film.moTa,
                                ngayKhoiChieu: film.ngayKhoiChieu,
                                maNhom: film.maNhom,
                                trailer: film.trailer,
                                biDanh: film.biDanh
                            }
                        })
                    }}>Sửa</NavLink>
                    <button className="button" onClick={() => {
                        console.log(film.maPhim);
                         Swal.fire({
                            title: "Bạn có muốn xóa phim này ?",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Đúng",
                          }).then((result) => {
                            if (result.isConfirmed) {
                              Swal.fire({
                                icon: "success",
                                title: "Phim đã được xóa",
                              });
                              dispatch(delMovieAction(film.maPhim));
                            }
                          });
                    }}>Xóa</button>
                </div>
            </div>
        })
    }
    return (
        <div className="filmManage-wrapper">
            <div className="filmManage__form">
                <NavLink to="/add_movie" className="form__link">
                    <i class="fa fa-plus"></i>
                    <span>Thêm phim</span>
                </NavLink>
                <div className="form__input">
                    <input type="text" name="timKiem" placeholder="Tìm kiếm..." onChange={(event) => {
                        setSearchFilm(event.target.value);
                    }} />
                    <i class="fa fa-search"></i>
                </div>
            </div>
            <div className="filmManage__list">
                <h3>Danh sách phim</h3>
                <div className="list__wrapper">
                    <div className="list__title">
                        <div className="list__col-1"><p>STT</p></div>
                        <div className="list__col-2"><p>Mã phim</p></div>
                        <div className="list__col-3"><p>Thông tin</p></div>
                        <div className="list__col-4"><p>Mã nhóm</p></div>
                        <div className="list__col-5"><p>Chức năng</p></div>
                    </div>
                    <div className="list__body">
                        {renderFilmList()}
                    </div>
                </div>
            </div>
            <Popup trigger={popup} setTrigger={setPopup}>
                <Schedule />
            </Popup>
        </div>
    );
}

export default FilmManage;