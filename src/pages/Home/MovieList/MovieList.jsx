import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieAction } from '../../../redux/action/PhimAction';
import { NavLink } from 'react-router-dom';
import Popup from '../../../component/Popup/Popup';

function Schedule(props) {
    const{ danhSachPhim, phimTrailer } = useSelector(state => state.PhimReducer);
    let [showVideo, setShowVideo] = useState(false);
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMovieAction());
    }, [])

    let renderPhimDangChieu = (index) => {
        if (index === 1) {
            return danhSachPhim.slice(18, 26).map((film, index) => {
                return <div className="card__item" key={index}>
                    <div className="card__img">
                        <img src={film.hinhAnh} />
                    </div>
                    <div className="card__content fade">
                        {film.tenPhim.length > 15 ? <span>{film.tenPhim.substr(0, 15)}...</span> : <span>{film.tenPhim}</span>}
                        {film.biDanh.length > 15 ? <p>{film.biDanh.substr(0, 15)}...</p> : <p>{film.tenPhim}</p>}
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
                        <NavLink className="button" to={`/detail/${film.maPhim}`}>Mua vé</NavLink>
                    </div>
                </div>
            })
        } else if (index === 2) {
            return danhSachPhim.slice(26, 34).map((film, index) => {
                return <div className="card__item" key={index}>
                    <div className="card__img">
                        <img src={film.hinhAnh} />
                    </div>
                    <div className="card__content fade">
                        {film.tenPhim.length > 15 ? <span>{film.tenPhim.substr(0, 15)}...</span> : <span>{film.tenPhim}</span>}
                        {film.biDanh.length > 15 ? <p>{film.biDanh.substr(0, 15)}...</p> : <p>{film.tenPhim}</p>}
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
                        <NavLink className="button" to={`/detail/${film.maPhim}`}>Mua vé</NavLink>
                    </div>
                </div>
            })
        } else {
            return danhSachPhim.slice(34, 42).map((film, index) => {
                return <div className="card__item" key={index}>
                    <div className="card__img">
                        <img src={film.hinhAnh} />
                    </div>
                    <div className="card__content fade">
                        {film.tenPhim.length > 15 ? <span>{film.tenPhim.substr(0, 15)}...</span> : <span>{film.tenPhim}</span>}
                        {film.biDanh.length > 15 ? <p>{film.biDanh.substr(0, 15)}...</p> : <p>{film.tenPhim}</p>}
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
                        <NavLink className="button" to={`/detail/${film.maPhim}`}>Mua vé</NavLink>
                    </div>
                </div>
            })
        }

    }

    let renderPhimSapChieu = (index) => {
        if (index === 1) {
            return danhSachPhim.slice(9, 17).map((film, index) => {
                return <div className="card__item" key={index}>
                    <div className="card__img">
                        <img src={film.hinhAnh} />
                    </div>
                    <div className="card__content">
                        {film.tenPhim.length > 15 ? <span>{film.tenPhim.substr(0, 15)}...</span> : <span>{film.tenPhim}</span>}
                        {film.biDanh.length > 15 ? <p>{film.biDanh.substr(0, 15)}...</p> : <p>{film.tenPhim}</p>}
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
                        {film.biDanh.length > 15 ? <p>{film.biDanh.substr(0, 15)}...</p> : <p>{film.tenPhim}</p>}
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
                        {film.biDanh.length > 15 ? <p>{film.biDanh.substr(0, 15)}...</p> : <p>{film.tenPhim}</p>}
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

    let setting = {
        dot: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: 'linear',
    }
    return (
        <div className="movielist__container" id="schedule">
            <div>
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
                        <Slider {...setting}>
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
                        <Slider {...setting}>
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
            <Popup trigger={showVideo} setTrigger={setShowVideo}>
                <iframe className="videos-wrapper" src={phimTrailer.trailer} frameborder="0" allow="autoplay" allowFullScreen={true}></iframe>
            </Popup>
        </div>
    );
}

export default Schedule;