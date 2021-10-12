import axios from "axios";
import Swal from "sweetalert2";
import { history } from "../../App";
import { domain, taiKhoan, accessToken } from "../../configs/setting";

export const signInAction = (user) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `${domain}/api/QuanLyNguoiDung/DangNhap`,
        method: "POST",
        data: user,
      });
      localStorage.setItem(accessToken, result.data.accessToken);
      localStorage.setItem(taiKhoan, JSON.stringify(result.data));
      dispatch({
        type: "SIGN_IN",
        taiKhoan: result.data,
      });
      setTimeout(() => {
        history.push("/");
        dispatch({
          type: "closeBtnLoading",
        });
      }, 2000);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error.response.data,
      });
      dispatch({
        type: "closeBtnLoading",
      });
    }
  };
};

export const signUpAction = (user) => {
  return async (dispatch) => {
    try {
      await axios({
        url: `${domain}/api/QuanLyNguoiDung/DangKy`,
        method: "POST",
        data: user,
      });
      dispatch(signInAction(user));
      setTimeout(() => {
        history.push("/");
        dispatch({
          type: "closeBtnLoading",
        });
      }, 2000);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error.response.data,
      });
      dispatch({
        type: "closeBtnLoading",
      });
    }
  };
};

export const updateAction = (user) => {
  return (dispatch) => {
    setTimeout(async () => {
      try {
        const result = await axios({
          url: `${domain}/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
          method: "PUT",
          data: user,
          headers: {
            Authorization: "Bearer " + localStorage.getItem(accessToken),
          },
        });
        localStorage.setItem(taiKhoan, JSON.stringify(result.data));
        Swal.fire({
          icon: "success",
          title: "Cập nhật thành công",
        });
        history.push("/user");
        dispatch({
          type: "UPDATE_ACC",
          taiKhoan: result.data,
        });
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

export const bookHistoryAction = (user) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `${domain}/api/QuanLyNguoiDung/ThongTinTaiKhoan`,
        method: "POST",
        data: user,
        headers: {
          Authorization: "Bearer " + localStorage.getItem(accessToken),
        },
      });
      dispatch({
        type: "BOOK_HISTORY",
        taiKhoan: result.data,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error,
      });
    }
  };
};
