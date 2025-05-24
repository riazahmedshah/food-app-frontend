import { Button } from "@/components/ui/button";

// Social Login Button Component
interface SocialButtonProps {
  provider: 'google' | 'facebook';
  onClick: () => void;
  className?: string;
}

export const SocialButton: React.FC<SocialButtonProps> = ({ provider, onClick, className = '' }) => {
  const isGoogle = provider === 'google';
  
  return (
    <Button
      variant={isGoogle ? "outline" : "default"}
      className={`w-full h-12 ${isGoogle ? 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50' : 'bg-blue-600 hover:bg-blue-700'} ${className}`}
      onClick={onClick}
    >
      <span className="mr-2 text-lg">
        {isGoogle ? 'G' : 'f'}
      </span>
      {isGoogle ? 'Google' : 'Facebook'}
    </Button>
  );
};