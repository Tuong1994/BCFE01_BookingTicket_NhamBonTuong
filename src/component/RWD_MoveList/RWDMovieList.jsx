import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

function RWDMovieList({ danhSachPhim, setShowVideo }) {
    let dispatch = useDispatch();
    let [loadMore, setLoadMore] = useState(3);
    let showMore = () => {
        setLoadMore((preValue) => preValue + 3)
    }
    const [tabActive, setTabActive] = useState(1);
    let showTab = (index) => {
        setTabActive(index)
    }
    return (
        <div className="rwd-movielist">
            <div className="rwd-movielist__tab">
                <div className={tabActive === 1 ? "tab__item active-color" : "tab__item"} onClick={() => {
                    showTab(1)
                }}>Đang chiếu</div>
                <div className={tabActive === 2 ? "tab__item active-color" : "tab__item"} onClick={() => {
                    showTab(2)
                }}>Sắp chiếu</div>
            </div>

            <div className="rwd-movielist__tabContent">
                <div className={tabActive === 1 ? "tabContent__item show-tab" : "tabContent__item"}>
                    <div className="slides">
                        <div className="card__wrapper">
                            {danhSachPhim?.slice(0, loadMore).map((film, index) => {
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
                            })}
                        </div>
                        {loadMore >= 6 ? null : <div className="btn-load">
                            <div className="button" onClick={showMore}>Xem thêm</div>
                        </div>}
                    </div>
                </div>

                <div className={tabActive === 2 ? "tabContent__item show-tab" : "tabContent__item"}>
                    <div className="slides">
                        <div className="card__wrapper">
                            {danhSachPhim.slice(9, 15).map((film, index) => {
                                return <div className="card__item" key={index}>
                                    <div className="card__img">
                                        <img src={film.hinhAnh} alt={film.tenPhim} />
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
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RWDMovieList;

