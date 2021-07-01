import moment from 'moment';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

function UserBooking(props) {
    let { accountInfo } = useSelector(state => state.UserReducer);
    let renderLichSuDatVe = () => {
        return  accountInfo.thongTinDatVe?.map((film, index) => {
            return <tr key={index}>
                <td>{film.tenPhim}</td>
                <td>
                    <div className="film-wrapper">
                        <p>Ngày đặt : {moment(film.ngayDat).format("dddd hh mm : A")}</p>
                        <p>Tên rạp :
                    {film.danhSachGhe?.map((booked, index) => {
                            return <div className="film-body" key={index}>
                                <p><i class="fa fa-theater-masks"></i>{booked.tenHeThongRap} - {booked.tenCumRap} - {booked.tenGhe}</p>
                            </div>
                        })}
                        </p>
                    </div>
                </td>
            </tr>
        })
    }
    useEffect(() => {
        renderLichSuDatVe();
    }, [])
    return (
        <div className="userBooking" >
            <div className="userBooking__body">
                <h3>Thông tin đặt vé</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Tên phim</th>
                            <th>Thông tin</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                       {renderLichSuDatVe()}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default UserBooking;