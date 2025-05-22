import { Header } from "../components/Header";
import { CtaSection } from "../landing/comp/section/CtaSection";
import { FeaturesSection } from "../landing/comp/section/FeaturesSection";
import { FinalCta } from "../landing/comp/section/FinalCta";
import { HeroSection } from "../landing/comp/section/HeroSection";
import { HowItWorks } from "../landing/comp/section/HowItWorks";
import { StatsSection } from "../landing/comp/section/StatsSection";
import { Feature, Stat, Step } from "../landing/types/types";


const LandingPage = () => {
  const features: Feature[] = [
    {
      id: "1",
      icon: "⚡",
      title: "Lightning Fast",
      description: ["Average delivery time", "under 30 minutes"],
      bgColor: "#e6f7ff"
    },
    {
      id: "2",
      icon: "🍽️",
      title: "Wide Selection",
      description: ["1000+ restaurants", "and growing"],
      bgColor: "#fff0e6"
    },
    {
      id: "3",
      icon: "💰",
      title: "Best Prices",
      description: ["Exclusive deals and", "discounts daily"],
      bgColor: "#e6ffe6"
    }
  ];

  const steps: Step[] = [
    {
      id: "1",
      number: 1,
      title: "Browse",
      description: ["Discover restaurants", "near you"]
    },
    {
      id: "2",
      number: 2,
      title: "Order",
      description: ["Select your favorite", "dishes"]
    },
    {
      id: "3",
      number: 3,
      title: "Pay",
      description: ["Secure payment", "options"]
    },
    {
      id: "4",
      number: 4,
      title: "Enjoy",
      description: ["Fast delivery to", "your door"]
    }
  ];

  const stats: Stat[] = [
    {
      id: "1",
      value: "50K+",
      label: "Happy Customers"
    },
    {
      id: "2",
      value: "1000+",
      label: "Partner Restaurants"
    },
    {
      id: "3",
      value: "100K+",
      label: "Orders Delivered"
    },
    {
      id: "4",
      value: "4.8★",
      label: "Average Rating"
    }
  ];

  return (
    <div className="bg-gray-50">
      <Header />
      
      <main>
        <HeroSection />
        <FeaturesSection features={features} />
        
        <CtaSection
          title="Start Ordering Today - It's Free!"
          primaryButtonText="Order Now"
          secondaryButtonText="Learn More"
        />
        
        <HowItWorks steps={steps} />
        <StatsSection stats={stats} />
        <FinalCta />
      </main>
    </div>
  );
};

export default LandingPage;