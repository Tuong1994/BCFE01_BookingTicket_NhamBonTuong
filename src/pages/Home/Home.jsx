import React from 'react';
import Carousel from './Carousel/Carousel';
import Cinema from './Cinema/Cinema';
import MovieList from './MovieList/MovieList';
import News from './News/News';
import Apps from './Apps/Apps'
import CheckoutBar from './CheckoutBar/CheckoutBar';
import { Fragment } from 'react';

function Home(props) {
    return (
        <Fragment>
            <Carousel />
            <CheckoutBar />
            <div className="container home-wrapper">
                <MovieList />
                <Cinema />
                <News />
            </div>
            <Apps />
        </Fragment>
    );
}

export default Home;