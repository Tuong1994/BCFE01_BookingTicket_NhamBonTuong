import React from 'react';
import { useSelector } from 'react-redux';

function AdminLoading(props) {
    let { loading } = useSelector(state => state.LoadingReducer)
    let renderLoading = () => {
        if (loading) {
            return <div className="admin-loading">
                <span className="admin-loading__icon"><i class="fa fa-circle-notch"></i></span>
            </div>
        } else {
            <div className="admin-loading hidden">
                <span className="admin-loading__icon"><i class="fa fa-circle-notch"></i></span>
            </div>
        }
    }
    return (
        <>
            {renderLoading()}
        </>
    );
}

export default AdminLoading;