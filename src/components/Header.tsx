
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import AnimatedLogo from "./AnimatedLogo";
import { Link } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Обработчик скролла для изменения стиля хедера
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-sm shadow-md py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Логотип */}
        <Link to="/" className="flex items-center space-x-2">
          <AnimatedLogo />
          <span className={`font-bold text-xl transition-colors duration-300 ${
            scrolled ? "text-primary" : "text-white"
          }`}>
            БыстроЕда
          </span>
        </Link>

        {/* Десктопное меню */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            to="/menu"
            className={`hover:text-primary transition-colors relative group ${
              scrolled ? "text-foreground" : "text-white"
            }`}
          >
            Еда
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          {["О нас", "Доставка", "Контакты"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`hover:text-primary transition-colors relative group ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Мобильное меню кнопка */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={scrolled ? "text-foreground" : "text-white"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </Button>
        </div>

        {/* Мобильное меню выпадающее */}
        <div 
          className={`absolute top-full left-0 right-0 bg-white shadow-lg overflow-hidden transition-all duration-300 md:hidden ${
            mobileMenuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="container py-4 flex flex-col space-y-4">
            <Link
              to="/menu"
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Еда
            </Link>
            {["О нас", "Доставка", "Контакты"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
