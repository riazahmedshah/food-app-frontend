import { Link } from "react-router-dom"

export const AuthHeader: React.FC = () => {
  return (
    <div className="w-full h-18 bg-white border-b border-gray-200 flex items-center justify-center">
        <Link to="/">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
        <h1 className="text-2xl font-bold text-blue-900">FoodHub</h1>
      </div>
        </Link>
    </div>
  );
};
