
import React from 'react';
import { LineChart, Line, XAxis,CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Home() {
    const data = [
        {
            name: 'JAN',
            hours: 21,
            amt: 2400,
        },
        {
            name: 'FEB',
            hours: 31,
            amt: 2210,
        },
        {
            name: 'MAR',
            hours: 20,
            amt: 2290,
        },
        {
            name: 'APR',
            hours: 41,
            amt: 2000,
        },
        {
            name: 'MAY',
            hours: 31,
            amt: 2181,
        },
        {
            name: 'JUNE',
            hours: 10,
            amt: 2500,
        },
        {
            name: 'JULY',
            hours: 16,
            amt: 2100,
        },
        {
            name: 'AUG',
            hours: 21,
            amt: 2100,
        },
        {
            name: 'SEP',
            hours: 38,
            amt: 2100,
        },
        {
            name: 'OCT',
            hours: 46,
            amt: 2100,
        },
        {
            name: 'NOV',
            hours: 16,
            amt: 2100,
        },
        {
            name: 'DEC',
            hours: 98,
            amt: 2100,
        },
    ];
    return (
        <>
            <h3 className="dash">Transaction Summary</h3>
                <ResponsiveContainer width={'100%'} height={300}>
                    <LineChart data={data}>
                        <XAxis dataKey="name" />
                        <Tooltip />
                        <CartesianGrid stroke="#f5f5f5" />
                        <Line type="monotone" dataKey="hours" stroke="#ff7300" yAxisId={0} />
                    </LineChart>
                </ResponsiveContainer>
        </>
    )
}
