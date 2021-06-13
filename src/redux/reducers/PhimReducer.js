const stateDefault = {
    danhSachPhim : [],
    phimTrailer: {},
    phim: {},
    chiTietRapChieu: [],
    chiTietLichChieu: {},
    thongTinRapChieu: {},
}

export const PhimReducer = (state = stateDefault, action) => {
    switch(action.type) {
        case "GET_MOVIE" : {
            state.danhSachPhim = [...action.danhSachPhim];
            return {...state};
        }
        case "GET_TRAILER" : {
            state.phimTrailer = action.film;
            return {...state};
        }
        case "GET_CINEMA_DETAIL" : {
            state.chiTietRapChieu = action.chiTietRapChieu;
            return {...state};
        }
        case "GET_SHOWTIME_DETAIL" : {
            state.chiTietLichChieu = {...action.chiTietLichChieu};
            return {...state};
        }
        case "GET_TICKET" : {
            state.thongTinRapChieu = {...action.thongTinRapChieu};
            return {...state};
        }
        case "GET_FILM_DETAIL" : {
            state.phim = action.film;
            return {...state};
        }
        default: return {...state};
    }
}