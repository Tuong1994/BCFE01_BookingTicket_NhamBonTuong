const stateDefault = {
  danhSachPhim: [],
  danhSachRapChieu: [],
  chiTietLichChieu: {},
  lichChieu: {},
  thongTinRapChieu: {},
  phimTrailer: {},
  phim: {},
};

export const PhimReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "GET_MOVIE": {
      state.danhSachPhim = [...action.danhSachPhim];
      return { ...state };
    }
    case "GET_TRAILER": {
      state.phimTrailer = action.film;
      return { ...state };
    }
    case "GET_CINEMA": {
      state.danhSachRapChieu = action.danhSachRapChieu;
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
    case "GET_FILM_DETAIL": {
      state.phim = action.film;
      return { ...state };
    }
    case "GET_SCHEDULE": {
      state.lichChieu = action.lichChieu;
      return {...state}
    }
    default:
      return { ...state };
  }
};
