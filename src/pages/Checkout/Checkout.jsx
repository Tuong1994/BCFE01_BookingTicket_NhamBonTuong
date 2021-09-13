import React, { useEffect, useState } from 'react';
import RWD_Checkout from '../../component/RWD_Checkout/RWD_Checkout';
import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { taiKhoan } from '../../configs/setting';
import { getTicketAction } from '../../redux/action/PhimAction';
import Theatre from './Theatre';
import MovieBooking from './MovieBooking';
import Loading from '../../component/Loading/Loading';
import BookInfo from './BookInfo';
import TimeOut from './TimeOut';
import ProgressStepBar from './ProgressStepBar';

function Checkout(props) {
    let dispatch = useDispatch();
    let { id } = props.match.params;
    let { loading } = useSelector(state => state.LoadingReducer);

    const { thongTinRapChieu } = useSelector(state => state.PhimReducer);
    const { DSGheDangDat } = useSelector(state => state.BookTicketReducer);
    const { account } = useSelector(state => state.UserReducer);

    const [showDetail, setShowDetail] = useState(true);
    const [stepOne, setStepOne] = useState(false);
    const [stepTwo, setStepTwo] = useState(false);
    const [stepThree, setStepThree] = useState(false);

    useEffect(() => {
        dispatch({
            type: "openLoading"
        })
        window.scrollTo(0, 0);
        setShowDetail(false);
        dispatch(getTicketAction(id));
    }, [])
    useEffect(() => {
        setTimeout(() => {
            dispatch({
                type: "closeLoading"
            })
        }, 1000)
    }, [loading])

    let renderBookChair = () => {
        return DSGheDangDat.map((chair, index) => {
            return <Fragment key={index}>
                <span>
                    {chair.stt}{" "}
                </span>
            </Fragment>
        })
    }
    let renderTotal = () => {
        return DSGheDangDat.reduce((total, chair, index) => {
            return total += chair.giaVe;
        }, 0)
    }

    if (!localStorage.getItem(taiKhoan)) {
        return <Redirect to="/login" />
    }

    return (
        <div className="checkout">
            <Loading />
            <BookInfo thongTinRapChieu={thongTinRapChieu} renderTotal={renderTotal}/>
            <TimeOut />

            <div className="checkout__nav">
                <NavLink to="/" className="nav__logo">
                    <img src="../img/logo2.png" alt="logo" />
                </NavLink>
                <NavLink className="nav__user" to="/user">
                    <img src="https://i.pravatar.cc/300" alt="avatar" />
                    <p>{account}</p>
                </NavLink>
            </div>

            <ProgressStepBar stepOne={stepOne} stepTwo={stepTwo} stepThree={stepThree} />

            <div className="checkout__content">
                <Theatre thongTinRapChieu={thongTinRapChieu} stepOne={stepOne} setStepOne={setStepOne} />
                <MovieBooking thongTinRapChieu={thongTinRapChieu} paramsId={id} setStepTwo={setStepTwo} setStepThree={setStepThree}/>
            </div>

            <div className="checkout__responsive">
                <div className="responsive">
                    <div className="responsive__info">
                        <p>Ghế : {renderBookChair()}</p>
                        <p>{renderTotal().toLocaleString()} VNĐ</p>
                    </div>
                    <div className="responsive__button">
                        <button className="button" onClick={() => {
                            setShowDetail(true)
                        }}>Đặt vé</button>
                    </div>
                </div>
            </div>

            <RWD_Checkout thongTinRapChieu={thongTinRapChieu} DSGheDangDat={DSGheDangDat} renderTotal={renderTotal} renderBookChair={renderBookChair} setShowDetail={setShowDetail} showDetail={showDetail} paramsId={id} />
        </div >
    );
}

export default Checkout;