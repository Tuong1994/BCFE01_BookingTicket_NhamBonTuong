import { accessToken, taiKhoan } from "../../configs/setting";

let accountInfo = "";
if (localStorage.getItem(taiKhoan)) {
  let userLogin = localStorage.getItem(taiKhoan);
  accountInfo = JSON.parse(userLogin);
}

const stateDefault = {
  accountInfo: accountInfo,
  userBookedInfo: "",
  bookDetail: [],
};

export const UserReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "SIGN_IN": {
      state.accountInfo = action.taiKhoan;
      return { ...state };
    }
    case "LOG_OUT": {
      localStorage.removeItem(taiKhoan);
      localStorage.removeItem(accessToken);
      state.accountInfo = "";
      return { ...state };
    }
    case "UPDATE_ACC": {
      state.accountInfo = action.taiKhoan;
      return { ...state };
    }
    case "BOOK_HISTORY": {
      state.userBookedInfo = action.taiKhoan;
      return { ...state };
    }
    case "GET_BOOKED_DETAIL": {
      state.bookDetail = action.bookDetail;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
