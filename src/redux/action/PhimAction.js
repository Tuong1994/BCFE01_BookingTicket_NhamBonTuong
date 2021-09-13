import axios from "axios";
import Swal from "sweetalert2";
import { accessToken, domain, maNhom } from "../../configs/setting";

export const getMovieAction = () => {
  return (dispatch) => {
    dispatch({
      type: "openLoading",
    });
    setTimeout(async () => {
      try {
        const result = await axios({
          url: `${domain}/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`,
          method: "GET",
        });
        dispatch({
          type: "GET_MOVIE",
          danhSachPhim: result.data,
        });
        dispatch({
          type: "closeLoading",
        });
      } catch (error) {
        console.log(error.response?.data);
      }
    }, 1000);
  };
};

export const getCinemaAction = () => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `${domain}/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${maNhom}`,
        method: "GET",
      });
      dispatch({
        type: "GET_CINEMA",
        danhSachRapChieu: result.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getShowTimeDetail = (maPhim) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `${domain}/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
        method: "GET",
      });
      dispatch({
        type: "GET_SHOWTIME_DETAIL",
        chiTietLichChieu: result.data,
      });
    } catch (error) {
      console.log("showTime", error.response.data);
    }
  };
};

export const getTicketAction = (maLichChieu) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `${domain}/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
        method: "GET",
      });
      dispatch({
        type: "GET_TICKET",
        thongTinRapChieu: result.data,
      });
    } catch (error) {
      console.log("error", error.response.data);
    }
  };
};

export const bookMovieAction = (thongTinVe) => {
  return async (dispatch) => {
    try {
      await axios({
        url: `${domain}/api/QuanLyDatVe/DatVe`,
        method: "POST",
        data: thongTinVe,
        headers: {
          Authorization: "Bearer " + localStorage.getItem(accessToken),
        },
      });
      dispatch(getTicketAction(thongTinVe.maLichChieu));
      dispatch({
        type: "openBookInfo",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        text: error.response?.data,
      });
    }
  };
};
