import React from 'react';
import { useSelector } from 'react-redux';

function Footer(props) {
    const { danhSachRapChieu } = useSelector(state => state.PhimReducer);
    
    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__contact">
                    <div className="contact__info">
                        <div className="info__policy">
                            <p className="title">TIX</p>
                            <div className="policy">
                                <span className="policy__item-1">
                                    <a className="footer__link" href="https://tix.vn/faq" target="_blank">FAQ</a>
                                    <a className="footer__link" href="https://tix.vn/brand-guideline/" target="_blank">Brand Guidelines</a>
                                </span>
                                <span className="policy__item-2">
                                    <a className="footer__link" href="https://tix.vn/thoa-thuan-su-dung" target="_blank">Thỏa thuận sử dụng</a>
                                    <a className="footer__link" href="https://tix.vn/chinh-sach-bao-mat" target="_blank">Chính sách bảo mật</a>
                                </span>
                            </div>
                        </div>

                        <div className="info__partners">
                            <p className="title">Đối tác</p>
                            <div className="partners__logo">
                                {danhSachRapChieu.map((rapChieu, index) => {
                                    return <div key={index}>
                                        <a className="footer__link logo" href="/">
                                            <img src={rapChieu.logo} alt={rapChieu.tenHeThongRap} />
                                        </a>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="contact__apps">
                        <div className="apps__mobile">
                            <p className="title">Moblie App</p>
                            <div className="mobile__icon">
                                <a className="footer__link icon" href="https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t/id615186197" target="_blank"><i class="fab fa-apple"></i></a>
                                <a className="footer__link icon" href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123" target="_blank"><i class="fab fa-android"></i></a>
                            </div>
                        </div>
                        <div className="apps__social">
                            <p className="title">Social</p>
                            <div className="social__icon">
                                <a className="footer__link icon" href="https://www.facebook.com/tix.vn/"><i class="fab fa-facebook" target="_blank"></i></a>
                                <a className="footer__link icon" href="https://zalo.me/tixdatve"><i class="fab fa-google-plus" target="_blank"></i></a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="footer__info">
                    <div className="footer__address">
                        <img className="zion__logo" src="../../img/zion-logo.jpg" alt="zion" />
                        <div className="address">
                            <p>TIX - SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</p>
                            <p>Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh, Việt Nam.</p>
                            <p>Giấy chứng nhận đăng ký kinh doanh số: 0101659783, đăng ký thay đổi lần thứ 30,<br /> ngày 22 tháng 01 năm 2020 do Sở kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp.</p>
                            <p>Số Điện Thoại (Hotline): 1900 545 436</p>
                            <p>Email: <a href="/">support@tix.vn</a></p>
                        </div>
                    </div>
                    <div className="footer__img">
                        <img src="../../img/bocongthuong.png" alt="bocongthuong"/>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Footer;