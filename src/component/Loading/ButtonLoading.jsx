import React from 'react';
import { useSelector } from 'react-redux';

function ButtonLoading(props) {
    let { btnLoading } = useSelector(state => state.LoadingReducer);
    
    const renderLoading = () => {
        if (btnLoading) {
            return <div className="button__loading">
                <i class="fa fa-circle-notch"></i>
            </div>
        } else {
            return null
        }
    }
    return (
        <>
            {renderLoading()}
        </>
    );
}

export default ButtonLoading;