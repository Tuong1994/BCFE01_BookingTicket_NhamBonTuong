import React from 'react';

function Posts(props) {
    return (
        <div className="rating">
            <div className="rating__input">
                <div className="input__acc">
                    <img src="https://i.pravatar.cc/300" alt="avatar" />
                    <p>Bạn nghĩ gì về phim này?</p>
                </div>
                <div className="input__stars">
                    <span><i class="fa fa-star"></i></span>
                    <span><i class="fa fa-star"></i></span>
                    <span><i class="fa fa-star"></i></span>
                    <span><i class="fa fa-star"></i></span>
                    <span><i class="fa fa-star"></i></span>
                </div>
            </div>
        </div>
    );
}

export default Posts;