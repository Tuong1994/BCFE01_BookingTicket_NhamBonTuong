import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function RevanueChart(props) {
    const revanue = [
        {
            name: 'Jan',
            Revanue: 40,
        },
        {
            name: 'Fred',
            Revanue: 45,
        },
        {
            name: 'Mar',
            Revanue: 60,
        },
        {
            name: 'April',
            Revanue: 55,
        },
        {
            name: 'May',
            Revanue: 41,
        },
        {
            name: 'June',
            Revanue: 30,
        },
        {
            name: 'July',
            Revanue: 26,
        },
        {
            name: 'Aug',
            Revanue: 48,
        },
        {
            name: 'Step',
            Revanue: 60,
        },
        {
            name: 'Oct',
            Revanue: 70,
        },
        {
            name: 'Nov',
            Revanue: 75,
        },
        {
            name: 'Dec',
            Revanue: 88,
        },
    ];
    return (
        <div className="revanue-chart">
            <h4>Doanh thu ( % )</h4>
            <ResponsiveContainer width="100%" aspect={5 / 2}>
                <LineChart data={revanue}>
                    <XAxis dataKey="name" stroke="#4a4a4a" />
                    <YAxis stroke="#4a4a4a" />
                    <Line type="monotone" dataKey="Revanue" stroke="#39b165" strokeWidth={3} activeDot={true} />
                    <Tooltip />
                    <CartesianGrid stroke="#cecaca" />
                    <Legend style={{ color: "#4a4a4a" }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default RevanueChart;