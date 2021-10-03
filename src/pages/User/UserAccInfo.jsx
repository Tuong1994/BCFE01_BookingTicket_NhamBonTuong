import React from 'react';
import { useSelector } from 'react-redux';

function UserAccInfo({ setShowForm }) {
    const { accountInfo } = useSelector(state => state.UserReducer);
    return (
        <div className="user-acc-info__wrapper">
            <div className="wrapper__content">
                <div className="content__group">
                    <p>Tài khoản</p>
                    <p>{accountInfo?.taiKhoan}</p>
                </div>
                <div className="content__group">
                    <p>Email</p>
                    <p>{accountInfo?.email}</p>
                </div>
                <div className="content__group">
                    <p>Họ tên</p>
                    <p>{accountInfo?.hoTen}</p>
                </div>
                <div className="content__group">
                    <p>Số điện thoại</p>
                    <p>{accountInfo?.soDT}</p>
                </div>
                <div className="content__group">
                    <p>Loại người dùng</p>
                    <p>{accountInfo?.maLoaiNguoiDung}</p>
                </div>
            </div>
            <div className="wrapper__button">
                <button className="button" onClick={() => {
                    setShowForm(true);
                }}>Cập nhật</button>
            </div>
        </div>
    );
}

export default UserAccInfo;