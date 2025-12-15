import GraficoPizza from "@/app/components/charts/GraficoPizza";
import GraficoBarra from "@/app/components/charts/GraficoBarras";
import GraficoFrequenciaPorTurno from "@/app/components/charts/GraficoFrequenciaPorTurno";
import GraficoBarrasHorizontais from "@/app/components/charts/GraficoBarrasHorizontais";
import Card from "@/app/components/dashboard/Card";
import { CircleDollarSign, ScrollText, TrendingUp, UserRoundCheck } from "lucide-react";

const Dashboard = () => {
    const dadosFaturamento = [
        { name: "Janeiro", value: 3000, fill: "var(--color-primary)" },
        { name: "Fevereiro", value: 4500, fill: "var(--color-primary)" },
        { name: "Março", value: 2800, fill: "var(--color-primary)" },
        { name: "Abril", value: 6000, fill: "var(--color-primary)" },
        { name: "Maio", value: 7500, fill: "var(--color-primary)" },
        { name: "Junho", value: 5000, fill: "var(--color-primary)" },
        { name: "Julho", value: 8000, fill: "var(--color-primary)" },
        { name: "Agosto", value: 9000, fill: "var(--color-primary)" },
        { name: "Setembro", value: 10000, fill: "var(--color-primary)" },
        { name: "Outubro", value: 11000, fill: "var(--color-primary)" },
        { name: "Novembro", value: 9500, fill: "var(--color-primary)" },
        { name: "Dezembro", value: 12000, fill: "var(--color-primary)" }
    ];

    const dadosMovimentoSemanal = [
        { name: "Segunda", value: 30, fill: "var(--color-primary)" },
        { name: "Terça", value: 45, fill: "var(--color-primary)" },
        { name: "Quarta", value: 28, fill: "var(--color-primary)" },
        { name: "Quinta", value: 60, fill: "var(--color-primary)" },
        { name: "Sexta", value: 75, fill: "var(--color-primary)" },
        { name: "Sábado", value: 50, fill: "var(--color-primary)" },
        { name: "Domingo", value: 80, fill: "var(--color-primary)" }
    ];

    const dadosGenero = [{ name: 'Masculino', value: 60 }, { name: 'Feminino', value: 40 }];
    const dadosIdade = [{ name: 'Masculino', value: 60 }, { name: 'Feminino', value: 40 }, { name: 'Feminino', value: 40 }, { name: 'Feminino', value: 40 }, { name: 'Feminino', value: 40 }];

    return <div className="overflow-y-auto flex flex-col gap-2.5 [&::-webkit-scrollbar]:hidden h-full">
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-2.5 flex-wrap">
            <Card icon={<CircleDollarSign color="#9ECD1D" />} title="Receita total" value={120000} />
            <Card icon={<TrendingUp />} title="Lucro mensal" value={120000} />
            <Card icon={<ScrollText color="#FFC300" />} title="Receita total" value={120000} />
            <Card icon={<UserRoundCheck />} title="Receita total" value={120000} />
        </div>
        <div className="flex flex-col gap-2.5 lg:grid xl:grid-cols-2">
        <GraficoPizza />
        <GraficoBarra titulo="Faturamento por mês" dados={dadosFaturamento} formatador="k" rotuloTooltip="Faturamento" />
        <GraficoBarra titulo="Movimento semanal" dados={dadosMovimentoSemanal} formatador="%" rotuloTooltip="Frequência" />
        <GraficoFrequenciaPorTurno />
        <GraficoBarrasHorizontais data={dadosGenero} titulo="Público" />
        <GraficoBarrasHorizontais data={dadosIdade} titulo="Faixa Etária" />
    </div>
    </div>;
}
export default Dashboard;