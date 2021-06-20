import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router';
import { NavLink } from 'react-router-dom';

export const AdminTemplate = (props) => {
    let { account } = useSelector(state => state.UserReducer);
    const [show, setShow] = useState(false);
    let showAcitve = () => setShow(!show);
    let { Component, ...restProps } = props;
    return <Route {...restProps} render={(propsRoute) => {
        return <div className="admin-wrapper">
            <div className="admin__info">
                <div className="admin__login">
                    <span>Hello, {account}</span>
                    <span><i class="fa fa-user"></i></span>
                </div>

                <div className={show ? "admin__menu show" : "admin__menu"}>
                    <NavLink className="admin__link" to="/dashboard">
                        <i class="fa fa-chart-line"></i>
                        <span>Dashboard</span>
                    </NavLink>
                    <NavLink className="admin__link" to="/film_manage">
                        <i class="fa fa-film"></i>
                        <span>Quản lý Phim</span>
                    </NavLink>
                    <NavLink className="admin__link" to="/user_manage">
                        <i class="fa fa-users"></i>
                        <span>Quản lý người dùng</span>
                    </NavLink>
                    <NavLink className="admin__link sub-btn" to="/">
                        <i class="fa fa-angle-double-left"></i>
                        <span>Về trang chủ</span>
                    </NavLink>
                </div>

                <div className="admin__return">
                    <NavLink className="btn-return-1" to="/">
                        <i class="fa fa-angle-double-left"></i>
                    </NavLink>
                    <NavLink className="btn-return-2" to="/">
                        <span>Quay lại trang chủ</span>
                    </NavLink>
                </div>

                <button className="btn-show" onClick={showAcitve}>
                    {show ? <i class="fa fa-times"></i> : <i class="fa fa-align-right"></i>}
                </button>

            </div>
            <div className="admin__content">
                <Component {...propsRoute} />
            </div>
        </div>
    }} />
}