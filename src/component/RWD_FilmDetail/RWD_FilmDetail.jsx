import React from 'react';
import { NavLink } from "react-router-dom";
import moment from 'moment';

function RWD_FilmDetail(props) {
    const { chiTietLichChieu } = props;
    return (
        <div className="rwd-filmdetail__wrapper">
            <ul className="nav nav-pills mb-3 detail__title" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Lịch chiếu</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Thông tin</a>
                </li>
            </ul>

            <div className="tab-content cinema__info" id="pills-tabContent">
                
            </div>

            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                <div className="film__info">
                    <p>Giờ chiếu : <span>{moment(chiTietLichChieu.ngayKhoiChieu).format("hh:mm A")}</span></p>
                    <p>Nội dung : <br /><span>{chiTietLichChieu.moTa}</span></p>
                </div>
            </div>
        </div>
    );
}

export default RWD_FilmDetail;