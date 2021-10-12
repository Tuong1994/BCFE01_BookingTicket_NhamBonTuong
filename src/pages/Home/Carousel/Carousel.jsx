import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Popup from '../../../component/Popup/Popup';
import useOverFlow from '../../../hooks/useOverFlow';


function Carousel(props) {
    const { danhSachPhim, phimTrailer } = useSelector(state => state.PhimReducer);
    const dispatch = useDispatch()
    const [showVideo, setShowVideo] = useState(false);
    const renderFilm = () => {
        return danhSachPhim?.slice(1, 5).map((film, index) => {
            return <div className="slide" key={index}>
                <img className="slides__img" src={film.hinhAnh} />
                <button className="btn__play" onClick={() => {
                    dispatch({
                        type: "GET_TRAILER",
                        film: {
                            maPhim: film.maPhim,
                            trailer: film.trailer
                        },
                    })
                    setShowVideo(true)
                }}
                >
                    <i class="fa fa-play"></i>
                </button>
            </div>
        })
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
    }
    useOverFlow(showVideo);
    return (
        <div className="carousel">
            <Slider {...settings}>
                {renderFilm()}
            </Slider>
            <Popup trigger={showVideo} setTrigger={setShowVideo}>
                <iframe className="videos-wrapper" src={phimTrailer.trailer} frameborder="0" allow="autoplay" allowFullScreen={true}></iframe>
            </Popup>
        </div>
    );
}

export default Carousel;