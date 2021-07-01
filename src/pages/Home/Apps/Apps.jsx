import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Apps(props) {
    let setting = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
    }

    return (
        <div className="apps" id="apps">
            <div className="apps__content">
                <div className="apps__info">
                    <h3>Ứng dụng tiện lợi dành cho người yêu điện ảnh</h3>
                    <p>Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà hấp dẫn</p>
                    <button className="button">App miễn phí - Tải về ngay !</button>
                    <p>Tix có hai phiên bản <a href="#">IOS</a> và <a href="#">Android</a></p>
                </div>
                
                <div className="apps__phone">
                    <Slider {...setting}>
                        <div className="apps__slide">
                            <img src="../../img/slide1.jpg" />
                        </div>
                        <div className="apps__slide">
                            <img src="../../img/slide2.jpg" />
                        </div>
                        <div className="apps__slide">
                            <img src="../../img/slide3.jpg" />
                        </div>
                        <div className="apps__slide">
                            <img src="../../img/slide4.jpg" />
                        </div>
                        <div className="apps__slide">
                            <img src="../../img/slide5.jpg" />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Apps;