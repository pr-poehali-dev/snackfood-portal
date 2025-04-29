
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SidebarMenu from "@/components/SidebarMenu";
import SweetCategoryTabs from "@/components/SweetCategoryTabs";
import SweetCard from "@/components/SweetCard";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { sweetsItems } from "@/data/sweetsItems";

const Sweets = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Проверяем хэш URL для прямой навигации
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setSelectedCategory(hash);
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 500);
      }
    }
    
    // Анимация при загрузке
    setIsLoaded(true);
  }, []);

  // Отфильтрованные элементы на основе выбранной категории
  const filteredItems = selectedCategory === "all" 
    ? sweetsItems 
    : sweetsItems.filter(item => item.category === selectedCategory);

  return (
    <div className={`min-h-screen flex flex-col transition-opacity duration-700 ${
      isLoaded ? 'opacity-100' : 'opacity-0'
    }`}>
      <Header />
      <div className="flex flex-1">
        <SidebarMenu />
        <div className="flex-1 bg-gradient-to-b from-pink-50 to-white">
          {/* Фон с узором сладостей через CSS */}
          <div 
            className="absolute inset-0 z-0 opacity-5" 
            style={{ 
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23a855f7' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px',
            }}
          />
          
          <main className="container py-8 relative z-10">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-primary mb-2">Сладости</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Наши сладости приготовлены из натуральных ингредиентов высшего качества. 
                Идеальное завершение вашего перекуса или подарок для близких.
              </p>
            </div>
            
            <SweetCategoryTabs 
              selectedCategory={selectedCategory} 
              onSelectCategory={setSelectedCategory} 
            />
            
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredItems.map((sweet, index) => (
                <SweetCard key={sweet.id} sweet={sweet} index={index} />
              ))}
            </div>
            
            {filteredItems.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium text-gray-600">Сладости не найдены</h3>
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

export default Sweets;
