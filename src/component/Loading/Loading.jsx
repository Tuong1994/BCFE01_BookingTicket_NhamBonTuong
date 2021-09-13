import React from 'react';
import { useSelector } from 'react-redux';

function Loading(props) {
    let { loading } = useSelector(state => state.LoadingReducer);
    
    let renderLoading = () => {
        if (loading) {
            return <div className="loading__container">
                <img className="loading__logo" src="../../img/logo.png" alt="loading__logo"/>
            </div>
        };
        return <div className="loading__container visable">
            <img className="loading__logo" src="../../img/logo.png" alt="loading__logo"/>
        </div>;
    }


    return (
        <>
            {renderLoading()}
        </>
    );
}

export default Loading;