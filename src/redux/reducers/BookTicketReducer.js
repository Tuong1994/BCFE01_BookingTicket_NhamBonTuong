const stateDefault = {
  DSGheDangDat: [],
  hinhThucThanhToan: "",
  thanhCong: false,
  hetGio: false,
};

export const BookTicketReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "BOOKING": {
      let index = state.DSGheDangDat.findIndex(
        (chair) => chair.maGhe === action.chair.maGhe
      );
      if (index !== -1) {
        state.DSGheDangDat.splice(0, 1);
      } else {
        state.DSGheDangDat.push(action.chair);
      }
      state.DSGheDangDat = [...state.DSGheDangDat];
      return { ...state };
    }
    case "PAY_CHECK": {
      state.hinhThucThanhToan = action.pay;
      return { ...state };
    }
    case "TIME_OUT": {
      state.hetGio = true;
      return { ...state };
    }
    case "openBookInfo": {
      state.thanhCong = true;
      return { ...state };
    }
    case "closeBookInfo": {
      state.thanhCong = false;
    }
    default:
      return { ...state };
  }
};
