import { taiKhoan } from "../../configs/setting";

let signInAccounts = "";
let accountInfo = "";
if (localStorage.getItem(taiKhoan)) {
  let account = localStorage.getItem(taiKhoan);
  accountInfo = JSON.parse(account);
  signInAccounts = JSON.parse(account).taiKhoan;
}

const stateDefault = {
  account: signInAccounts,
  accountInfo: accountInfo,
};

export const UserReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "SIGN_IN": {
      state.accountInfo = action.taiKhoan;
      state.account = action.taiKhoan;
      return { ...state };
    }
    case "LOG_OUT": {
      state.account = "";
      return { ...state };
    }
    case "UPDATE_ACC": {
      state.accountInfo = action.taiKhoan;
      return {...state};
    }
    case "BOOK_HISTORY": {
      state.accountInfo = {...action.taiKhoan};
      return {...state};
    }
    default:
      return { ...state };
  }
};
