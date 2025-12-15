"use client";

import { Label, PolarRadiusAxis, RadialBar, RadialBarChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
    { name: 'Manhã', value: 40, fill: '#9ECD1D', label: "Manhã" },
    { name: 'Tarde', value: 30, fill: '#F200FF' },
    { name: 'Noite', value: 30, fill: '#00C2FF' }
]

const GraficoPizza = () => <div className="bg-(--color-background-components) rounded-lg p-2.5 w-full min-h-75 flex flex-col gap-2.5">
    <header className="flex justify-between gap-2.5 h-fit">
        <h1 className="font-semibold">Movimento por turno</h1>
        <ul className="flex gap-2.5 flex-wrap justify-end">
            {data.map((entry, index) => (
                <li key={`item-${index}`} className="flex items-center gap-2.5 text-(--texto)">
                    <span className="w-4 h-4 rounded-full" style={{ backgroundColor: entry.fill }}></span>
                    {entry.name}
                </li>
            ))}
        </ul>
    </header>
    <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart cx="50%" cy="50%" innerRadius="50%" outerRadius="80%" barSize={10} data={data}>
            <RadialBar dataKey="value" stroke="none" cornerRadius={10}/>
            <Tooltip contentStyle={{ background: "var(--color-tooltip)", border: "none", borderRadius: "10px" }} itemStyle={{ color: "#fff" }} formatter={(value => [`${value}%`, "Frequência"])} labelFormatter={() => ""} />
        </RadialBarChart>
    </ResponsiveContainer>
</div>
export default GraficoPizza;