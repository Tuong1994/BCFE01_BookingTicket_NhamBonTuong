import React from 'react';
import { useSelector } from 'react-redux';

function ProgressStepBar({ stepOne, stepTwo, stepThree }) {
    const { DSGheDangDat } = useSelector(state => state.BookTicketReducer)
    return (
        <div className="checkout__progress">
            <div className="progress__step">
                <p className={stepOne || DSGheDangDat.length !== 0 ? "step__info info__active" : "step__info"}>1. Chọn Ghế</p>
                <div className={stepOne || DSGheDangDat.length !== 0 ? "step__bar step__active" : "step__bar"}></div>
            </div>

            <div className="progress__step">
                <p className={stepTwo && DSGheDangDat.length !== 0 ? "step__info info__active" : "step__info"}>2. Chọn hình thức thanh toán</p>
                <div className={stepTwo && DSGheDangDat.length !== 0 ? "step__bar step__active" : "step__bar"}></div>
            </div>

            <div className="progress__step">
                <p className={stepThree && DSGheDangDat.length !== 0 ? "step__info info__active" : "step__info"}>3. Đặt vé</p>
                <div className={stepThree && DSGheDangDat.length !== 0 ? "step__bar step__active" : "step__bar"}></div>
            </div>
        </div>
    );
}

export default ProgressStepBar;