
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FoodMenuHeader from "@/components/FoodMenuHeader";
import FoodCategoryTabs from "@/components/FoodCategoryTabs";
import NutritionInfo from "@/components/NutritionInfo";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { foodItems } from "@/data/foodItems";

const FoodMenu = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Применяем хук для плавного скролла
  useSmoothScroll();
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div 
      className={`min-h-screen flex flex-col transition-opacity duration-1000 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <Header />
      
      <main className="flex-grow container py-8">
        <FoodMenuHeader isLoaded={isLoaded} />
        <FoodCategoryTabs 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          foodItems={foodItems} 
        />
        <NutritionInfo isLoaded={isLoaded} />
      </main>
      
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default FoodMenu;
