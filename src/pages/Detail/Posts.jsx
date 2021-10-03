import React from 'react';
import { useState } from 'react';
import PostInput from './PostInput';
import PostList from './PostList';
import PostAlert from './PostAlert';
import { taiKhoan } from '../../configs/setting';

function Posts(props) {
    const [showInput, setShowInput] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    return (
        <div className="post">
            <div className="post__button" onClick={() => {
                if(!localStorage.getItem(taiKhoan)) {
                    setShowAlert(true);
                    return
                }
                setShowInput(true);
            }}>
                <div className="button__acc">
                    <img src="https://i.pravatar.cc/300" alt="avatar" />
                    <p>Bạn nghĩ gì về phim này?</p>
                </div>
                <div className="button__stars">
                    <span><i class="fa fa-star"></i></span>
                    <span><i class="fa fa-star"></i></span>
                    <span><i class="fa fa-star"></i></span>
                    <span><i class="fa fa-star"></i></span>
                    <span><i class="fa fa-star"></i></span>
                </div>
            </div>
            <PostInput showInput={showInput} setShowInput={setShowInput}/>
            <PostList />
            <PostAlert showAlert={showAlert} setShowAlert={setShowAlert}/>
        </div>
    );
}

export default Posts;