"use client";

import { Bar, BarChart, LabelList, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

interface GraficoBarrasHorizontaisProps {
    data: { name: string; value: number }[];
    titulo: string;
}

const GraficoBarrasHorizontais = ({ data, titulo }: GraficoBarrasHorizontaisProps) => <div className="h-fit w-full bg-(--color-background-components) p-2.5 rounded-lg">
    <h1 className="font-semibold">{titulo}</h1>
    <ResponsiveContainer width="100%" height={200}>
        <BarChart layout="vertical" data={data} margin={{ left: -20, right: 35 }} >
            <Bar dataKey="value" fill="var(--color-primary)" radius={5} barSize={30} >
                <LabelList
                dataKey="value"
                position="right"
                offset={8}
                fontSize={12}
                fill="var(--texto)"
                formatter={value => `${value}%`}
            />
            </Bar>
            <XAxis type="number" dataKey="value" hide />
            <YAxis type="category" dataKey="name" tick={{ fill: "var(--texto)" }} axisLine={false} stroke="var(--texto)" tickLine={false} tickFormatter={value => value.slice(0, 3)} />
            <Tooltip formatter={(value) => [`${value}`, "Alunos"]} contentStyle={{ background: "var(--color-tooltip)", border: "none", borderRadius: "10px" }} itemStyle={{ color: "#fff" }} cursor={false} labelFormatter={() => ""} />
        </BarChart>
    </ResponsiveContainer>
</div>

export default GraficoBarrasHorizontais;