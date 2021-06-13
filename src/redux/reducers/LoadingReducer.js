const stateDefault = {
    loading: true 
}

export const LoadingReducer = (state = stateDefault, action) => {
    switch(action.type) {
        case "openLoaidng" : {
            state.loading = true;
            return {...state};
        }
        case "closeLoading" : {
            state.loading = false;
            return {...state};
        }
        default : return {...state};
    }
}