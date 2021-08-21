import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import { delUserAction, getUserListAction } from '../../../redux/action/AdminAction';

function UserManage(props) {
    const { userList, user } = useSelector(state => state.AdminReducer);
    const [userDetail, setUserDetail] = useState(false);
    const [searchUser, setSearchUser] = useState("");
    let showDetail = () => setUserDetail(!userDetail);
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserListAction())
    }, [])
    let renderUserList = () => {
        return userList?.filter((user) => {
            if (searchUser === "") {
                return user
            } else if (
                user.taiKhoan.toLowerCase().includes(searchUser.toLowerCase()) &&
                user.hoTen.toLowerCase().includes(searchUser.toLowerCase())) {
                return user
            }
        }).map((user, index) => {
            return <div className="body__item" key={index}>
                <div className="list__col-1"><p>{(index + 1)}</p></div>
                <div className="list__col-2"><p>{user.taiKhoan}</p></div>
                <div className="list__col-3"><p>{user.matKhau}</p></div>
                <div className="list__col-4 item__user">
                    <p><i class="fa fa-user"></i><span>Họ tên : {user.hoTen}</span></p>
                    <p><i class="fa fa-envelope"></i>{user.email.length > 15 ? <span>Email : {user.email.substr(0, 15)}...</span> : <span>Email : {user.email.length}</span>}</p>
                    <p><i class="fa fa-phone"></i><span>Số điện thoại : {user.soDt}</span></p>
                </div>
                <div className="list__col-5 btn-del">
                    <button className="button" onClick={() => {
                        dispatch({
                            type: "USER_DETAIL",
                            user,
                        })
                        showDetail()
                    }}><i class="fa fa-user-plus"></i></button>
                    <NavLink className="button" to="/update_user" onClick={() => {
                        dispatch({
                            type: "USER_DETAIL",
                            user: {
                                taiKhoan: user.taiKhoan,
                                matKhau: user.matKhau,
                                hoTen: user.hoTen,
                                email: user.email,
                                soDt: user.soDt,
                                maNhom: user.maNhom,
                                maLoaiNguoiDung: user.maLoaiNguoiDung
                            }
                        })
                    }}>
                        <i class="fa fa-edit"></i>
                        <span>Sửa</span>
                    </NavLink>
                    <button className="button" onClick={() => {
                        Swal.fire({
                            title: "Bạn có muốn xóa người dùng này",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Đúng",
                        }).then((result) => {
                            if (result.isConfirmed) {
                                Swal.fire({
                                    icon: "success",
                                    title: "Người dùng đã được xóa",
                                });
                                dispatch(delUserAction(user.taiKhoan));
                            }
                        });
                    }}>
                        <i class="fa fa-trash-alt"></i>
                        <span>Xóa</span>
                    </button>
                </div>
            </div>
        })
    }
    return (
        <div className="userManage">
            <h3>Quản lý người dùng</h3>
            <hr />
            <div className="userManage__form">
                <NavLink to="/add_user" className="form__link">
                    <i class="fa fa-user-plus"></i>
                    <span>Thêm người dùng</span>
                </NavLink>
                <div className="form__input">
                    <input type="text" name="timKiem" placeholder="Tìm kiếm..." onChange={(event) => {
                        setSearchUser(event.target.value);
                    }} />
                    <i class="fa fa-search"></i>
                </div>
            </div>
            <div className="userManage__list">
                <h3>Danh sách người dùng</h3>
                <div className="list__wrapper">
                    <div className="list__title">
                        <div className="list__col-1"><p>STT</p></div>
                        <div className="list__col-2"><p>Tài khoản</p></div>
                        <div className="list__col-3"><p>Mật khẩu</p></div>
                        <div className="list__col-4"><p>Thông tin cá nhân</p></div>
                        <div className="list__col-5"><p>Chức năng</p></div>
                    </div>
                    <div className="list__body">
                        {renderUserList()}
                    </div>
                </div>
            </div>
            <div className={userDetail ? "rwdItem__user show__user" : "rwdItem__user"}>
                <div className="rwdUser__info">
                    <h3>Thông tin người dùng</h3>
                    <p><i class="fa fa-ad"></i><span>Tài Khoản : {user.taiKhoan}</span></p>
                    <p><i class="fa fa-key"></i><span>Mật khẩu : {user.matKhau}</span></p>
                    <p><i class="fa fa-user"></i><span>Họ tên : {user.hoTen}</span></p>
                    <p><i class="fa fa-envelope"></i>Email: {user.email}</p>
                    <p><i class="fa fa-phone"></i><span>Số điện thoại : {user.soDt} </span></p>
                    <p><i class="fa fa-users"></i><span>Mã nhóm : {user.maNhom} </span></p>
                    <p><i class="fa fa-user-tie"></i><span>Loại người dùng : {user.maLoaiNguoiDung} </span></p>
                    <button className="button" onClick={() => showDetail()}>
                        <i class="fa fa-angle-double-left"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default memo(UserManage);