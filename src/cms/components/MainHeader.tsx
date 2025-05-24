import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

const MainHeader = () => {
    const [activeView, setActiveView] = useState<'customers' | 'restaurants'>('restaurants');
    return (
        <div className="w-full h-18 bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <h1 className="text-2xl font-bold text-blue-900">FoodHub</h1>
                </div>

                <div className="flex items-center gap-4">
                    <Button
                        variant={activeView === 'customers' ? 'default' : 'ghost'}
                        className={activeView === 'customers' ? 'bg-blue-900 text-white hover:bg-blue-800' : 'text-gray-600 hover:text-gray-900'}
                        onClick={() => setActiveView('customers')}
                    >
                        <Link to="/restaurants">For Customers</Link>
                    </Button>
                    <Button
                        variant={activeView === 'restaurants' ? 'default' : 'ghost'}
                        className={activeView === 'restaurants' ? 'bg-blue-900 text-white hover:bg-blue-800' : 'text-gray-600 hover:text-gray-900'}
                        onClick={() => setActiveView('restaurants')}
                    >
                        <Link to="/partners">For Restaurants</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default MainHeader