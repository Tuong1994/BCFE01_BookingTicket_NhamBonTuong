import React, { useEffect } from 'react';
import Carousel from './Carousel/Carousel';
import Cineplex from './Cineplex/Cineplex';
import RWDCinema from '../../component/RWD_Cinema/RWDCinema';
import MovieList from './MovieList/MovieList';
import News from './News/News';
import Apps from './Apps/Apps'
import CheckoutBar from './CheckoutBar/CheckoutBar';
import { Fragment } from 'react';

function Home(props) {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <Fragment>
            <Carousel />
            <CheckoutBar />
            <div className="container home-wrapper">
                <MovieList />
                <Cineplex />
                <RWDCinema />
                <News />
            </div>
            <Apps />
        </Fragment>
    );
}

export default Home;