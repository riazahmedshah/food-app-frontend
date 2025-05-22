import { Stat } from "../types/types";

interface StatCardProps {
  stat: Stat;
}

export const StatCard = ({ stat }: StatCardProps) => {
  return (
    <div className="text-center">
      <h3 className="text-4xl font-bold text-orange-500 mb-2">{stat.value}</h3>
      <p className="text-gray-500">{stat.label}</p>
    </div>
  );
};