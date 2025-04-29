
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FoodCategoryTabs from "@/components/FoodCategoryTabs";
import FoodMenuHeader from "@/components/FoodMenuHeader";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import NutritionInfo from "@/components/NutritionInfo";
import SidebarMenu from "@/components/SidebarMenu";
import { foodItems } from "@/data/foodItems";

const FoodMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Effect for checking URL hash for direct navigation
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 500);
      }
    }
    
    // Animation on load
    setIsLoaded(true);
  }, []);

  // Filtered items based on selected category
  const filteredItems = selectedCategory === "all" 
    ? foodItems 
    : foodItems.filter(item => item.category === selectedCategory);

  return (
    <div className={`min-h-screen flex flex-col transition-opacity duration-700 ${
      isLoaded ? 'opacity-100' : 'opacity-0'
    }`}>
      <Header />
      <div className="flex flex-1">
        <SidebarMenu />
        <div className="flex-1">
          <FoodMenuHeader />
          
          <main className="container py-8">
            <FoodCategoryTabs 
              selectedCategory={selectedCategory} 
              onSelectCategory={setSelectedCategory} 
            />
            
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredItems.map((item, index) => (
                <div 
                  key={item.id}
                  id={item.id.toString()}
                  className="opacity-0 animate-fade-in"
                  style={{ animationFillMode: 'forwards', animationDelay: `${index * 100 + 200}ms` }}
                >
                  <div 
                    className="rounded-lg bg-white shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
                      />
                      {item.isPopular && (
                        <div className="absolute top-2 right-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                          Хит!
                        </div>
                      )}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <h3 className="text-white font-bold text-lg">{item.name}</h3>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-primary font-bold text-xl">{item.price} ₽</span>
                        <button 
                          className="bg-primary text-white px-3 py-1 rounded-md hover:bg-primary/90 transition-colors"
                        >
                          В корзину
                        </button>
                      </div>
                      
                      {/* Информация о питательности */}
                      {item.nutrition && (
                        <NutritionInfo nutrition={item.nutrition} />
                      )}
                      
                      {/* Информация о времени приготовления */}
                      {item.cookTime && (
                        <div className="mt-3 flex items-center text-sm text-gray-500">
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-4 w-4 mr-1" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                            />
                          </svg>
                          Время приготовления: {item.cookTime} мин.
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredItems.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium text-gray-600">Блюда не найдены</h3>
                <p className="mt-2 text-gray-500">Попробуйте выбрать другую категорию</p>
              </div>
            )}
          </main>
        </div>
      </div>
      
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default FoodMenu;
