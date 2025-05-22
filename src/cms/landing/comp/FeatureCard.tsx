import { Feature } from "../types/types";


interface FeatureCardProps {
  feature: Feature;
}

export const FeatureCard = ({ feature }: FeatureCardProps) => {
  return (
    <div className="flex flex-col items-center text-center max-w-xs mx-auto">
      <div 
        className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
        style={{ backgroundColor: feature.bgColor }}
      >
        <span className="text-3xl">{feature.icon}</span>
      </div>
      <h3 className="text-xl font-bold text-blue-900 mb-3">{feature.title}</h3>
      {feature.description.map((line, index) => (
        <p key={index} className="text-gray-500">{line}</p>
      ))}
    </div>
  );
};