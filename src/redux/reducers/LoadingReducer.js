const stateDefault = {
  loading: true,
  btnLoading: false,
};

export const LoadingReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "openLoading": {
      state.loading = true;
      return { ...state };
    }
    case "closeLoading": {
      state.loading = false;
      return { ...state };
    }
    case "openBtnLoading": {
      state.btnLoading = true;
      return { ...state };
    }
    case "closeBtnLoading": {
      state.btnLoading = false;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
