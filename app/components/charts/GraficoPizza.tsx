"use client";

import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const GraficoPizza = () =>
    <ResponsiveContainer width="100%" height={300} className="bg-(--color-background-components) rounded-lg p-2.5">
        <PieChart>
            <Pie
                dataKey="value"
                data={[
                    { name: 'Grupo A', value: 400, fill: '#8884d8' },
                    { name: 'Grupo B', value: 300 },
                    { name: 'Grupo C', value: 300 },
                    { name: 'Grupo D', value: 200 },
                ]}
                innerRadius="50%"
                stroke="none"
            />
            <Tooltip contentStyle={{background: "rgba(0, 0, 0, 0.5)", border: "none", borderRadius: "10px"}} itemStyle={{color: "#fff"}} />
        </PieChart>
    </ResponsiveContainer>;
export default GraficoPizza;