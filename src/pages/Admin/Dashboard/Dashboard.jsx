import React from 'react';
import RevanueChart from './RevanueChart';
import CinemaChart from './CinemaChart';
import UserChart from './UserChart';
import Feature from './Feature';

function Dashboard(props) {
    return (
        <div className="dashboard">
            <h3>Dashboard</h3>
            <hr />
            <Feature />
            <RevanueChart />
            <div className="sub-chart">
                <CinemaChart />
                <UserChart />
            </div>
        </div>
    );
}

export default Dashboard;