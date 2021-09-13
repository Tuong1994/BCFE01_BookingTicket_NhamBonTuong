import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { bookHistoryAction } from '../../redux/action/UserAction';
import UserDetail from './UserDetail';
import UserContent from './UserContent';
import RWD_UserDetail from './RWD_UserDetail';
import RWD_BookedHistory from './RWD_BookedHistory';
import Loading from '../../component/Loading/Loading';

function User(props) {
    const { loading } = useSelector(state => state.LoadingReducer);
    const { accountInfo } = useSelector(state => state.UserReducer);
    const [showActive, setShowActive] = useState(false);
    const [showBookedDetail, setShowBookedDetail] = useState(false);
    
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type: "openLoading"
        })
        dispatch(bookHistoryAction(accountInfo));
    }, [])
    useEffect(() => {
        setTimeout(() => {
            dispatch({
                type: "closeLoading"
            })
        }, 1000)
    }, [loading])

    return (
        <div className="user">
            <Loading />
            <div className="user__header">
                <NavLink to="/" className="header__logo">
                    <img src="../img/logo.png" alt="logo" />
                </NavLink>
            </div>

            <div className="user__wrapper">
                <div className="wrapper">
                    <UserDetail setShowActive={setShowActive} />
                    <UserContent setShowBookedDetail={setShowBookedDetail} />
                </div>
            </div>

            <RWD_UserDetail showActive={showActive} setShowActive={setShowActive} />
            <RWD_BookedHistory showBookedDetail={showBookedDetail} setShowBookedDetail={setShowBookedDetail} />
        </div>
    );
}

export default User;