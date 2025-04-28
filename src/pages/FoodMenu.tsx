
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FoodCard from "@/components/FoodCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

// Типы для блюд
type FoodItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  isPopular?: boolean;
  calories?: number;
  preparationTime?: string;
  category: string;
};

const FoodMenu = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
    
    // Плавный скролл к якорям
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        
        if (element) {
          e.preventDefault();
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  // Данные о блюдах
  const foodItems: FoodItem[] = [
    {
      id: 1,
      name: "Гречка с сосиской",
      description: "Ароматная гречневая каша с сочной отварной сосиской и сливочным маслом",
      price: 150,
      image: "https://images.unsplash.com/photo-1683125695361-395ac8f8d8e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      isPopular: true,
      calories: 420,
      preparationTime: "15 минут",
      category: "main"
    },
    {
      id: 2,
      name: "Макароны с сыром и ветчиной",
      description: "Макароны в сливочном соусе с добавлением тертого сыра и кубиков нежной ветчины",
      price: 180,
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      calories: 550,
      preparationTime: "20 минут",
      category: "main"
    },
    {
      id: 3,
      name: "Овощной салат из огурцов и помидоров",
      description: "Свежие огурцы и помидоры с заправкой из оливкового масла и специй",
      price: 120,
      image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      isPopular: true,
      calories: 120,
      preparationTime: "5 минут",
      category: "salad"
    },
    {
      id: 4,
      name: "Сосиска в тесте классическая",
      description: "Сочная сосиска в хрустящем тесте с нотками зелени и специй",
      price: 80,
      image: "https://images.unsplash.com/photo-1619740455993-9e612b50538e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      calories: 320,
      preparationTime: "10 минут",
      category: "snack"
    },
    {
      id: 5,
      name: "Бутерброд XXL",
      description: "Огромный бутерброд с тремя видами колбасы, сыром и свежими овощами",
      price: 170,
      image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      calories: 480,
      preparationTime: "7 минут",
      category: "snack"
    },
  ];

  // Фильтрация блюд по категориям
  const filteredItems = activeTab === "all" 
    ? foodItems 
    : foodItems.filter(item => item.category === activeTab);

  return (
    <div 
      className={`min-h-screen flex flex-col transition-opacity duration-1000 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <Header />
      
      <main className="flex-grow container py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 pt-16"
        >
          <h1 className="text-4xl font-bold mb-4">Наши блюда</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Наслаждайтесь разнообразием вкусных домашних блюд, приготовленных с любовью из свежих продуктов
          </p>
        </motion.div>
        
        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-4 w-full max-w-md">
              <TabsTrigger value="all" className="rounded-full">Все</TabsTrigger>
              <TabsTrigger value="main" className="rounded-full">Основные</TabsTrigger>
              <TabsTrigger value="salad" className="rounded-full">Салаты</TabsTrigger>
              <TabsTrigger value="snack" className="rounded-full">Закуски</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value={activeTab} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item, index) => (
                <FoodCard key={item.id} item={item} delay={index} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 bg-muted rounded-xl p-8"
        >
          <h2 className="text-2xl font-bold mb-4">Информация о питании</h2>
          <p className="mb-6">
            Все наши блюда готовятся из свежих продуктов. Мы указываем примерную калорийность и время приготовления для каждого блюда.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl text-primary mb-2">🍲</div>
              <h3 className="font-medium mb-2">Домашние рецепты</h3>
              <p className="text-sm text-muted-foreground">Все блюда готовятся по традиционным рецептам</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl text-primary mb-2">🥦</div>
              <h3 className="font-medium mb-2">Свежие ингредиенты</h3>
              <p className="text-sm text-muted-foreground">Мы используем только свежие продукты</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl text-primary mb-2">⏱️</div>
              <h3 className="font-medium mb-2">Быстрое приготовление</h3>
              <p className="text-sm text-muted-foreground">Не заставим вас долго ждать</p>
            </div>
          </div>
        </motion.div>
      </main>
      
      <Footer />
      
      {/* Кнопка "Наверх" */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-primary text-white shadow-lg flex items-center justify-center hover:bg-primary/90 transition-all hover:scale-110 z-50 hover:animate-bounce"
        aria-label="Наверх"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M5 15l7-7 7 7" 
          />
        </svg>
      </button>
    </div>
  );
};

export default FoodMenu;
