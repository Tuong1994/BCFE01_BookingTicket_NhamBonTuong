import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function PostInput({ showInput, setShowInput }) {
    const { accountInfo } = useSelector(state => state.UserReducer);
    const [postContent, setPostContent] = useState("");
    let dispatch = useDispatch();

    return (
        <div className={showInput ? "post__input show-input" : "post__input"}>
            <div className="input">
                <span className="input__close" onClick={() => {
                    setShowInput(false);
                }}>
                    <i className="fa fa-times"></i>
                </span>
                <div className="input__rating">
                    <p></p>
                </div>
                <div className="input__textarea">
                    <textarea className="textarea" cols="30" rows="5" placeholder="Bạn nghĩ gì về phim này?" onChange={(e) => {
                        setPostContent(e.target.value)
                    }}></textarea>
                </div>
                <div className="input__button">
                    <button className="button" onClick={() => {
                        let post = {
                            name: accountInfo.hoTen,
                            content: postContent,
                            avatar: "https://i.pravatar.cc/300"
                        }
                        dispatch({
                            type: "USER_POST",
                            post,
                        });
                        setShowInput(false);
                    }}>Đăng</button>
                </div>
            </div>
        </div>
    );
}

export default PostInput;