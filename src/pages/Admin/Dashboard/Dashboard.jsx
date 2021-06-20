import React from 'react';
import RevanueChart from './RevanueChart';
import CinemaChart from './CinemaChart';
import UserChart from './UserChart';
import Feature from './Feature';

function Dashboard(props) {
    return (
        <div className="dashboard-wrapper">
            <Feature />
            <RevanueChart />
            <div className="chart-wrapper">
                <CinemaChart />
                <UserChart />
            </div>
        </div>
    );
}

export default Dashboard;