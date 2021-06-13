const stateDefault = {
  DSGheDangDat: [],
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
    default:
      return { ...state };
  }
};
