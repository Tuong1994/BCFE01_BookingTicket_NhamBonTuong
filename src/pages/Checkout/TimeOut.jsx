import React from 'react';
import { useSelector } from 'react-redux';

function TimeOut(props) {
    const { hetGio } = useSelector(state => state.BookTicketReducer)
    const renderTimeOut = () => {
        if (hetGio) {
            return <div className="checkout__timeout">
                <div className="timeout__note">
                    <h4>Hết thời gian đặt vé</h4>
                    <p>Thời gian đặt vé là 5 phút, vui lòng đặt vé trong khoảng thời gian này</p>
                    <div className="note__button">
                        <button className="button" type="button" onClick={() => {
                            window.location.reload(true);
                        }}>Đặt vé lại</button>
                    </div>
                </div>
            </div>
        } else {
            return null
        }
    }
    return (
        <>
            {renderTimeOut()}
        </>
    );
}

export default TimeOut;