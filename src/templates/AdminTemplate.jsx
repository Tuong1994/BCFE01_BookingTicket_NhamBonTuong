import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router';
import { NavLink } from 'react-router-dom';

export const AdminTemplate = (props) => {
    const { account } = useSelector(state => state.UserReducer);

    const [show, setShow] = useState(false);
    const [shrink, setShrink] = useState(false);

    let showAcitve = () => setShow(!show);
    let shrinked = () => setShrink(!shrink);

    let { Component, ...restProps } = props;

    return <Route {...restProps} render={(propsRoute) => {
        return <div className="admin">
            <div className={shrink ? "admin__sidebar shrink" : "admin__sidebar"}>
                <NavLink to="/" className="admin__logo">
                    <img src="../../img/logo.png" />
                </NavLink>

                <div className={show ? "admin__menu show" : "admin__menu"}>
                    <NavLink className="admin__link" to="/dashboard" onClick={() => {
                        setShow(false)
                    }}>
                        <i class={shrink ? "fa fa-chart-line icon__active" : "fa fa-chart-line"}></i>
                        <span className={shrink ? "link__hide" : ""}>Dashboard</span>
                    </NavLink>
                    <NavLink className="admin__link" to="/movie_manage" onClick={() => {
                        setShow(false)
                    }}>
                        <i class={shrink ? "fa fa-film icon__active" : "fa fa-film"}></i>
                        <span className={shrink ? "link__hide" : ""}>Quản lý phim</span>
                    </NavLink>
                    <NavLink className="admin__link" to="/user_manage" onClick={() => {
                        setShow(false)
                    }}>
                        <i class={shrink ? "fa fa-users icon__active" : "fa fa-users"}></i>
                        <span className={shrink ? "link__hide" : ""}>Quản lý người dùng</span>
                    </NavLink>
                    <NavLink className="admin__link sub-btn" to="/" onClick={() => {
                        setShow(false)
                    }}>
                        <i class="fa fa-angle-double-left"></i>
                        <span>Về trang chủ</span>
                    </NavLink>
                </div>

                <button className="btn-show" onClick={showAcitve}>
                    {show ? <i class="fa fa-times"></i> : <i class="fa fa-align-right"></i>}
                </button>
            </div>

            <div className="admin__content">
                <div className="admin__bar">
                    <button className={shrink ? "admin__btn active__btn" : "admin__btn"} onClick={() => {
                        shrinked()
                    }}>
                        <i class="fa fa-expand"></i>
                    </button>
                    <NavLink className="admin__login" to="/user">
                        <img src="https://picsum.photos/200" />
                        <span>Hello, {account}</span>
                    </NavLink>
                </div>
                <Component {...propsRoute} />
            </div>
        </div>
    }} />
}