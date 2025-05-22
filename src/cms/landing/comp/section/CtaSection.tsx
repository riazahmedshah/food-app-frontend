import { Button } from "@/components/ui/button";

interface CtaSectionProps {
  title: string;
  subtitle?: string;
  primaryButtonText: string;
  secondaryButtonText?: string;
  note?: string;
  isDark?: boolean;
}

export const CtaSection = ({
  title,
  subtitle,
  primaryButtonText,
  secondaryButtonText,
  note,
  isDark = false
}: CtaSectionProps) => {
  return (
    <div className={`py-16 ${isDark ? 'bg-gradient-to-br from-blue-900 to-blue-700' : 'bg-white'}`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-blue-900'}`}>
          {title}
        </h2>
        {subtitle && (
          <p className={`text-lg mb-8 ${isDark ? 'text-white/90' : 'text-gray-500'}`}>
            {subtitle}
          </p>
        )}
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-full">
            {primaryButtonText}
          </Button>
          {secondaryButtonText && (
            <Button variant="link" className={`border-2 ${isDark ? 'border-white text-white' : 'border-blue-900 text-blue-900'} px-8 py-6 rounded-full`}>
              {secondaryButtonText}
            </Button>
          )}
        </div>
        
        {note && (
          <p className={`text-sm ${isDark ? 'text-white/70' : 'text-gray-400'}`}>
            {note}
          </p>
        )}
      </div>
    </div>
  );
};