"use client";

import { formatCompactNumber } from "@/app/utils/format";
import { BarChart, ResponsiveContainer, Tooltip, Bar, XAxis, YAxis, Label } from "recharts";


interface GraficoBarraProps {
    titulo: string;
    dados: { name: string; value: number; fill: string }[];
    formatador?: string;
    rotuloTooltip?: string;
}

const GraficoBarra = ({titulo, dados, formatador, rotuloTooltip}: GraficoBarraProps) =>
    <div className="w-full min-h-75 bg-(--color-background-components) rounded-lg p-2.5 flex flex-col gap-2.5">
        <h1 className="font-semibold">{titulo}</h1>
        <ResponsiveContainer width="100%" height="100%">
        <BarChart data={dados} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
            <Bar
                dataKey="value"
                radius={5}
                fill="var(--color-primary)"
                maxBarSize={30}
            />
            <XAxis dataKey="name" tick={{ fill: "var(--texto)" }} tickFormatter={value => value.slice(0, 3)} stroke="var(--texto)" tickLine={false} />
            <YAxis dataKey="value" tick={{ fill: "var(--texto)" }} tickFormatter={value => formatCompactNumber(value)} stroke="var(--texto)" tickLine={false} />
            <Tooltip formatter={(value) => [formatCompactNumber(Number(value)), rotuloTooltip]} contentStyle={{ background: "var(--color-tooltip)", border: "none", borderRadius: "10px" }} itemStyle={{ color: "#fff" }} cursor={false} />
        </BarChart>
    </ResponsiveContainer>
    </div>
export default GraficoBarra;