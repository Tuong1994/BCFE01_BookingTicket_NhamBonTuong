import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getCinemaDetailAction } from '../../../redux/action/PhimAction';

function Cinema(props) {
    const [showTab, setShowTab] = useState(1);
    let show = (index) => setShowTab(index);

    const [showSubTab, setShowSubTab] = useState(0);
    let showSub = (index) => setShowSubTab(index);

    const { chiTietRapChieu } = useSelector(state => state.PhimReducer);
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCinemaDetailAction())
    }, [])
    return (
        <div className="tab-wrapper" id="cinema">
            <div className="tabs__list">
                {chiTietRapChieu?.map((rapChieu, index) => {
                    return <div key={index} className={showTab === index ? "tab active-tabs" : "tab"} onClick={() => show(index)}>
                        <img src={rapChieu.logo} alt="" />
                    </div>
                })}
            </div>
            <div className="tabs__contents">
                {chiTietRapChieu?.map((rapChieu, index) => {
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
                                                    {film.tenPhim.length > 30 ? <p>{film.tenPhim.substr(0,30)}...</p> : <p>{film.tenPhim}</p>}
                                                    <div className="subcontent__link">
                                                        {film.lstLichChieuTheoPhim?.slice(0, 3).map((lichChieu, index) => {
                                                            return <NavLink key={index} className="button" to={`/detail/${film.maPhim}`}>
                                                                {moment(lichChieu.ngayChieuGioChieu).format("hh:mm A")}
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
    );
}

export default Cinema;