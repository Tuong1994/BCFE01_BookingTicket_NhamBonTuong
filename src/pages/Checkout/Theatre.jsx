import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CountDown from '../../component/CountDown/CountDown';

function Theatre({ thongTinRapChieu, stepOne, setStepOne }) {
    const { thongTinPhim, danhSachGhe } = thongTinRapChieu;
    const { DSGheDangDat } = useSelector(state => state.BookTicketReducer);
    let dispatch = useDispatch();

    let chairLine = [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J"
    ]
    let renderLine = () => {
        return chairLine.map((line, index) => {
            return <div className="line" key={index}>
                {line}
            </div>
        })
    }
    let renderChairs = () => {
        return danhSachGhe?.map((chair, index) => {
            let indexBook = DSGheDangDat.findIndex(bookChair => bookChair.maGhe === chair.maGhe);
            let classVip = chair.loaiGhe === "Vip" ? "vip-chair" : "";
            let classBooked = chair.daDat === true ? "booked-chair" : "";
            let classBooking = indexBook !== -1 ? "booking-chair" : "";
            return <Fragment key={index}>
                <button className={`chair__btn ${classVip} ${classBooked} ${classBooking}`} disabled={chair.daDat} onClick={() => {
                    setStepOne(!stepOne)
                    dispatch({
                        type: "BOOKING",
                        chair: {
                            maGhe: chair.maGhe,
                            giaVe: chair.giaVe,
                            stt: chair.stt
                        }
                    });
                }}>
                    <p>{chair.daDat === true ? <i class="fa fa-times"></i> : chair.stt}</p>
                    <div className="btn__line"></div>
                </button>
                {(index + 1) % 16 === 0 ? <br /> : null}
            </Fragment>
        })
    }
    return (
        <div className="checkout__theatre">
            <div className="theatre__info">
                <div className="info">
                    <p>{thongTinPhim?.tenCumRap} - {thongTinPhim?.tenRap}</p>
                    <p>{thongTinPhim?.ngayChieu} - {thongTinPhim?.gioChieu}</p>
                </div>
                <CountDown />
            </div>

            <div className="theatre__screen">
                <p>Màn hình</p>
            </div>

            <div className="theatre__chairs">
                <div className="chairs__line">
                    {renderLine()}
                </div>
                <div className="chairs__number">
                    {renderChairs()}
                </div>
            </div>

            <div className="theatre__note">
                <p>Chú thích :</p>
                <div className="note">
                    <div className="note__item">
                        <div className="note__chair vip-chair">
                            <p><i class="fa fa-times"></i></p>
                            <div className="btn__line"></div>
                        </div>
                        <p>Ghế Vip</p>
                    </div>
                    <div className="note__item">
                        <div className="note__chair booking-chair">
                            <p><i class="fa fa-times"></i></p>
                            <div className="btn__line"></div>
                        </div>
                        <p>Ghế đang chọn</p>
                    </div>
                    <div className="note__item">
                        <div className="note__chair booked-chair">
                            <p><i class="fa fa-times"></i></p>
                            <div className="btn__line"></div>
                        </div>
                        <p>Ghế đã chọn</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Theatre;