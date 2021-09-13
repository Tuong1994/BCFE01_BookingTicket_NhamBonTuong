import React from 'react';
import { useState } from 'react';
import moment from 'moment';
import Schedule from './Schedule';
import Posts from './Posts';

function CinemaDetail({ chiTietLichChieu }) {
    const [show, setShow] = useState(1);
    return (
        <div className="cinema__tabs">
            <div className="tabs__title">
                <div className={show == 1 ? "title active" : "title"} onClick={() => {
                    setShow(1)
                }}>
                    <p>Lịch chiếu</p>
                </div>
                <div className={show == 2 ? "title active" : "title"} onClick={() => {
                    setShow(2)
                }}>
                    <p>Thông tin</p>
                </div>
                <div className={show == 3 ? "title active" : "title"} onClick={() => {
                    setShow(3)
                }}>
                    <p>Đánh giá</p>
                </div>
            </div>

            <div className="tabs__content">
                <div className={show == 1 ? "content movie-schedule show" : "content"}>
                    <Schedule chiTietLichChieu={chiTietLichChieu} />
                </div>

                <div className={show == 2 ? "content movie-detail show" : "content"}>
                    <div className="movie">
                        <div className="movie__inner-1">
                            <div className="inner__item">
                                <p>Ngày khởi chiếu :</p>
                                <p>{moment(chiTietLichChieu.ngayKhoiChieu).format("dddd/mm/yyyy")}</p>
                            </div>
                            <div className="inner__item">
                                <p>Đạo diễn :</p>
                                <p>Đang cập nhật....</p>
                            </div>
                            <div className="inner__item">
                                <p>Diễn viên :</p>
                                <p>Đang cập nhật....</p>
                            </div>
                            <div className="inner__item">
                                <p>Thể loại :</p>
                                <p>Đang cập nhật....</p>
                            </div>
                            <div className="inner__item">
                                <p>Định dạng :</p>
                                <p>2D/Digital</p>
                            </div>
                            <div className="inner__item">
                                <p>Nước SX :</p>
                                <p>Đang cập nhật....</p>
                            </div>
                        </div>
                        <div className="movie__inner-2">
                            <p>Nội dung : <br /><span>{chiTietLichChieu.moTa}</span></p>
                        </div>
                    </div>
                </div>

                <div className={show == 3 ? "content movie-rating show" : "content"}>
                    <Posts />
                </div>
            </div>
        </div>
    );
}

export default CinemaDetail;