import React from 'react';
import { useSelector } from 'react-redux';


function UserDetail({ setShowActive }) {
    const { accountInfo, userBookedInfo } = useSelector(state => state.UserReducer);
    const { thongTinDatVe } = userBookedInfo;

    let renderTotal = () => {
        return thongTinDatVe?.reduce((total, ticket) => {
            return total += ticket.giaVe
        }, 0)
    }
    return (
        <div className="user__detail">

            <div className="detail__acc">
                <img src="https://i.pravatar.cc/300" alt="avatar" />
                <p>Hello, {accountInfo.taiKhoan}</p>
                <button className="detail__btn" onClick={() => {
                    setShowActive(true)
                }}><i class="fa fa-align-right"></i></button>
            </div>

            <div className="detail__info">
                <table className="info__table">
                    <tr>
                        <td colSpan="2" className="table__title">Nội dung hoạt động</td>
                    </tr>
                    <tr>
                        <td>Bình luận</td>
                        <td>12</td>
                    </tr>
                    <tr>
                        <td>Lượt thích</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>Số lần đặt vé</td>
                        <td>{thongTinDatVe?.length}</td>
                    </tr>
                    <tr>
                        <td>Tổng tiền thanh toán</td>
                        <td>{renderTotal()} đ</td>
                    </tr>
                </table>
            </div>

        </div>
    );
}

export default UserDetail;