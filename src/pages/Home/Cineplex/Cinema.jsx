import React from 'react';
import { useState } from 'react';
import Movie from './Movie';

function Cinema({ danhSachRapChieu, showCinema }) {
    let [showMovie, setShowMovie] = useState("")
    return (
        <div className="tabs__content">
            {danhSachRapChieu?.map((cineplex, index) => {
                return <div className={showCinema == index ? "content__subtabs show-cinema" : "content__subtabs"} key={index}>
                    <div className="subtabs__cinema">
                        {cineplex.lstCumRap?.map((cinema, index) => {
                            return <div className={showMovie == index ? "cinema active-cinema" : "cinema"} key={index} onClick={() => {
                                setShowMovie(index);
                            }}>
                                <img src="../img/rapChieu.png" alt={cinema.tenCumRa} />
                                <div className="cinema__info">
                                    <p>{cinema.tenCumRap}</p>
                                    {cinema.diaChi?.length > 30 ? <p>{cinema.diaChi.substr(0,30)}...</p> : <p>{cinema.diaChi}</p>}
                                </div>
                            </div>
                        })}
                    </div>
                    <Movie cineplex={cineplex} showMovie={showMovie} />
                </div>
            })}
        </div >
    );
}

export default Cinema;