import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Loading(props) {
    let { loading } = useSelector(state => state.LoadingReducer);
    
    let renderLoading = () => {
        if (loading) {
            return <div className="loading__container">
                <img className="loading__logo" src="../../img/logo.png" />
            </div>
        };
        return <div className="loading__container visable">
            <img className="loading__logo" src="../../img/logo.png" />
        </div>;
    }


    return (
        <>
            {renderLoading()}
        </>
    );
}

export default Loading;