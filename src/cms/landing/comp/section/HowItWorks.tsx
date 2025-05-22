import { Step } from "../../types/types";
import { StepCard } from "../StepCard";

interface HowItWorksProps {
  steps: Step[];
}

export const HowItWorks = ({ steps }: HowItWorksProps) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">How It Works</h2>
          <p className="text-lg text-gray-500">Ordering food has never been easier</p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {steps.map((step, index) => (
            <StepCard 
              key={step.id} 
              step={step} 
              showArrow={index !== steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};