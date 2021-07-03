import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getShowTimeDetail } from '../../redux/action/PhimAction';
import { Link } from 'react-scroll';
import Popup from '../../component/Popup/Popup';


function Detail(props) {
    const { chiTietLichChieu } = useSelector(state => state.PhimReducer);
    let [showVideo, setShowVideo] = useState(false);
    let dispatch = useDispatch();
    useEffect(() => {
        window.scrollTo(0, 0);
        let { id } = props.match.params;
        dispatch(getShowTimeDetail(id));
    }, [])

    return (
        <div className="filmdetail-wrapper" style={{ backgroundImage: `url(${chiTietLichChieu.hinhAnh})` }}>
            <div className="film__content">
                <div className="film__body">
                    <div className="film__info">
                        <div className="film__img">
                            <img src={chiTietLichChieu.hinhAnh} />
                            <div className="play__trailer">
                                <button className="play__button" onClick={() => {
                                    dispatch({
                                        type: "GET_TRAILER",
                                        film: {
                                            maPhim: chiTietLichChieu.maPhim,
                                            trailer: chiTietLichChieu.trailer
                                        }
                                    });
                                    setShowVideo(true)
                                }}>
                                    <i class="fa fa-play"></i>
                                </button>
                            </div>
                        </div>
                        <iframe className="film__trailer" src={chiTietLichChieu.trailer} frameborder="0"></iframe>
                        <div className="film__desc">
                            <p>Ngày giờ chiếu : <span>{moment(chiTietLichChieu.ngayKhoiChieu).format("dddd hh mm: A")}</span></p>
                            <p>Tên phim : <span>{chiTietLichChieu.tenPhim}</span></p>
                            <Link
                                activeClass="active"
                                to="detailCinema"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={50}
                                className="button">
                                Mua vé
                            </Link>
                        </div>
                    </div>

                    <div className="detail__review">
                        <div className="review__point">
                            <p>{chiTietLichChieu.danhGia}/10</p>
                        </div>
                        <div className="review__star">
                            <span><i class="fa fa-star"></i></span>
                            <span><i class="fa fa-star"></i></span>
                            <span><i class="fa fa-star"></i></span>
                            <span><i class="fa fa-star"></i></span>
                            <span><i class="fa fa-star"></i></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="detail__cinema" id="detailCinema">
                <ul className="nav nav-pills mb-3 detail__title" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Lịch chiếu</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Thông tin</a>
                    </li>
                </ul>
                
                <div className="tab-content cinema__info" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <div className="row cinema__inner">
                            <div className="col-4 cinema__content">
                                <div className="nav flex-column nav-pills cinema__item" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    {chiTietLichChieu.heThongRapChieu?.map((heThongRap, index) => {
                                        let activeClass = index === 0 ? "active" : "";
                                        return <a key={index} className={`nav-link cinema__link ${activeClass}`} id="v-pills-home-tab" data-toggle="pill" href={`#${heThongRap.maHeThongRap}`} role="tab" aria-controls="v-pills-home" aria-selected="true">
                                            <img className="cinema__logo" src={heThongRap.logo} alt="Cinema logo" />
                                            <span className="cinema__name">{heThongRap.tenHeThongRap}</span>
                                        </a>
                                    })}
                                </div>
                            </div>

                            <div className="col-8 cinema__content">
                                <div className="tab-content" id="v-pills-tabContent">
                                    {chiTietLichChieu.heThongRapChieu?.map((heThongRap, index) => {
                                        let showActiveClass = index === 0 ? "show active" : "";
                                        return <div key={index} className={`tab-pane showtime__container fade ${showActiveClass}`} id={heThongRap.maHeThongRap} role="tabpanel" aria-labelledby="v-pills-home-tab">
                                            {heThongRap.cumRapChieu?.map((cumRap, index) => {
                                                return <div className="showtime__detail" key={index}>
                                                    <div className="showtime__cinema">
                                                        <img src="../../img/rapChieu.png" alt="" />
                                                        <div className="cinema__detail">
                                                            <p>{cumRap.tenCumRap}</p>
                                                            {cumRap.lichChieuPhim?.slice(0, 4).map((lichChieu, index) => {
                                                                return <span key={index}>
                                                                    {lichChieu.tenRap}
                                                                </span>
                                                            })}
                                                        </div>
                                                    </div>
                                                    <div className="showtime__list">
                                                        <p>2D Digital</p>
                                                        <hr />
                                                        {cumRap.lichChieuPhim?.slice(0, 20).map((lichChieu, index) => {
                                                            return <NavLink className="button" key={index} to={`/checkout/${lichChieu.maLichChieu}`}>
                                                                {moment(lichChieu.ngayChieuGioChieu).format(
                                                                    "hh:mm A"
                                                                )}
                                                            </NavLink>
                                                        })}
                                                    </div>
                                                    <hr />
                                                </div>
                                            })}

                                        </div>
                                    })}
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <div className="film__info">
                            <p>Giờ chiếu : <span>{moment(chiTietLichChieu.ngayKhoiChieu).format("hh:mm A")}</span></p>
                            <p>Nội dung : <br /><span>{chiTietLichChieu.moTa}</span></p>
                        </div>
                    </div>
                </div>
            </div>

            <Popup trigger={showVideo} setTrigger={setShowVideo}>
                <iframe className="videos-wrapper" src={chiTietLichChieu.trailer} frameborder="0" allow="autoplay" allowFullScreen={true}></iframe>
            </Popup>
        </div >
    );
}

export default Detail;

