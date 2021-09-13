import React from 'react';
import { useSelector } from 'react-redux';

function MovieInFo({ movieInfo, setMovieInfo }) {
    const { phim } = useSelector(state => state.PhimReducer);
    return (
        <div className={movieInfo ? "movie-info active" : "movie-info"}>
            <h5>Thông Tin Chi Tiết</h5>
            <hr />
            <div className="movie-info__item">
                <div className="movie-info__img">
                    <img src={phim.hinhAnh} alt={phim.tenPhim} />
                </div>
                <div className="movie-info__content">
                    <p>Tên Phim : <span>{phim.tenPhim}</span></p>
                    <p>Bí Danh : <span>{phim.biDanh}</span></p>
                    <p>Trailer : <span>{phim.trailer}</span></p>
                    <p>Đánh Giá : <span>{phim.danhGia}</span></p>
                    <p>Mô Tả : <br />{phim.moTa?.length > 200 ? <span>{phim.moTa.substr(0, 200)}...</span> : <span>{phim.moTa}</span>}</p>
                </div>
            </div>
            <hr />
            <div className="movie-info__btn">
                <button className="btn-blue" onClick={() => {
                    setMovieInfo(false)
                }}>Quay lại</button>
            </div>
        </div>
    );
}

export default MovieInFo;