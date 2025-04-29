
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuSection from "@/components/MenuSection";
import Hero from "@/components/Hero";
import SidebarMenu from "@/components/SidebarMenu";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Добавляем анимацию загрузки
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const foodItems = [
    {
      id: 1,
      name: "Сосиска в тесте классическая",
      description: "Сочная сосиска в хрустящем тесте с нотками зелени и специй",
      price: 80,
      image: "https://images.unsplash.com/photo-1619740455993-9e612b50538e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      isPopular: true
    },
    {
      id: 2,
      name: "Сосиска в тесте с сыром",
      description: "Классическая сосиска в тесте с добавлением плавленого сыра внутри",
      price: 100,
      image: "https://images.unsplash.com/photo-1620322547877-47c21c93660c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "Бутерброд XXL",
      description: "Огромный бутерброд с тремя видами колбасы, сыром и свежими овощами",
      price: 170,
      image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      isPopular: true
    }
  ];

  const drinkItems = [
    {
      id: 4,
      name: "Чай черный",
      description: "Крепкий черный чай с возможностью добавления сахара по вашему вкусу",
      price: 40,
      image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      name: "Лимонад",
      description: "Освежающий газированный напиток собственного приготовления с лимоном и мятой",
      price: 70,
      image: "https://images.unsplash.com/photo-1556881286-fc6915169721?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      isPopular: true
    },
    {
      id: 6,
      name: "Вода минеральная",
      description: "Бутилированная очищенная вода, газированная или негазированная на выбор",
      price: 30,
      image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    }
  ];

  // Добавляем функцию плавного скролла для всех ссылок-якорей
  useEffect(() => {
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

  return (
    <div 
      className={`min-h-screen flex flex-col transition-opacity duration-1000 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <Header />
      <div className="flex flex-1">
        <SidebarMenu />
        <div className="flex-1">
          <Hero />
          
          <main className="flex-grow container py-8">
            <div id="меню" className="pt-8 scroll-mt-20">
              <h1 className="text-3xl font-bold text-center mb-12 animate-fade-in" style={{ animationDelay: '300ms' }}>
                Наше меню
              </h1>
              <MenuSection title="Закуски" items={foodItems} />
              <MenuSection title="Напитки" items={drinkItems} />
            </div>
            
            <div id="о-нас" className="py-16 scroll-mt-20">
              <div className="bg-gray-50 rounded-lg p-8 shadow-inner">
                <h2 className="text-2xl font-bold mb-6 opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards', animationDelay: '200ms' }}>
                  О нашей закусочной
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards', animationDelay: '400ms' }}>
                    <p className="mb-4">
                      Наша закусочная была основана в 2015 году с целью предоставить быстрое, качественное и доступное питание для всех, кто ценит своё время.
                    </p>
                    <p>
                      Мы используем только свежие ингредиенты и уникальные рецепты, чтобы каждый наш гость мог насладиться вкусом настоящей, приготовленной с любовью еды.
                    </p>
                  </div>
                  <div className="opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards', animationDelay: '600ms' }}>
                    <img 
                      src="https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                      alt="Команда закусочной" 
                      className="rounded-lg shadow-md w-full h-60 object-cover hover:shadow-xl transition-shadow duration-300" 
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div id="карта" className="py-16 scroll-mt-20">
              <div className="bg-gray-50 rounded-lg p-8 shadow-inner">
                <h2 className="text-2xl font-bold mb-6 opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards', animationDelay: '200ms' }}>
                  Где нас найти
                </h2>
                <div className="h-60 rounded-lg overflow-hidden shadow-md opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards', animationDelay: '400ms' }}>
                  {/* Здесь может быть карта, заменяем на изображение */}
                  <img 
                    src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                    alt="Карта расположения" 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
            </div>
            
            <div id="контакты" className="py-16 scroll-mt-20">
              <div className="bg-gray-50 rounded-lg p-8 shadow-inner">
                <h2 className="text-2xl font-bold mb-6 opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards', animationDelay: '200ms' }}>
                  Контакты
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards', animationDelay: '400ms' }}>
                    <p className="mb-2"><strong>Адрес:</strong> ул. Вкусная, д. 15</p>
                    <p className="mb-2"><strong>Телефон:</strong> +7 (123) 456-78-90</p>
                    <p className="mb-2"><strong>Email:</strong> info@bistroda.ru</p>
                    <p><strong>Часы работы:</strong> 10:00 - 22:00, без выходных</p>
                  </div>
                  <div className="opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards', animationDelay: '600ms' }}>
                    <form className="space-y-4">
                      <input 
                        type="text" 
                        placeholder="Ваше имя" 
                        className="w-full p-2 border rounded-md" 
                      />
                      <input 
                        type="email" 
                        placeholder="Ваш email" 
                        className="w-full p-2 border rounded-md" 
                      />
                      <textarea 
                        placeholder="Сообщение" 
                        className="w-full p-2 border rounded-md h-24" 
                      ></textarea>
                      <button 
                        type="button" 
                        className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors"
                      >
                        Отправить
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      
      <Footer />
      
      {/* Кнопка "Наверх" */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-primary text-white shadow-lg flex items-center justify-center hover:bg-primary/90 transition-all hover:scale-110 z-50 hover:animate-bounce-light"
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

export default Index;
