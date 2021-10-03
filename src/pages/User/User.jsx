import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import UserDetail from './UserDetail';
import UserContent from './UserContent';
import UserInfoUpdate from './UserInfoUpdate';
import RWD_UserDetail from './RWD_UserDetail';
import RWD_BookedHistory from './RWD_BookedHistory';
import Loading from '../../component/Loading/Loading';

function User(props) {
    const [showActive, setShowActive] = useState(false);
    const [showBookedDetail, setShowBookedDetail] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type: "openLoading"
        })
    }, [])
    useEffect(() => {
        setTimeout(() => {
            dispatch({
                type: "closeLoading"
            })
        }, 1000)
    }, [])

    return (
        <div className="user">
            <Loading />
            <UserInfoUpdate showForm={showForm} setShowForm={setShowForm} />
            <div className="user__header">
                <NavLink to="/" className="header__logo">
                    <img src="../img/logo.png" alt="logo" />
                </NavLink>
            </div>

            <div className="user__wrapper">
                <div className="wrapper">
                    <UserDetail setShowActive={setShowActive} />
                    <UserContent setShowBookedDetail={setShowBookedDetail} setShowForm={setShowForm} />
                </div>
            </div>

            <RWD_UserDetail showActive={showActive} setShowActive={setShowActive} />
            <RWD_BookedHistory showBookedDetail={showBookedDetail} setShowBookedDetail={setShowBookedDetail} />
        </div>
    );
}

export default User;