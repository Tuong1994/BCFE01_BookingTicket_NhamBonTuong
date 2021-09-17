import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCinemaAction, getCineplexAction, getMovieAction } from '../../../redux/action/PhimAction';
import ScheduleForm from './ScheduleForm';
import ScheduleList from './ScheduleList';

function MovieSchedules(props) {
    const { danhSachPhim, danhSachHeThongRap, danhSachRapChieu } = useSelector(state => state.PhimReducer);
    
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCineplexAction());
        dispatch(getCinemaAction());
        dispatch(getMovieAction());
    }, [])

    return (
        <div className="movie-schedules">
            <ScheduleForm danhSachPhim={danhSachPhim} danhSachHeThongRap={danhSachHeThongRap} />
            <ScheduleList danhSachRapChieu={danhSachRapChieu} />
        </div>
    );
}

export default MovieSchedules;