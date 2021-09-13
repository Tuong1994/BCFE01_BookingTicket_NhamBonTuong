import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useDispatch, useSelector } from 'react-redux';
import Popup from '../../../component/Popup/Popup';


function Carousel(props) {
    const { danhSachPhim, phimTrailer } = useSelector(state => state.PhimReducer);
    let dispatch = useDispatch()
    let [showVideo, setShowVideo] = useState(false);
    let renderFilm = () => {
        return danhSachPhim?.slice(0, 5).map((film, index) => {
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
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
    }

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