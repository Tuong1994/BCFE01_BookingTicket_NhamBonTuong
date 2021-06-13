import React from 'react';
import { Route } from 'react-router';
import Footer from '../component/Footer/Footer';
import Header from '../component/Header/Header';

const HomeTemplate = (props) => {
    let { Component, ...restRoute } = props;
    return <Route {...restRoute} render={(propsRoute) => {
        return <div>
            <Header />
            <Component {...propsRoute} />
            <Footer />
        </div>
    }} />
}

export default HomeTemplate;