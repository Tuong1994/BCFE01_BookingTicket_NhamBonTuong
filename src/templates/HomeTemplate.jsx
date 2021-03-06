import React from 'react';
import { Route } from 'react-router';
import Loading from '../component/Loading/Loading';
import Footer from '../component/Footer/Footer';
import Header from '../component/Header/Header';
import ButtonScrollTop from '../component/ButtonScrollTop/ButtonScrollTop';

const HomeTemplate = (props) => {
    let { Component, ...restRoute } = props;
    return <Route {...restRoute} render={(propsRoute) => {
        return <div>
            <Loading />
            <Header />
            <Component {...propsRoute} />
            <Footer />
            <ButtonScrollTop />
        </div>
    }} />
}

export default HomeTemplate;