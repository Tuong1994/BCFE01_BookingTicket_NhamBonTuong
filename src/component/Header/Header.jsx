import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import RWD_Header from '../RWD_Header/RWD_Header';
import ButtonLoading from "../Loading/ButtonLoading";

function Header(props) {
    const { accountInfo } = useSelector(state => state.UserReducer);
    const { btnLoading } = useSelector(state => state.LoadingReducer);

    const [subMenu, setSubmenu] = useState(false);
    const [userInfo, setUserInfo] = useState(false);
    const [background, setBackground] = useState(false);
    const dispatch = useDispatch();
    const userRef = useRef()

    const showSubmenu = () => setSubmenu(!subMenu);
    const showUserInfo = () => setUserInfo(!userInfo);

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
                                L???ch chi???u
                            </Link>
                        </div>
                        <div className="nav__list">
                            <Link
                                smooth to="/#cineplex"
                                className="nav__link" onClick={() => setSubmenu(false)}>
                                C???m r???p
                            </Link>
                        </div>
                        <div className="nav__list">
                            <Link
                                smooth to="/#news"
                                className="nav__link" onClick={() => setSubmenu(false)}>
                                Tin t???c
                            </Link>
                        </div>
                        <div className="nav__list">
                            <Link
                                smooth to="/#apps"
                                className="nav__link" onClick={() => setSubmenu(false)}>
                                ???ng d???ng
                            </Link>
                        </div>
                    </div>

                    <div className="nav__login">
                        {accountInfo !== "" ? <div className="user__login" ref={userRef}>
                            <img src="https://i.pravatar.cc/300" alt="avatar" />
                            <span>{accountInfo.hoTen}</span>
                            <div className="btn-show" onClick={showUserInfo}><i class="fa fa-caret-down"></i></div>
                            <div className={userInfo ? "user__info show" : "user__info"} ref={userRef}>
                                {accountInfo.maLoaiNguoiDung !== "KhachHang" ?
                                    <NavLink className="user__link bg-link" to="/dashboard">Admin</NavLink>
                                    :
                                    null
                                }
                                <NavLink className="user__link bg-link" to="/user">Th??ng tin c?? nh??n</NavLink>
                                <div className="btn-logout bg-link" onClick={() => {
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
                                    {btnLoading ? <ButtonLoading /> : "????ng xu???t"}
                                </div>
                            </div>
                        </div> :
                            <NavLink className="nav__link link" to="/login">
                                <i class="fa fa-user-circle"></i>
                                <span>????ng nh???p</span>
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
