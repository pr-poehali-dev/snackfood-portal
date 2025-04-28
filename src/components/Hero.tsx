import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeBackground, setActiveBackground] = useState(0);
  
  const backgrounds = [
    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1615937722923-67f6deaf2cc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Циклическая смена фоновых изображений
    const interval = setInterval(() => {
      setActiveBackground((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-primary overflow-hidden">
      {backgrounds.map((bg, index) => (
        <div 
          key={index}
          className={`absolute inset-0 opacity-20 transition-opacity duration-1000 ease-in-out ${
            activeBackground === index ? "opacity-20" : "opacity-0"
          }`}
          style={{ 
            backgroundImage: `url('${bg}')`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        ></div>
      ))}
      <div className="container relative z-10 py-16 md:py-24">
        <div 
          className={`max-w-2xl transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Вкусно и быстро в любое время!
          </h1>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Наша закусочная предлагает лучшие сосиски в тесте, огромные сытные бутерброды и освежающие напитки
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
              className="animate-bounce-light hover:animate-none"
            >
              Посмотреть меню
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 text-primary-foreground border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              Заказать доставку
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
