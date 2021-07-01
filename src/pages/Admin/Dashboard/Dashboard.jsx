import React from 'react';
import RevanueChart from './RevanueChart';
import CinemaChart from './CinemaChart';
import UserChart from './UserChart';
import Feature from './Feature';

function Dashboard(props) {
    return (
        <div className="dashboard">
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