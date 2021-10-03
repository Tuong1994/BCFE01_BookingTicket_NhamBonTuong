import React from 'react';
import { NavLink } from 'react-router-dom';

function Movie({ cineplex, showMovie }) {
    return (
        <div className="subtabs__movie">
            {cineplex.lstCumRap?.map((cinema, index) => {
                return <div className={showMovie == index ? "movie__inner show-movie" : "movie__inner"} key={index}>
                    {cinema.danhSachPhim?.map((movie, index) => {
                        return <div className="movie" key={index}>
                            <div className="movie__img">
                                <img src={movie.hinhAnh} alt={movie.tenPhim} />
                            </div>
                            <div className="movie__info">
                                {movie.tenPhim?.length > 25 ? <p>{movie.tenPhim.substr(0, 25)}...</p> : <p>{movie.tenPhim}</p>}
                                <NavLink className="button" to={`/film_detail/${movie.maPhim}`} key={index}>
                                    <i class="fa fa-calendar-alt"></i>
                                    <span>Chọn suất chiếu</span>
                                </NavLink>
                            </div>
                        </div>
                    })}
                </div>
            })}
        </div>
    );
}

export default Movie;