"use client";

import { Cell, Label, LabelList, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
    { name: 'Plano Básico', value: 40, fill: '#9ECD1D' },
    { name: 'Plano PRO', value: 30, fill: '#F200FF' },
    { name: 'Plano Médio', value: 30, fill: '#00C2FF' }
]

const GraficoPizza = () => <div className="bg-(--color-background-components) rounded-lg p-2.5 w-full min-h-75 flex flex-col gap-2.5">
    <header className="flex justify-between gap-2.5 h-fit">
        <h1 className="font-semibold">Planos mais escolhidos</h1>
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
        <PieChart>
            <Pie
                dataKey="value"
                data={data}
                innerRadius="40%"
                stroke="none">
                <LabelList
                    dataKey="value"
                    fill="var(--texto)"
                    stroke="none"
                    fontSize={12}
                    formatter={value => `${value}%`}
                />

                {
                    data.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={entry.fill}
                            style={{ outline: 'none' }}
                        />
                    ))
                }
                <Label position="center" fill="var(--texto)">100%</Label>
            </Pie>
            <Tooltip contentStyle={{ background: "var(--color-tooltip)", border: "none", borderRadius: "10px" }} itemStyle={{ color: "#fff" }} />
        </PieChart>
    </ResponsiveContainer>
</div>
export default GraficoPizza;