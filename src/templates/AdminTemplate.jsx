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
                    <button className="btn-show" onClick={showAcitve}><i class="fa fa-user"></i></button>
                    <div className={show ? "admin__submenu show" : "admin__submenu"}>
                        <NavLink className="info__link" to="/admin_info">
                            Thông tin tài khoản
                        </NavLink>
                    </div>
                </div>

                <div className="admin__menu">
                    <NavLink className="admin__link" to="/film_manage">
                        <i class="fa fa-film"></i>
                        <span>Quản lý Phim</span>
                    </NavLink>
                    <NavLink className="admin__link" to="/user_manage">
                        <i class="fa fa-users"></i>
                        <span>Quản lý người dùng</span>
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

                <NavLink className="sub-btn" to="/">
                    <i class="fa fa-angle-double-left"></i>
                </NavLink>
                
            </div>
            <div className="admin__content">
                <Component {...propsRoute} />
            </div>
        </div>
    }} />
}