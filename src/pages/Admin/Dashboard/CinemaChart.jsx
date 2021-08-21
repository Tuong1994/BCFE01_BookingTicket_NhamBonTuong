import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function CinemaChart(props) {
    const cinema = [
        {
            name: 'BHD Star',
            "Cinema revanue": 88,
        },
        {
            name: 'CineStar',
            "Cinema revanue": 42,

        },
        {
            name: 'Galaxy',
            "Cinema revanue": 56,
        },
        {
            name: 'LotteCinema',
            "Cinema revanue": 75,
        },
        {
            name: 'MegaGS',
            "Cinema revanue": 38,
        },
    ];
    return (
        <div className="cinema-chart">
            <h4>Rạp ( % )</h4>
            <ResponsiveContainer width="100%" aspect={4 / 2}>
                <BarChart data={cinema}>
                    <CartesianGrid stroke="#cecece" />
                    <XAxis dataKey="name" stroke="#4a4a4a" />
                    <YAxis stroke="#4a4a4a" />
                    <Tooltip />
                    <Bar dataKey="Cinema revanue" fill="#fb4226" />
                    <Legend />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default CinemaChart;