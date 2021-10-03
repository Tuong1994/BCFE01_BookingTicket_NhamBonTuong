import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import RWD_Header from '../RWD_Header/RWD_Header';

function Header(props) {
    const dispatch = useDispatch();
    const { accountInfo } = useSelector(state => state.UserReducer);

    const [subMenu, setSubmenu] = useState(false);
    const [userInfo, setUserInfo] = useState(false);
    const [background, setBackground] = useState(false);

    const userRef = useRef()

    let showSubmenu = () => setSubmenu(!subMenu);
    let showUserInfo = () => setUserInfo(!userInfo);

    useEffect(() => {
        let scrollPosition = 0;
        let handleScroll = () => {
            if (window.scrollY > scrollPosition) {
                setBackground(true);
            } else {
                setBackground(false);
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    })
    useEffect(() => {
        let handleClickOutside = (e) => {
            if (userRef.current && !userRef.current.contains(e.target)) {
                setUserInfo(false);
            }
        }
        window.addEventListener("mousedown", handleClickOutside);
        return () => {
            window.removeEventListener("mousedown", handleClickOutside)
        }
    })
    return (
        <div className="header">
            <nav className={background ? "header__nav header__background" : "header__nav"}>
                <NavLink className="nav__link nav__logo" to="/">
                    <img className="logo__img" src="../../img/logo2.png" alt="logo" />
                </NavLink>

                <div className={subMenu ? 'nav__collapse active' : 'nav__collapse'}>
                    <div className="nav__bar">
                        <div className="nav__list">
                            <Link
                                smooth to="/#schedule"
                                className="nav__link" onClick={() => setSubmenu(false)}>
                                Lịch chiếu
                            </Link>
                        </div>
                        <div className="nav__list">
                            <Link
                                smooth to="/#cineplex"
                                className="nav__link" onClick={() => setSubmenu(false)}>
                                Cụm rạp
                            </Link>
                        </div>
                        <div className="nav__list">
                            <Link
                                smooth to="/#news"
                                className="nav__link" onClick={() => setSubmenu(false)}>
                                Tin tức
                            </Link>
                        </div>
                        <div className="nav__list">
                            <Link
                                smooth to="/#apps"
                                className="nav__link" onClick={() => setSubmenu(false)}>
                                Ứng dụng
                            </Link>
                        </div>
                    </div>

                    <div className="nav__login">
                        {accountInfo !== "" ? <div className="user__login">
                            <img src="https://i.pravatar.cc/300" alt="avatar" />
                            <span>{accountInfo.hoTen}</span>
                            <div className="btn-show" onClick={showUserInfo}><i class="fa fa-caret-down"></i></div>
                            <div className={userInfo ? "user__info show" : "user__info"} ref={userRef}>
                                {accountInfo.maLoaiNguoiDung !== "KhachHang" ?
                                    <NavLink className="user__link bg-link" to="/dashboard">Admin</NavLink> : null}
                                <NavLink className="user__link bg-link" to="/user">Thông tin cá nhân</NavLink>
                                <div className="btn-logout bg-link" onClick={() => {
                                    dispatch({
                                        type: "LOG_OUT"
                                    });
                                }}>Đăng xuất</div>
                            </div>
                        </div> :
                            <NavLink className="nav__link link" to="/login">
                                <i class="fa fa-user-circle"></i>
                                <span>Đăng nhập</span>
                            </NavLink>}
                    </div>
                </div>

                <button className="nav__button" onClick={showSubmenu}>
                    {subMenu ? <i class="fa fa-times"></i> : <i class="fa fa-align-right"></i>}
                </button>
            </nav>
            <RWD_Header setSubmenu={setSubmenu} accountInfo={accountInfo} showUserInfo={showUserInfo} userInfo={userInfo} subMenu={subMenu} />
        </div>
    );
}
export default Header;
