import React from 'react';
import { useSelector } from 'react-redux';

function PostList(props) {
    const { postList } = useSelector(state => state.PostReducer);
    console.log(postList);

    return (
        <div className="post__list">
            {postList.map((post, index) => {
                return <div className="list__item" key={index}>
                    <div className="item__info">
                        <img src={post.avatar} alt={post.name} />
                        <p>{post.name}</p>
                    </div>
                    <div className="item__post">
                        <p>{post.content}</p>
                    </div>
                    <div className="item__like">
                        <span><i class="fa fa-thumbs-up"></i></span>
                        <span>0</span>
                        <span>Thích</span>
                    </div>
                </div>
            })}
        </div>
    );
}

export default PostList;