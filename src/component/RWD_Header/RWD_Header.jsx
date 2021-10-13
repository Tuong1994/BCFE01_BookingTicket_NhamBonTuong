import React from 'react';
import { useDispatch } from 'react-redux';
import { HashLink as Link } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ButtonLoading from "../Loading/ButtonLoading";


function RWD_Header(props) {
    const { setSubmenu, accountInfo, showUserInfo, userInfo, subMenu } = props;
    const { btnLoading } = useSelector(state => state.LoadingReducer);
    const dispatch = useDispatch();
    return (
        <div className="rwd-header">
            <div className={subMenu ? "rwd-header__bg active" : "rwd-header__bg"}>
                <div className={subMenu ? 'rwd-header__nav active' : 'rwd-header__nav'}>
                    <div className="nav__user">
                        {accountInfo !== "" ?
                            <div className="user__login">
                                <div className="login__info">
                                    <img src="https://i.pravatar.cc/300" alt="avatar" />
                                    <span className="login__acc">{accountInfo.hoTen}</span>
                                    <div className="login__button" onClick={showUserInfo}><i class="fa fa-caret-down"></i></div>
                                </div>
                                <div className={userInfo ? "login__submenu show" : "login__submenu"}>
                                    {accountInfo.maLoaiNguoiDung !== "KhachHang" ?
                                        <NavLink className="submenu__link" to="/dashboard">
                                            Admin
                                        </NavLink> : null}
                                    <NavLink className="submenu__link" to="/user">
                                        Thông tin cá nhân
                                    </NavLink>
                                    <div className="submenu__button" onClick={() => {
                                        dispatch({
                                            type: "openBtnLoading"
                                        })
                                        setTimeout(() => {
                                            dispatch({
                                                type: "LOG_OUT"
                                            });
                                            dispatch({
                                                type: "closeBtnLoading"
                                            })
                                        }, 1000)
                                    }}>
                                        {btnLoading ? <ButtonLoading /> : "Đăng xuất"}
                                    </div>
                                </div>
                            </div> :
                            <NavLink className="user__link link" to="/login">
                                <i class="fa fa-user-circle"></i>
                                <span>Đăng nhập</span>
                            </NavLink>}
                    </div>

                    <div className="nav__bar">
                        <div className="bar__list">
                            <Link
                                smooth to="/#schedule"
                                className="bar__link" onClick={() => setSubmenu(false)}>
                                Lịch chiếu
                            </Link>
                        </div>
                        <div className="bar__list">
                            <Link
                                smooth to="/#cineplex"
                                className="bar__link" onClick={() => setSubmenu(false)}>
                                Cụm rạp
                            </Link>
                        </div>
                        <div className="bar__list">
                            <Link
                                smooth to="/#news"
                                className="bar__link" onClick={() => setSubmenu(false)}>
                                Tin tức
                            </Link>
                        </div>
                        <div className="bar__list">
                            <Link
                                smooth to="/#apps"
                                className="bar__link" onClick={() => setSubmenu(false)}>
                                Ứng dụng
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RWD_Header;