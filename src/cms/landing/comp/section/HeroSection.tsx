import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white pt-32 pb-48">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Delicious Food <br /> Delivered Fast
          </h1>
          <p className="text-xl opacity-90 mb-8">
            Order from your favorite restaurants and get fresh,<br />
            hot food delivered right to your doorstep
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-full">
              Order Now
            </Button>
            <Button variant="link" className="border-2 border-white text-white px-8 py-6 rounded-full">
              Learn More
            </Button>
          </div>
        </div>
        
        {/* Phone mockup */}
        <div className="absolute right-16 top-1/2 transform -translate-y-1/2 hidden lg:block">
          <div className="relative w-40 h-64 bg-white rounded-2xl p-2 shadow-xl">
            <div className="w-full h-full bg-gray-50 rounded-xl overflow-hidden">
              {/* Mock app interface */}
              <div className="p-2">
                <div className="w-full h-3 bg-blue-900 rounded mb-2"></div>
                <div className="w-3/4 h-2 bg-orange-500 rounded mb-2"></div>
                <div className="w-full h-2 bg-green-500 rounded mb-4"></div>
                
                <div className="flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center">
                    <span className="text-2xl">🍕</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative circles */}
          <div className="absolute -z-10 w-60 h-60 rounded-full bg-white/10 -right-10 -top-10"></div>
          <div className="absolute -z-10 w-40 h-40 rounded-full bg-white/20 right-0 top-1/2"></div>
        </div>
      </div>
    </section>
  );
};