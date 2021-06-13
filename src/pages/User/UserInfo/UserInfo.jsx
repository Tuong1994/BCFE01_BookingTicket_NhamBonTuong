import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

function UserInfo(props) {
    let { accountInfo } = useSelector(state => state.UserReducer);
    console.log(accountInfo);
    return (
        <div className="userInfo-wrapper">
            <div className="userInfo__content">
                <h3>Thông tin cá nhân</h3>
                <p>Tài khoản : <span>{accountInfo.taiKhoan}</span></p>
                <p>Họ tên : <span>{accountInfo.hoTen}</span></p>
                <p>Số điện thoại : <span>{accountInfo.soDT}</span></p>
                <p>Email : <span>{accountInfo.email}</span></p>
            </div>
            <NavLink className="button" to="/update">
                <i class="fa fa-user-edit"></i>
                <span>Cập nhật</span>
            </NavLink>
        </div>
    );
}

export default UserInfo;