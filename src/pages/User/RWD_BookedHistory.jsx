import React from 'react';
import { useSelector } from 'react-redux';

function RWD_BookedHistory({ showBookedDetail, setShowBookedDetail }) {
    const { bookDetail } = useSelector(state => state.UserReducer);
    
    return (
        <div className={showBookedDetail ? "rwd-booked-history show-booked-detail" : "rwd-booked-history"}>
            <div className="booked-detail">
                <button><i class="fa fa-times" onClick={() => {
                    setShowBookedDetail(false);
                }}></i></button>
                <h4>Danh sách đặt vé</h4>
                <hr />
                {bookDetail?.map((book, index) => {
                    return <div className="booked-detail__cinema" key={index}>
                        <div className="cinema__inner">
                            <p>Tên Rạp : <span>{book.tenHeThongRap}</span></p>
                            <p>Phòng : <span>{book.tenRap}</span></p>
                            <p>Ghế : <span>{book.tenGhe}</span></p>
                        </div>
                        <hr />
                    </div>
                })}
            </div>
        </div>
    );
}

export default RWD_BookedHistory;