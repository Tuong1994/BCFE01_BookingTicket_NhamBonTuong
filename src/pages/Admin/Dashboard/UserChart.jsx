import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function UserChart(props) {
    const revanue = [
        {
            name: '1st',
            User: 40,
        },
        {
            name: '2nd',
            User: 30,
        },
        {
            name: '3th',
            User: 80,
        },
        {
            name: '4th',
            User: 55,
        },
        {
            name: '5th',
            User: 41,
        },
        {
            name: '6th',
            User: 34,
        },
        {
            name: '7th',
            User: 28,
        },
        {
            name: '8th',
            User: 46,
        },
        {
            name: '9th',
            User: 62,
        },
        {
            name: '10th',
            User: 66,
        },
        {
            name: '11th',
            User: 75,
        },
        {
            name: '12th',
            User: 92,
        },
    ];
    return (
        <div className="user-chart">
            <h4>Người dùng ( % )</h4>
            <ResponsiveContainer width="100%" aspect={4 / 2}>
                <LineChart data={revanue} scaleToFit={true}>
                    <XAxis dataKey="name" stroke="#4a4a4a" />
                    <YAxis stroke="#4a4a4a" />
                    <Line type="monotone" dataKey="User" stroke="#347deb" strokeWidth={3} activeDot={true} />
                    <Tooltip />
                    <CartesianGrid stroke="#cecaca" />
                    <Legend style={{ color: "#4a4a4a" }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default UserChart;