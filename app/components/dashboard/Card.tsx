import { formatCompactNumber } from "@/app/utils/format";

interface CardProps {
    title: string;
    icon?: React.ReactNode;
    value?: number;
}

const Card = ({ title, icon, value }: CardProps) => <div className="flex-1 flex flex-col items-center justify-center bg-(--color-background-components) rounded-lg p-5">
    <div className="flex items-center gap-2.5">
        {icon && <div className="mb-2">{icon}</div>}
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
    </div>
    {value && <p className="text-2xl font-bold">{formatCompactNumber(value)}</p>}
</div>;

export default Card;        