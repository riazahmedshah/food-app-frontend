import { Button } from "@/components/ui/button";

import {Link} from "react-router-dom";
export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 h-20 flex items-center px-6">
      <div className="flex items-center">
        <div className="w-4 h-4 rounded-full bg-orange-500 mr-2"></div>
        <h1 className="text-2xl font-bold text-blue-900">FoodHub</h1>
      </div>
      
      <nav className="hidden md:flex gap-6 ml-12">
        <Link to="#" className="text-gray-500 hover:text-blue-900 transition-colors">All Restaurants</Link>
        <Link to="#" className="text-gray-500 hover:text-blue-900 transition-colors">About</Link>
        {/* <Link to="#" className="text-gray-500 hover:text-blue-900 transition-colors"></Link> */}
        <Link to="#" className="text-gray-500 hover:text-blue-900 transition-colors">Contact</Link>
      </nav>
      
      <div className="ml-auto flex gap-2">
        <Button variant="outline" className="rounded-full border-blue-900 text-blue-900">
          <Link to="/auth">Login</Link>
        </Button>
        <Button variant="default" className="rounded-full bg-blue-900 hover:bg-blue-800">
          Partner with us
        </Button>
      </div>
    </header>
  );
};