const stateDefault = {
    postList: [
        {
            name: "thanh1994",
            content: "This movie is awsome, you guys should see it!!!!",
            avatar: "https://m.media-amazon.com/images/I/71RxoD8UOCL._AC_SX425_.jpg"
        },
        {
            name: "nguyen_ryan1994",
            content: "This movie is suck, you guys shouldn't see it!!!!",
            avatar: "https://ict-imgs.vgcloud.vn/2020/09/01/19/huong-dan-tao-facebook-avatar.jpg"
        },
        {
            name: "tuong94",
            content: "Still Ok, but need more improvement",
            avatar: "https://cdn.mos.cms.futurecdn.net/eRugth5FK6fMPiGhxVEgFh.jpg"
        },
    ]
}

export const PostReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case "USER_POST": {
            state.postList.shift(action.post);
            return {...state}
        }
        default:
            return { ...state }
    }
}