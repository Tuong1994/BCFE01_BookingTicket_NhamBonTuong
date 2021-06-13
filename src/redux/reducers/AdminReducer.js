const stateDefault = {
    userList: [],
    user: {},
}

export const AdminReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case "GET_USER_LIST": {
            state.userList = action.user;
            return {...state}
        }
        case "USER_DETAIL" : {
            state.user = action.user;
            return {...state}
        }
        default: return {...state};
    }
}
