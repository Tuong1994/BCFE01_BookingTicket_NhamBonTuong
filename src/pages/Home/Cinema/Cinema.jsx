import moment from 'moment';
import React, { useEffect, useState } from 'react';
import RWD_Cinema from '../../../component/RWD_Cinema/RWD_Cinema';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getCinemaAction } from '../../../redux/action/PhimAction';

function Cinema(props) {
    const [showTab, setShowTab] = useState(0);
    let show = (index) => setShowTab(index);

    const [showSubTab, setShowSubTab] = useState(0);
    let showSub = (index) => setShowSubTab(index);

    const { danhSachRapChieu } = useSelector(state => state.PhimReducer);
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCinemaAction())
    }, [])
    return (
        <div className="tab-wrapper" id="cinema">
            <div className="tab__inner">
                <div className="tabs__list">
                    {danhSachRapChieu?.map((rapChieu, index) => {
                        return <div key={index} className={showTab === index ? "tab active-tabs" : "tab"} onClick={() => show(index)}>
                            <img src={rapChieu.logo} alt="" />
                        </div>
                    })}
                </div>

                <div className="tabs__contents">
                    {danhSachRapChieu?.map((rapChieu, index) => {
                        return <div key={index} className={showTab === index ? "content show-content" : "content"}>
                            <div className="subtabs-wrapper">
                                <div className="subtabs__list">
                                    {rapChieu.lstCumRap?.slice(0, 7).map((cumRap, index) => {
                                        return <div key={index} className={showSubTab === index ? "subtab active-tabs" : "subtab"} onClick={() => showSub(index)}>
                                            <img src="../../img/rapChieu.png" alt="" />
                                            <div className="subtab__body">
                                                {cumRap.tenCumRap.length > 30 ? <p>{cumRap.tenCumRap.substr(0, 30)}...</p> : <p>{cumRap.tenCumRap}</p>}
                                                {cumRap.diaChi.length > 30 ? <p>{cumRap.diaChi.substr(0, 30)}...</p> : <p>{cumRap.diaChi}</p>}
                                            </div>
                                        </div>
                                    })}
                                </div>
                                <div className="subtabs__contents">
                                    {rapChieu.lstCumRap?.map((cumRap, index) => {
                                        return <div className={showSubTab === index ? "subtabs__items show-content" : "subtabs__items"} key={index}>
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
            <RWD_Cinema danhSachRapChieu={danhSachRapChieu} />
        </div>
    );
}

export default Cinema;