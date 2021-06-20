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
                    <XAxis dataKey="name" stroke="#5550bd"/>
                    <YAxis stroke="#5550bd" />
                    <Tooltip />
                    <Bar dataKey="Cinema revanue" fill="#82ca9d" />
                    <Legend />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default CinemaChart;