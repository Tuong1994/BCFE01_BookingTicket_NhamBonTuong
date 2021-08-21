import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getCinemaAction } from '../../../redux/action/PhimAction';

function Cinema(props) {
    const { danhSachRapChieu } = useSelector(state => state.PhimReducer);
    
    const [showTab, setShowTab] = useState(0);
    let show = (index) => setShowTab(index);

    const [showSubTab, setShowSubTab] = useState(0);
    let showSub = (index) => setShowSubTab(index);

    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCinemaAction())
    }, [])
    return (
        <div className="cinema-tab" id="cinema">
            <div className="tab__inner">
                <div className="tab__list">
                    {danhSachRapChieu?.map((rapChieu, index) => {
                        return <div key={index} className={showTab === index ? "tab__logo active-tab" : "tab__logo"} onClick={() => show(index)}>
                            <img src={rapChieu.logo} alt="" />
                        </div>
                    })}
                </div>

                <div className="tab__contents">
                    {danhSachRapChieu?.map((rapChieu, index) => {
                        return <div key={index} className={showTab === index ? "content show-content" : "content"}>
                            <div className="subtab">
                                <div className="subtab__list">
                                    {rapChieu.lstCumRap?.slice(0, 7).map((cumRap, index) => {
                                        return <div key={index} className={showSubTab === index ? "subtab active-tab" : "subtab"} onClick={() => showSub(index)}>
                                            <img src="../../img/rapChieu.png" alt="" />
                                            <div className="subtab__body">
                                                {cumRap.tenCumRap.length > 30 ? <p>{cumRap.tenCumRap.substr(0, 30)}...</p> : <p>{cumRap.tenCumRap}</p>}
                                                {cumRap.diaChi.length > 30 ? <p>{cumRap.diaChi.substr(0, 30)}...</p> : <p>{cumRap.diaChi}</p>}
                                            </div>
                                        </div>
                                    })}
                                </div>
                                <div className="subtab__content">
                                    {rapChieu.lstCumRap?.map((cumRap, index) => {
                                        return <div className={showSubTab === index ? "subtab__item show-content" : "subtab__item"} key={index}>
                                            {cumRap?.danhSachPhim?.slice(0, 7).map((film, index) => {
                                                return <div key={index} className="subcontent">
                                                    <img src={film.hinhAnh} alt="" />
                                                    <div className="subcontent__body">
                                                        {film.tenPhim.length > 30 ? <p>{film.tenPhim.substr(0, 30)}...</p> : <p>{film.tenPhim}</p>}
                                                        <div className="subcontent__link">
                                                            {film.lstLichChieuTheoPhim?.slice(0, 3).map((lichChieu, index) => {
                                                                return <NavLink key={index} className="button" to={`/film_detail/${film.maPhim}`}>
                                                                    {moment(lichChieu.ngayChieuGioChieu).format(" dd hh:mm A")}
                                                                </NavLink>
                                                            })}
                                                        </div>
                                                    </div>
                                                </div>
                                            })}
                                        </div>
                                    })}
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
}

export default Cinema;