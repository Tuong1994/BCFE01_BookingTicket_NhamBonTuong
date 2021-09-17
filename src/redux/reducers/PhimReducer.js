const stateDefault = {
  danhSachHeThongRap: [],
  danhSachRapTheoHeThong: [],
  danhSachRapChieu: [],
  danhSachPhim: [],
  danhSachPhimTimKiem: [],
  chiTietLichChieu: {},
  thongTinRapChieu: {},
  lichChieu: {},
  phimTrailer: {},
  phim: {},
};

export const PhimReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "GET_CINEPLEX": {
      state.danhSachHeThongRap = action.danhSachHeThongRap;
      return { ...state };
    }
    case "GET_CINEMA_BY_CINEPLEX": {
      state.danhSachRapTheoHeThong = action.danhSachRapTheoHeThong;
      return { ...state };
    }
    case "GET_CINEMA": {
      state.danhSachRapChieu = action.danhSachRapChieu;
      return { ...state };
    }
    case "GET_MOVIE": {
      state.danhSachPhim = [...action.danhSachPhim];
      return { ...state };
    }
    case "GET_TRAILER": {
      state.phimTrailer = action.film;
      return { ...state };
    }
    case "GET_MOVIE_DETAIL_BY_SEARCH": {
      state.danhSachPhimTimKiem = action.phim;
      return { ...state };
    }
    case "GET_FILM_DETAIL": {
      state.phim = action.film;
      return { ...state };
    }
    case "GET_SHOWTIME_DETAIL": {
      state.chiTietLichChieu = { ...action.chiTietLichChieu };
      return { ...state };
    }
    case "GET_TICKET": {
      state.thongTinRapChieu = { ...action.thongTinRapChieu };
      return { ...state };
    }
    case "GET_SCHEDULE": {
      state.lichChieu = action.lichChieu;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
