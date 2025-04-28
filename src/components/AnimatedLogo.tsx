import { useState, useEffect } from 'react';

const AnimatedLogo = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    // Анимируем лого при загрузке страницы
    setIsAnimating(true);
    
    // Интервал для периодической анимации
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 1000);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-10 h-10 mr-2">
      <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 
        ${isAnimating ? 'scale-110' : 'scale-100'}`}>
        {/* Круг для сосиски в тесте */}
        <div className="relative w-8 h-8 bg-primary rounded-full flex items-center justify-center animate-spin-slow">
          <div className="absolute w-6 h-1.5 bg-amber-500 rounded-full"></div>
        </div>
        
        {/* Внешнее кольцо */}
        <div className={`absolute inset-0 border-2 border-primary rounded-full transition-all duration-500
          ${isAnimating ? 'scale-125 opacity-0' : 'scale-100 opacity-100'}`}></div>
      </div>
    </div>
  );
};

export default AnimatedLogo;
