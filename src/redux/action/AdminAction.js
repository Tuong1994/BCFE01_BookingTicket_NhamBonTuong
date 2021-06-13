import axios from "axios";
import Swal from "sweetalert2";
import { accessToken, domain, maNhom } from "../../configs/setting";
import { getMovieAction } from "./PhimAction";

export const addMovieAction = (film) => {
  return async (dispatch) => {
    try {
      const result = await axios({
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
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error.response.data,
      });
      console.log(error.response.data);
    }
  };
};

export const updateMovieAction = (film) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `${domain}/api/QuanLyPhim/CapNhatPhimUpload`,
        method: "PUT",
        data: film,
        headers: {
          Authorization: "Bearer " + localStorage.getItem(accessToken),
        },
      });
      Swal.fire({
        icon: "success",
        title: "Cập nhật thành công"
      })
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error.response?.data
      })
      console.log(error.response?.data);
    }
  };
};

export const delMovieAction = (maPhim) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `${domain}/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
        method: "DELETE",
        data: maPhim,
        headers: {
          Authorization: "Bearer " + localStorage.getItem(accessToken),
        },
      });
      console.log(result.data);

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
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `${domain}/api/QuanLyNguoiDung/ThemNguoiDung`,
        method: "POST",
        data: user,
        headers: {
          Authorization: "Bearer " + localStorage.getItem(accessToken),
        },
      });
      console.log(result.data);
      Swal.fire({
        icon: "success",
        title: "Thêm thành công",
      });
      dispatch(getUserListAction());
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error.response.data,
      });
      console.log(error.response.data);
    }
  };
};

export const updateUserAction = (user) => {
  return async (dispatch) => {
    try {
      const result = await axios({
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
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error.response?.data,
      });
      console.log(error.response.data);
    }
  };
};

export const delUserAction = (user) => {
  return async (dispatch) => {
    try {
      const result = await axios({
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
      console.log(error);
    }
  };
};
