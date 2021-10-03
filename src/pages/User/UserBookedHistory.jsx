import React from 'react';
import { useEffect } from 'react';
import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bookHistoryAction } from '../../redux/action/UserAction';

function UserBookedHistory({ setShowBookedDetail }) {
    let dispatch = useDispatch();
    const { accountInfo, userBookedInfo } = useSelector(state => state.UserReducer);
    const { thongTinDatVe } = userBookedInfo

    useEffect(() => {
        dispatch(bookHistoryAction(accountInfo));
    }, [])

    let renderTableContent = () => {
        return thongTinDatVe?.map((ticket, index) => {
            return <div className="content__rows" key={index}>
                <div className="col col__0">
                    <button className="col__btn" onClick={() => {
                        dispatch({
                            type: "GET_BOOKED_DETAIL",
                            bookDetail: ticket.danhSachGhe
                        })
                        setShowBookedDetail(true);
                    }}>
                        <i class="fa fa-align-justify"></i>
                    </button>
                </div>
                <div className="col col__1">{index + 1}</div>
                <div className="col col__2">
                    <p>{ticket.tenPhim}</p>
                </div>
                <div className="col col__3">
                    <p>{ticket.thoiLuongPhim} phút</p>
                </div>
                <div className="col col__4">
                    {ticket.danhSachGhe?.map((item, index) => {
                        return <Fragment key={index}>
                            <p><span>Rạp: </span>{item.tenHeThongRap}</p>
                        </Fragment>
                    })}
                </div>
                <div className="col col__5">
                    <p>
                        {ticket.danhSachGhe?.map((item, index) => {
                            return <span key={index}>
                                {item.tenRap}{", "}
                            </span>
                        })}
                    </p>
                </div>
                <div className="col col__6">
                    <p>
                        {ticket.danhSachGhe?.map((item, index) => {
                            return <span key={index}>
                                {item.tenGhe}{", "}
                            </span>
                        })}
                    </p>
                </div>
                <div className="col col__7">
                    <p>{ticket.giaVe} đ</p>
                </div>
                <div className="col col__8">
                    <p>{ticket.maVe}</p>
                </div>
            </div>
        })
    }
    return (
        <div className="user-booked-history__wrapper">
            <div className="wrapper__table">
                <div className="table__title">
                    <div className="col col__0"><i class="fa fa-cog"></i></div>
                    <div className="col col__1 title__col">STT</div>
                    <div className="col col__2 title__col">Tên phim</div>
                    <div className="col col__3 title__col">Thời lượng</div>
                    <div className="col col__4 title__col">Tên Rạp</div>
                    <div className="col col__5 title__col">Phòng</div>
                    <div className="col col__6 title__col">Ghế</div>
                    <div className="col col__7 title__col">Giá vé</div>
                    <div className="col col__8 title__col">Mã vé</div>
                </div>
                <div className="table__content">
                    {renderTableContent()}
                </div>
            </div>
        </div>
    );
}

export default UserBookedHistory;