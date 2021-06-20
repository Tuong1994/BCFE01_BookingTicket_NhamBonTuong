import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router';
import { NavLink } from 'react-router-dom';
import { taiKhoan } from '../configs/setting';
import { bookHistoryAction } from '../redux/action/UserAction';

export const UserTemplate = (props) => {
    let { account } = useSelector(state => state.UserReducer);
    const [menu, setMenu] = useState(false);
    let showMenu = () => setMenu(!menu);
    let dispatch = useDispatch();
    let { Component, ...restProps } = props;
    return <Route {...restProps} render={(propsRoute) => {
        return <div className="usertemplate-wrapper">
            <div className="user__info">
                <div className="user__logo">
                    <img src="https://picsum.photos/200" alt="" />
                    <p>Hello, {account}</p>
                </div>

                <div className={menu ? "user__menu show__menu" : "user__menu"}>
                    <NavLink className="user__link" to="/user_info">
                        <i class="fa fa-user-circle"></i>
                        <span>Thông tin cá nhân</span>
                    </NavLink>
                    <NavLink className="user__link" to="/history" onClick={() => {
                        let accLogin = JSON.parse(localStorage.getItem(taiKhoan)).taiKhoan;
                        let userObject = {
                            taiKhoan: accLogin
                        }
                        dispatch(bookHistoryAction(userObject))
                    }}>
                        <i class="fa fa-film"></i>
                        <span>Lịch sử</span>
                    </NavLink>
                    <NavLink className="user__link sub-btn" to="/">
                        <i class="fa fa-angle-double-left"></i>
                        <span>Về trang chủ</span>
                    </NavLink>
                </div>

                <div className="user__button">
                    <NavLink className="btn-return-1" to="/">
                        <i class="fa fa-angle-double-left"></i>
                    </NavLink>
                    <NavLink className="btn-return-2" to="/">
                        <span>Quay lại trang chủ</span>
                    </NavLink>
                </div>

                <button className="btn-show" onClick={() => showMenu()}>
                    {menu ? <i class="fa fa-times"></i> : <i class="fa fa-align-right"></i>}
                </button>

            </div>
            <div className="user__content">
                <Component {...propsRoute} />
            </div>
        </div>
    }} />
}