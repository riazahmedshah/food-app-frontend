import { Step } from "../types/types";

interface StepCardProps {
  step: Step;
  showArrow?: boolean;
}

export const StepCard = ({ step, showArrow = true }: StepCardProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center">
        <div className="w-16 h-16 rounded-full bg-blue-900 flex items-center justify-center">
          <span className="text-xl font-bold text-white">{step.number}</span>
        </div>
        {showArrow && (
          <span className="mx-4 text-2xl text-orange-500">→</span>
        )}
      </div>
      
      <div className="mt-6 text-center">
        <h3 className="text-xl font-bold text-blue-900 mb-2">{step.title}</h3>
        {step.description.map((line, index) => (
          <p key={index} className="text-gray-500 text-sm">{line}</p>
        ))}
      </div>
    </div>
  );
};