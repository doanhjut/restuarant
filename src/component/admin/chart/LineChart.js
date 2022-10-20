import "./styles.css";
import React from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Line
} from "recharts";

const data = [
    {
        name: "10/2022",
        uv: 4000,
        pv: 2400,
        amt: 2400
    },
    {
        name: "09/2022",
        uv: 3000,
        pv: 1398,
        amt: 2210
    },
    {
        name: "08/2022",
        uv: 2000,
        pv: 9800,
        amt: 2290
    },
    {
        name: "07/2022",
        uv: 2780,
        pv: 3908,
        amt: 2000
    },
    {
        name: "06/2022",
        uv: 1890,
        pv: 4800,
        amt: 2181
    },
    {
        name: "05/2022",
        uv: 2390,
        pv: 3800,
        amt: 2500
    },
    {
        name: "04/2022",
        uv: 3490,
        pv: 4300,
        amt: 2100
    }
];

export default function App() {
    return (
        <AreaChart width={730} height={450} data={data}
            margin={{ top: 100, right: 30, left: 0, bottom: 0 }}>
            <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
            <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
            <Line name="pv of pages" type="monotone" dataKey="pv" stroke="#8884d8" />
            <Line name="uv of pages" type="monotone" dataKey="uv" stroke="#82ca9d" />
        </AreaChart>
    );
}
