import React from 'react';

function MovieTrailer({ showTrailer, setShowTrailer, phimTrailer }) {
    return (
        <div className={showTrailer ? "movie-trailer__bg active-trailer" : "movie-trailer__bg"}>
            <div className="movie-trailer">
                <div className="movie-trailer__video">
                    <span className="video__btn" onClick={() => {
                        setShowTrailer(false);
                    }}>
                        <i class="fa fa-times"></i>
                    </span>
                    <iframe className="video" src={phimTrailer.trailer} frameBorder="0" allow="autoplay" allowFullScreen={true}></iframe>
                </div>
            </div>
        </div>
    );
}

export default MovieTrailer;