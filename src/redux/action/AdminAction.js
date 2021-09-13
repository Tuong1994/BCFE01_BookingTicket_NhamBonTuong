import axios from "axios";
import Swal from "sweetalert2";
import { accessToken, domain } from "../../configs/setting";
import { getMovieAction } from "./PhimAction";

export const addMovieAction = (film) => {
  return (dispatch) => {
    setTimeout(async () => {
      try {
        await axios({
          url: `${domain}/api/QuanLyPhim/ThemPhimUploadHinh`,
          method: "POST",
          data: film,
          headers: {
            Authorization: "Bearer" + localStorage.getItem(accessToken),
          },
        });
        Swal.fire({
          icon: "success",
          title: "Thêm phim thành công",
        });
        dispatch(getMovieAction());
        dispatch({
          type: "closeBtnLoading",
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: error.response.data,
        });
        dispatch({
          type: "closeBtnLoading",
        });
      }
    }, 2000);
  };
};

export const createScheduleAction = (film) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `${domain}/api/QuanLyDatVe/TaoLichChieu`,
        method: "POST",
        data: film,
        headers: {
          Authorization: "Bearer " + localStorage.getItem(accessToken),
        },
      });
      Swal.fire({
        icon: "success",
        title: "Tạo lịch chiếu thành công",
      });
      dispatch(getMovieAction());
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error.response?.data,
      });
    }
  };
};

export const updateMovieAction = (film) => {
  return (dispatch) => {
    setTimeout(async () => {
      try {
        await axios({
          url: `${domain}/api/QuanLyPhim/CapNhatPhimUpload`,
          method: "POST",
          data: film,
          headers: {
            Authorization: "Bearer " + localStorage.getItem(accessToken),
          },
        });
        Swal.fire({
          icon: "success",
          title: "Cập nhật thành công",
        });
        dispatch(getMovieAction());
        dispatch({
          type: "closeBtnLoading",
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: error.response?.data,
        });
        dispatch({
          type: "closeBtnLoading",
        });
      }
    }, 1500);
  };
};

export const delMovieAction = (maPhim) => {
  return async (dispatch) => {
    try {
      await axios({
        url: `${domain}/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
        method: "DELETE",
        data: maPhim,
        headers: {
          Authorization: "Bearer " + localStorage.getItem(accessToken),
        },
      });
      dispatch(getMovieAction());
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error.response?.data,
      });
      console.log(error);
    }
  };
};

export const getUserListAction = () => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `${domain}/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01`,
        method: "GET",
      });
      dispatch({
        type: "GET_USER_LIST",
        user: result.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addUserAction = (user) => {
  return (dispatch) => {
    setTimeout(async () => {
      try {
        await axios({
          url: `${domain}/api/QuanLyNguoiDung/ThemNguoiDung`,
          method: "POST",
          data: user,
          headers: {
            Authorization: "Bearer " + localStorage.getItem(accessToken),
          },
        });
        Swal.fire({
          icon: "success",
          title: "Thêm thành công",
        });
        dispatch(getUserListAction());
        dispatch({
          type: "closeBtnLoading",
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: error.response.data,
        });
        dispatch({
          type: "closeBtnLoading",
        });
      }
    }, 1000);
  };
};

export const updateUserAction = (user) => {
  return (dispatch) => {
    setTimeout(async () => {
      try {
        await axios({
          url: `${domain}/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
          method: "PUT",
          data: user,
          headers: {
            Authorization: "Bearer " + localStorage.getItem(accessToken),
          },
        });
        Swal.fire({
          icon: "success",
          title: "Cập nhật thành công",
        });
        dispatch(getUserListAction());
        dispatch({
          type: "closeBtnLoading",
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: error.response?.data,
        });
        dispatch({
          type: "closeBtnLoading",
        });
      }
    }, 1000);
  };
};

export const delUserAction = (user) => {
  return async (dispatch) => {
    try {
      await axios({
        url: `${domain}/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${user}`,
        method: "DELETE",
        data: user,
        headers: {
          Authorization: "Bearer " + localStorage.getItem(accessToken),
        },
      });
      dispatch(getUserListAction());
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error.response?.data,
      });
    }
  };
};
