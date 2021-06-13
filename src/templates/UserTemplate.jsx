import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router';
import { NavLink } from 'react-router-dom';
import { taiKhoan } from '../configs/setting';
import { bookHistoryAction } from '../redux/action/UserAction';

export const UserTemplate = (props) => {
    let { account } = useSelector(state => state.UserReducer);
    let dispatch = useDispatch();
    let { Component, ...restProps } = props;
    return <Route {...restProps} render={(propsRoute) => {
        return <div className="usertemplate-wrapper">
            <div className="user__info">
                <div className="user__logo">
                    <img src="https://picsum.photos/200" alt="" />
                    <p>Hello, {account}</p>
                </div>

                <div className="user__menu">
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
                </div>

                <div className="user__button">
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
            <div className="user__content">
                <Component {...propsRoute} />
            </div>
        </div>
    }} />
}