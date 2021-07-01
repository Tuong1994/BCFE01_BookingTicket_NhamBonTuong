import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

function News(props) {
    let { danhSachPhim } = useSelector(state => state.PhimReducer);
    return (
        <div className="news" id="news">
            <ul className="nav nav-pills mb-3 news__title" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#dienAnh" role="tab" aria-controls="pills-home" aria-selected="true">Điện ảnh 24h</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#review" role="tab" aria-controls="pills-profile" aria-selected="false">Review</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#khuyenMai" role="tab" aria-controls="pills-contact" aria-selected="false">Khuyến mãi</a>
                </li>
            </ul>

            <div className="tab-content" id="pills-tabContent">

                <div className="tab-pane news__list fade show active" id="dienAnh" role="tabpanel" aria-labelledby="pills-home-tab">
                    <div className="news__content">
                        {danhSachPhim.slice(2, 4).map((film, index) => {
                            return <NavLink key={index} className="link news__item" to="#">
                                <img className="news__img" src={film.hinhAnh} alt={film.hinhAnh} />
                                <div className="news__body">
                                    {film.moTa.length > 30 ? <h6>{film.moTa.substr(0, 30)}...</h6> : <h6>{film.moTa}</h6>}
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo asperiores soluta quibusdam reprehenderit optio dignissimos ex, accusantium facere. Quod, praesentium.</p>
                                </div>
                            </NavLink>
                        })}
                    </div>
                    <div className="subnews__list">
                        {danhSachPhim.slice(4, 6).map((film, index) => {
                            return <NavLink key={index} className="link subnews__item" to="#">
                                <img className="subnews__img" src={film.hinhAnh} alt={film.hinhAnh} />
                                <div className="news__body">
                                    {film.moTa.length > 30 ? <h6>{film.moTa.substr(0, 30)}...</h6> : <h6>{film.moTa}</h6>}
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo asperiores soluta quibusdam reprehenderit optio dignissimos ex, accusantium facere. Quod, praesentium.</p>
                                </div>
                            </NavLink>
                        })}
                        <div className="list">
                            {danhSachPhim.slice(12, 16).map((film, index) => {
                                return <NavLink key={index} className="link list__item" to="#">
                                    <img className="list__img" src={film.hinhAnh} alt={film.hinhAnh} />
                                    {film.moTa.length > 30 ? <p>{film.moTa.substr(0, 30)}...</p> : <p>{film.moTa}</p>}
                                </NavLink>
                            })}
                        </div>
                    </div>
                </div>

                <div className="tab-pane news__list fade" id="review" role="tabpanel" aria-labelledby="pills-profile-tab">
                <div className="news__content">
                        {danhSachPhim.slice(6, 8).map((film, index) => {
                            return <NavLink key={index} className="link news__item" to="#">
                                <img className="news__img" src={film.hinhAnh} alt={film.hinhAnh} />
                                <div className="news__body">
                                    {film.moTa.length > 30 ? <h6>{film.moTa.substr(0, 30)}...</h6> : <h6>{film.moTa}</h6>}
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo asperiores soluta quibusdam reprehenderit optio dignissimos ex, accusantium facere. Quod, praesentium.</p>
                                </div>
                            </NavLink>
                        })}
                    </div>
                    <div className="subnews__list">
                        {danhSachPhim.slice(49, 52).map((film, index) => {
                            return <NavLink key={index} className="link subnews__item" to="#">
                                <img className="subnews__img" src={film.hinhAnh} alt={film.hinhAnh} />
                                <div className="news__body">
                                    {film.moTa.length > 30 ? <h6>{film.moTa.substr(0, 30)}...</h6> : <h6>{film.moTa}</h6>}
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo asperiores soluta quibusdam reprehenderit optio dignissimos ex, accusantium facere. Quod, praesentium.</p>
                                </div>
                            </NavLink>
                        })}
                        <div className="list">
                            {danhSachPhim.slice(41, 45).map((film, index) => {
                                return <NavLink key={index} className="link list__item" to="#">
                                    <img className="list__img" src={film.hinhAnh} alt={film.hinhAnh} />
                                    {film.moTa.length > 30 ? <p>{film.moTa.substr(0, 30)}...</p> : <p>{film.moTa}</p>}
                                </NavLink>
                            })}
                        </div>
                    </div>
                </div>

                <div className="tab-pane news__list fade" id="khuyenMai" role="tabpanel" aria-labelledby="pills-contact-tab">
                <div className="news__content">
                        {danhSachPhim.slice(39, 41).map((film, index) => {
                            return <NavLink key={index} className="link news__item" to="#">
                                <img className="news__img" src={film.hinhAnh} alt={film.hinhAnh} />
                                <div className="news__body">
                                    {film.moTa.length > 30 ? <h6>{film.moTa.substr(0, 30)}...</h6> : <h6>{film.moTa}</h6>}
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo asperiores soluta quibusdam reprehenderit optio dignissimos ex, accusantium facere. Quod, praesentium.</p>
                                </div>
                            </NavLink>
                        })}
                    </div>
                    <div className="subnews__list">
                        {danhSachPhim.slice(33, 35).map((film, index) => {
                            return <NavLink key={index} className="link subnews__item" to="#">
                                <img className="subnews__img" src={film.hinhAnh} alt={film.hinhAnh} />
                                <div className="news__body">
                                    {film.moTa.length > 30 ? <h6>{film.moTa.substr(0, 30)}...</h6> : <h6>{film.moTa}</h6>}
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo asperiores soluta quibusdam reprehenderit optio dignissimos ex, accusantium facere. Quod, praesentium.</p>
                                </div>
                            </NavLink>
                        })}
                        <div className="list">
                            {danhSachPhim.slice(12, 16).map((film, index) => {
                                return <NavLink key={index} className="link list__item" to="#">
                                    <img className="list__img" src={film.hinhAnh} alt={film.hinhAnh} />
                                    {film.moTa.length > 30 ? <p>{film.moTa.substr(0, 30)}...</p> : <p>{film.moTa}</p>}
                                </NavLink>
                            })}
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default News;