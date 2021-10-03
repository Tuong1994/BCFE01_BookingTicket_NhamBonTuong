import React from 'react';
import { NavLink } from 'react-router-dom';

function PostAlert({showAlert, setShowAlert}) {
    return (
        <div className={showAlert ? "post__alert show-alert" : "post__alert"}>
            <div className="alert__inner">
                <i className="fa fa-times"  onClick={() => {
                    setShowAlert(false);
                }}></i>
                <p>Bạn chưa đăng nhập</p>
                <hr />
                <div className="inner__button">
                    <NavLink className="button" to="/login">Đăng nhập tại đây</NavLink>
                </div>
            </div>
        </div>
    );
}

export default PostAlert;