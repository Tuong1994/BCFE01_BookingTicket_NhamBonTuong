import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieAction } from '../../../redux/action/PhimAction';
import { NavLink } from 'react-router-dom';
import useOverFlow from "../../../hooks/useOverFlow";
import Popup from '../../../component/Popup/Popup';
import RWDMovieList from '../../../component/RWD_MoveList/RWDMovieList';


function MovieList(props) {
    const { danhSachPhim, phimTrailer } = useSelector(state => state.PhimReducer);
    const [showVideo, setShowVideo] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMovieAction());
    }, [])
    useOverFlow(showVideo)
    const renderPhimDangChieu = (index) => {
        if (index === 1) {
            return danhSachPhim.slice(18, 26).map((film, index) => {
                return <div className="card__item" key={index}>
                    <div className="card__img">
                        <img src={film.hinhAnh} type={film.tenPhim} />
                        <div className="card__review">
                            <p>{film.danhGia}/10</p>
                            <div className="card__star">
                                <span><i class="fa fa-star"></i></span>
                                <span><i class="fa fa-star"></i></span>
                                <span><i class="fa fa-star"></i></span>
                                <span><i class="fa fa-star"></i></span>
                                <span><i class="fa fa-star"></i></span>
                            </div>
                        </div>
                    </div>
                    <div className="card__content fade">
                        {film.tenPhim.length > 15 ? <span>{film.tenPhim.substr(0, 15)}...</span> : <span>{film.tenPhim}</span>}
                    </div>
                    <div className="card__booking">
                        <button className="btn__play" onClick={() => {
                            dispatch({
                                type: "GET_TRAILER",
                                film: {
                                    maPhim: film.maPhim,
                                    trailer: film.trailer
                                },
                            })
                            setShowVideo(true)
                        }}><i class="fa fa-play"></i></button>
                        <NavLink className="button" to={`/film_detail/${film.maPhim}`}>Mua vé</NavLink>
                    </div>
                </div>
            })
        } else if (index === 2) {
            return danhSachPhim.slice(26, 34).map((film, index) => {
                return <div className="card__item" key={index}>
                    <div className="card__img">
                        <img src={film.hinhAnh} alt={film.tenPhim} />
                        <div className="card__review">
                            <p>{film.danhGia}/10</p>
                            <div className="card__star">
                                <span><i class="fa fa-star"></i></span>
                                <span><i class="fa fa-star"></i></span>
                                <span><i class="fa fa-star"></i></span>
                                <span><i class="fa fa-star"></i></span>
                                <span><i class="fa fa-star"></i></span>
                            </div>
                        </div>
                    </div>
                    <div className="card__content fade">
                        {film.tenPhim.length > 15 ? <span>{film.tenPhim.substr(0, 15)}...</span> : <span>{film.tenPhim}</span>}
                    </div>
                    <div className="card__booking">
                        <button className="btn__play" onClick={() => {
                            dispatch({
                                type: "GET_TRAILER",
                                film: {
                                    maPhim: film.maPhim,
                                    trailer: film.trailer
                                },
                            })
                            setShowVideo(true)
                        }}><i class="fa fa-play"></i></button>
                        <NavLink className="button" to={`/film_detail/${film.maPhim}`}>Mua vé</NavLink>
                    </div>
                </div>
            })
        } else {
            return danhSachPhim.slice(34, 42).map((film, index) => {
                return <div className="card__item" key={index}>
                    <div className="card__img">
                        <img src={film.hinhAnh} alt={film.tenPhim} />
                        <div className="card__review">
                            <p>{film.danhGia}/10</p>
                            <div className="card__star">
                                <span><i class="fa fa-star"></i></span>
                                <span><i class="fa fa-star"></i></span>
                                <span><i class="fa fa-star"></i></span>
                                <span><i class="fa fa-star"></i></span>
                                <span><i class="fa fa-star"></i></span>
                            </div>
                        </div>
                    </div>
                    <div className="card__content fade">
                        {film.tenPhim.length > 15 ? <span>{film.tenPhim.substr(0, 15)}...</span> : <span>{film.tenPhim}</span>}
                    </div>
                    <div className="card__booking">
                        <button className="btn__play" onClick={() => {
                            dispatch({
                                type: "GET_TRAILER",
                                film: {
                                    maPhim: film.maPhim,
                                    trailer: film.trailer
                                },
                            })
                            setShowVideo(true)
                        }}><i class="fa fa-play"></i></button>
                        <NavLink className="button" to={`/film_detail/${film.maPhim}`}>Mua vé</NavLink>
                    </div>
                </div>
            })
        }

    }

    const renderPhimSapChieu = (index) => {
        if (index === 1) {
            return danhSachPhim.slice(9, 17).map((film, index) => {
                return <div className="card__item" key={index}>
                    <div className="card__img">
                        <img src={film.hinhAnh} />
                    </div>
                    <div className="card__content">
                        {film.tenPhim.length > 15 ? <span>{film.tenPhim.substr(0, 15)}...</span> : <span>{film.tenPhim}</span>}
                    </div>
                    <div className="card__booking">
                        <button className="btn__play" onClick={() => {
                            dispatch({
                                type: "GET_TRAILER",
                                film: {
                                    maPhim: film.maPhim,
                                    trailer: film.trailer
                                },
                            })
                            setShowVideo(true)
                        }}><i class="fa fa-play"></i></button>
                    </div>
                </div>
            })
        } else if (index === 2) {
            return danhSachPhim.slice(30, 38).map((film, index) => {
                return <div className="card__item" key={index}>
                    <div className="card__img">
                        <img src={film.hinhAnh} />
                    </div>
                    <div className="card__content">
                        {film.tenPhim.length > 15 ? <span>{film.tenPhim.substr(0, 15)}...</span> : <span>{film.tenPhim}</span>}
                    </div>
                    <div className="card__booking">
                        <button className="btn__play" onClick={() => {
                            dispatch({
                                type: "GET_TRAILER",
                                film: {
                                    maPhim: film.maPhim,
                                    trailer: film.trailer
                                },
                            })
                            setShowVideo(true)
                        }}><i class="fa fa-play"></i></button>
                    </div>
                </div>
            })
        } else {
            return danhSachPhim.slice(10, 18).map((film, index) => {
                return <div className="card__item" key={index}>
                    <div className="card__img">
                        <img src={film.hinhAnh} />
                    </div>
                    <div className="card__content">
                        {film.tenPhim.length > 15 ? <span>{film.tenPhim.substr(0, 15)}...</span> : <span>{film.tenPhim}</span>}
                    </div>
                    <div className="card__booking">
                        <button className="btn__play" onClick={() => {
                            dispatch({
                                type: "GET_TRAILER",
                                film: {
                                    maPhim: film.maPhim,
                                    trailer: film.trailer
                                },
                            })
                            setShowVideo(true)
                        }}><i class="fa fa-play"></i></button>
                    </div>
                </div>
            })
        }
    }

    return (
        <div className="movielist" id="schedule">
            <div className="movielist__desktop">
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Đang chiếu</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Sắp chiếu</a>
                    </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <Slider >
                            <div className="slides">
                                <div className="card__wrapper">
                                    {renderPhimDangChieu(1)}
                                </div>
                            </div>

                            <div className="slides">
                                <div className="card__wrapper">
                                    {renderPhimDangChieu(2)}
                                </div>
                            </div>

                            <div className="slides">
                                <div className="card__wrapper">
                                    {renderPhimDangChieu(3)}
                                </div>
                            </div>
                        </Slider>
                    </div>
                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <Slider >
                            <div className="slides">
                                <div className="card__wrapper">
                                    {renderPhimSapChieu(1)}
                                </div>
                            </div>

                            <div className="slides">
                                <div className="card__wrapper">
                                    {renderPhimSapChieu(2)}
                                </div>
                            </div>

                            <div className="slides">
                                <div className="card__wrapper">
                                    {renderPhimSapChieu(3)}
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>

            <RWDMovieList danhSachPhim={danhSachPhim} setShowVideo={setShowVideo} />

            <Popup trigger={showVideo} setTrigger={setShowVideo}>
                <iframe className="videos-wrapper" src={phimTrailer.trailer} frameBorder="0" allow="autoplay" allowFullScreen={true}></iframe>
            </Popup>
        </div>
    );
}

export default MovieList;