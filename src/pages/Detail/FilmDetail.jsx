import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getShowTimeDetail } from '../../redux/action/PhimAction';
import { Link } from 'react-scroll';
import CinemaDetail from './CinemaDetail';
import MovieTrailer from '../../component/MovieTrailer/MovieTrailer';

function Detail(props) {
    let dispatch = useDispatch();

    const { chiTietLichChieu, phimTrailer } = useSelector(state => state.PhimReducer);
    const { loading } = useSelector(state => state.LoadingReducer)

    const [showTrailer, setShowTrailer] = useState(false);

    useEffect(() => {
        dispatch({
            type: "openLoading"
        })
        window.scrollTo(0, 0);
        let { id } = props.match.params;
        dispatch(getShowTimeDetail(id));
    }, [])

    useEffect(() => {
        setTimeout(() => {
            dispatch({
                type: "closeLoading"
            })
        }, 1000)
    }, [loading])

    return (
        <div className="detail" style={{ backgroundImage: `url(${chiTietLichChieu.hinhAnh})` }}>
            <div className="detail__film">
                <div className="film">
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
                                    setShowTrailer(true)
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

                    <div className="film__review">
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
                <CinemaDetail chiTietLichChieu={chiTietLichChieu} />
            </div>

            <MovieTrailer showTrailer={showTrailer} setShowTrailer={setShowTrailer} phimTrailer={phimTrailer}/>
        </div >
    );
}

export default Detail;

