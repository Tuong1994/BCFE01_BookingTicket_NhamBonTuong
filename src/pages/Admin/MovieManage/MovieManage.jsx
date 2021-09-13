import React, { useState, useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieAction } from '../../../redux/action/PhimAction';
import { delMovieAction } from '../../../redux/action/AdminAction';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import AdminLoading from '../../../component/Loading/AdminLoading';
import AddMovie from './AddMovie';
import MovieInfo from './MovieInfo';
import Pagination from '../../../component/Pagination/Pagination';

function MovieManage(props) {
    const { danhSachPhim } = useSelector(state => state.PhimReducer);
    const { loading } = useSelector(state => state.LoadingReducer);

    const [addMovie, setAddMovie] = useState(false);
    const [movieInfo, setMovieInfo] = useState(false);
    const [searchMovie, setSearchMovie] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [moviePerPage] = useState(10);

    const indexOfLastMovie = currentPage * moviePerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviePerPage;

    let changePage = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: "openLoading"
        })
        dispatch(getMovieAction());
    }, [])

    useEffect(() => {
        setTimeout(() => {
            dispatch({
                type: "closeLoading"
            })
        }, 1000);
    }, [loading])

    let renderMovieList = () => {
        return danhSachPhim?.filter((movie) => {
            if (searchMovie === "") {
                return movie
            } else if (movie.tenPhim.toLowerCase().includes(searchMovie.toLowerCase())) {
                return movie
            }
        }).slice(indexOfFirstMovie, indexOfLastMovie).map((movie, index) => {
            return <div className="table__list-row" key={index}>
                <div className="table__col table__col-0">
                    <p className="table__btn table__btn-rwd" title="Xem Chi Tiết" onClick={() => {
                        setMovieInfo(true);
                        dispatch({
                            type: "GET_FILM_DETAIL",
                            film: movie,
                        })
                    }}><i class="fa fa-bars"></i></p>
                    <p className="table__btn" title="Lịch chiếu"><i class="fa fa-clock"></i></p>
                    <NavLink to="/update_movie" className="table__btn" title="Chỉnh sửa" onClick={() => {
                        dispatch({
                            type: "GET_FILM_DETAIL",
                            film: movie,
                        })
                    }}><i class="fa fa-edit"></i></NavLink>
                    <p className="table__btn" title="Xóa" onClick={() => {
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
                                dispatch(delMovieAction(movie.maPhim));
                            }
                        });
                    }}><i class="fa fa-trash-alt"></i></p>
                </div>
                <div className="table__col table__col-1">{index + 1}</div>
                <div className="table__col table__col-2">
                    <p>{movie.maPhim}</p>
                </div>
                <div className="table__col table__col-3">
                    <p>{movie.maNhom}</p>
                </div>
                <div className="table__col table__col-4">
                    <p>{movie.tenPhim}</p>
                </div>
                <div className="table__col table__col-5">
                    <p>{movie.biDanh}</p>
                </div>
                <div className="table__col table__col-6">
                    {movie.trailer.length > 25 ? <p>{movie.trailer.substr(0, 25)}...</p> : <p>{movie.trailer}</p>}
                </div>
                <div className="table__col table__col-7">
                    <img src={`${movie.hinhAnh}`} alt={`${movie.tenPhim}`} />
                </div>
                <div className="table__col table__col-8">
                    <textarea cols="30" rows="2" value={movie.moTa}></textarea>
                </div>
                <div className="table__col table__col-9">
                    <p>{movie.danhGia}</p>
                </div>
            </div>
        })
    }

    return (
        <div className="movie-manage">
            <MovieInfo movieInfo={movieInfo} setMovieInfo={setMovieInfo} />

            <div className="movie-manage__title">
                <h4>Quản Lý Phim</h4>
                <div className="title__form">
                    <div className="form__search">
                        <input type="text" placeholder="Tìm kiếm phim..." onChange={(e) => {
                            setSearchMovie(e.target.value);
                        }} />
                        <div className="search__btn"><i class="fa fa-search"></i></div>
                    </div>
                    <div className="button form__btn" onClick={() => {
                        setAddMovie(true)
                    }}>
                        <i class="fa fa-plus"></i>
                        <span>Thêm Phim</span>
                    </div>
                </div>
            </div>

            <hr />

            <div className="movie-manage__list">
                <h5>Danh Sách Phim</h5>
                <div className="list__table">
                    <div className="table__title">
                        <div className="table__col table__col-0"><i class="fa fa-cog"></i></div>
                        <div className="table__col table__col-1">STT</div>
                        <div className="table__col table__col-2">ID</div>
                        <div className="table__col table__col-3">Mã Nhóm</div>
                        <div className="table__col table__col-4">Tên Phim</div>
                        <div className="table__col table__col-5">Bí Danh</div>
                        <div className="table__col table__col-6">Trailer</div>
                        <div className="table__col table__col-7">Hình Ảnh</div>
                        <div className="table__col table__col-8">Mô Tả</div>
                        <div className="table__col table__col-9">Đánh Giá</div>
                    </div>

                    <div className="table__item">
                        <AdminLoading />
                        {renderMovieList()}
                    </div>
                </div>
                <Pagination perPage={moviePerPage} total={danhSachPhim.length} changePage={changePage} />
            </div>

            <AddMovie addMovie={addMovie} setAddMovie={setAddMovie} />
        </div>
    );
}

export default memo(MovieManage);