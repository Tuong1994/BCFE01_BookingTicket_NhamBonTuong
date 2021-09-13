import React from 'react';

function RWD_UserDetail({ showActive, setShowActive }) {
    return (
        <div className={showActive ? "rwd-user-detail show-active" : "rwd-user-detail"}>
            <div className="detail__info">
                <table className="info__table">
                    <tr>
                        <td className="table__title">Nội dung hoạt động</td>
                        <td className="table__title">
                            <button className="title__btn" onClick={() => {
                                setShowActive(false);
                            }}><i class="fa fa-backspace"></i></button>
                        </td>
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
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>Tổng tiền thanh toán</td>
                        <td>150.000 đ</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default RWD_UserDetail;