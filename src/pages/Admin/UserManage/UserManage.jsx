import React, { useState, useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { delUserAction, getUserListAction } from '../../../redux/action/AdminAction';
import Swal from 'sweetalert2';
import { NavLink } from 'react-router-dom';
import AdminLoading from '../../../component/Loading/AdminLoading';
import UserInfo from './UserInfo';
import AddUser from './AddUser';
import Pagination from '../../../component/Pagination/Pagination';

function UserManage(props) {
    const { userList } = useSelector(state => state.AdminReducer);
    const { loading } = useSelector(state => state.LoadingReducer);

    const [userInfo, setUserInfo] = useState(false);
    const [addUser, setAddUser] = useState(false);
    const [searchUser, setSearchUser] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [userPerPage] = useState(50);

    const indexOfLastUser = currentPage * userPerPage;
    const indexOfFirstUser = indexOfLastUser - userPerPage;

    let changePage = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    let dispatch = useDispatch();
    
    useEffect(() => {
        dispatch({
            type: "openLoading"
        })
        dispatch(getUserListAction());
    }, [])

    useEffect(() => {
        setTimeout(() => {
            dispatch({
                type: "closeLoading"
            })
        }, 1000);
    }, loading)

    let renderUserList = () => {
        return userList?.filter((user) => {
            if (searchUser === "") {
                return user
            } else if (user.hoTen.toLowerCase().includes(searchUser.toLowerCase())) {
                return user
            }
        }).slice(indexOfFirstUser,indexOfLastUser).map((user, index) => {
            return <div className="table__list-row" key={index}>
                <div className="table__col table__col-0">
                    <p className="table__btn table__btn-rwd" onClick={() => {
                        dispatch({
                            type: "USER_DETAIL",
                            user: user
                        })
                        setUserInfo(true);
                    }}><i class="fa fa-bars"></i></p>
                    <NavLink to="/update_user" className="table__btn" title="Chỉnh sửa" onClick={() => {
                        dispatch({
                            type: "USER_DETAIL",
                            user: user,
                        })
                    }}><i class="fa fa-edit"></i></NavLink>
                    <p className="table__btn" title="Xóa" onClick={() => {
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
                    }}><i class="fa fa-trash-alt"></i></p>
                </div>
                <div className="table__col table__col-1">{index + 1}</div>
                <div className="table__col table__col-2" title={user.taiKhoan}>
                    {user.taiKhoan.length > 15 ? <p>{user.taiKhoan.substr(0, 15)}...</p> : <p>{user.taiKhoan}</p>}
                </div>
                <div className="table__col table__col-3" title={user.email}>
                    {user.email.length > 15 ? <p>{user.email.substr(0, 15)}...</p> : <p>{user.email}</p>}
                </div>
                <div className="table__col table__col-4">
                    <p>{user.matKhau}</p>
                </div>
                <div className="table__col table__col-5">
                    <p>{user.hoTen}</p>
                </div>
                <div className="table__col table__col-6">
                    <p>{user.soDt}</p>
                </div>
                <div className="table__col table__col-7">
                    <p>{user.maLoaiNguoiDung}</p>
                </div>
            </div>
        })
    }

    return (
        <div className="user-manage">
            <UserInfo userInfo={userInfo} setUserInfo={setUserInfo} />

            <div className="user-manage__title">
                <h4>Quản Lý Người Dùng</h4>
                <div className="title__form">
                    <div className="form__search">
                        <input type="text" placeholder="Tìm kiếm phim..." onChange={(e) => {
                            setSearchUser(e.target.value);
                        }} />
                        <div className="search__btn"><i class="fa fa-search"></i></div>
                    </div>
                    <div className="button form__btn" onClick={() => {
                        setAddUser(true)
                    }}>
                        <i class="fa fa-plus"></i>
                        <span>Thêm Người Dùng</span>
                    </div>
                </div>
            </div>

            <hr />

            <div className="user-manage__list">
                <h5>Danh Sách Người Dùng</h5>
                <div className="list__table">
                    <div className="table__title">
                        <div className="table__col table__col-0"><i class="fa fa-cog"></i></div>
                        <div className="table__col table__col-1">STT</div>
                        <div className="table__col table__col-2">Tài Khoản</div>
                        <div className="table__col table__col-3">Email</div>
                        <div className="table__col table__col-4">Mật Khẩu</div>
                        <div className="table__col table__col-5">Họ Tên</div>
                        <div className="table__col table__col-6">Điện Thoại</div>
                        <div className="table__col table__col-7">Người Dùng</div>
                    </div>

                    <div className="table__item">
                        <AdminLoading />
                        {renderUserList()}
                    </div>
                </div>
                <Pagination perPage={userPerPage} total={userList.length} changePage={changePage} />
            </div>
            
            <AddUser addUser={addUser} setAddUser={setAddUser} />
        </div>
    );
}

export default memo(UserManage);