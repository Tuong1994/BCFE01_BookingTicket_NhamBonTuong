import React from 'react';
import { useSelector } from 'react-redux';

function UserInfo({ userInfo, setUserInfo }) {
    const { user } = useSelector(state => state.AdminReducer);
    
    return (
        <div className={userInfo ? "user-info active" : "user-info"}>
            <h5>Thông Tin Chi Tiết</h5>
            <hr />
            <div className="user-info__content">
                <p>Tài Khoản : <span>{user.taiKhoan}</span></p>
                <p>Email : <span>{user.email}</span></p>
                <p>Mật Khẩu : <span>{user.matKhau}</span></p>
                <p>Họ Tên : <span>{user.hoTen}</span></p>
                <p>Số Điện Thoại : <span>{user.soDt}</span></p>
                <p>Loại Người Dùng : <span>{user.maLoaiNguoiDung}</span></p>
            </div>
            <hr />
            <div className="user-info__btn">
                <button className="btn-blue" onClick={() => {
                    setUserInfo(false);
                }}>Quay lại</button>
            </div>
        </div>
    );
}

export default UserInfo;