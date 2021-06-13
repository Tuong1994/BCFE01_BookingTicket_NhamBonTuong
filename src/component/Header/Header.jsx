import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';

function Header(props) {
    const {accountInfo} = useSelector(state => state.UserReducer);
    const dispatch = useDispatch();
    const [subMenu, setSubmenu] = useState(false);
    let showSubmenu = () => setSubmenu(!subMenu);
    const [userInfo, setUserInfo] = useState(false);
    let showUserInfo = () => setUserInfo(!userInfo);
    let { account } = useSelector(state => state.UserReducer);
    let setting = {
        activeClass: "active",
        spy: true,
        smooth: true,
        offset: -90,
        duration: 50,
    }
    return (
        <div>
            <nav className="nav__container">
                <NavLink className="nav__link nav__logo" to="/">
                    <img className="logo__img" src="../../img/logo.png" alt="logo" />
                </NavLink>

                <div className={subMenu ? 'nav__collapse active' : 'nav__collapse'}>
                    <div className="nav__bar">
                        <div className="nav__list">
                            <Link
                                {...setting}
                                to="schedule"
                                className="nav__link">
                                Lịch chiếu
                            </Link>
                        </div>
                        <div className="nav__list">
                            <Link
                                {...setting}
                                to="cinema"
                                className="nav__link">
                                Cụm rạp
                            </Link>
                        </div>
                        <div className="nav__list">
                            <Link
                                {...setting}
                                to="news"
                                className="nav__link">
                                Tin tức
                            </Link>
                        </div>
                        <div className="nav__list">
                            <Link
                                {...setting}
                                to="apps"
                                className="nav__link">
                                Ứng dụng
                            </Link>
                        </div>
                    </div>

                    <div className="nav__login">
                        {account !== "" ? <div className="user__login">
                            <i class="fa fa-user-circle"></i>
                            <span>{account}</span>
                            <button className="btn-show" onClick={showUserInfo}><i class="fa fa-caret-down"></i></button>
                            <div className={userInfo ? "user__info show" : "user__info"}>
                                {accountInfo.maLoaiNguoiDung === "QuanTri" ? <NavLink className="user__link bg-link" to="/film_manage">Admin</NavLink> : ""}
                                <NavLink className="user__link bg-link" to="/user_info">Thông tin cá nhân</NavLink>
                                <button className="btn-logout bg-link" onClick={() => {
                                    dispatch({
                                        type: "LOG_OUT"
                                    })
                                }}>Đăng xuất</button>
                            </div>
                        </div> : <NavLink className="nav__link link" to="/login">
                            <i class="fa fa-user-circle"></i>
                            <span>Đăng nhập</span>
                        </NavLink>}
                    </div>
                </div>
                
                <button className="nav__button" onClick={showSubmenu}>
                    <i class="fa fa-align-right"></i>
                </button>
            </nav>
        </div>
    );
}
export default Header;
