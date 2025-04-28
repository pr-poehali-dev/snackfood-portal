import { useEffect, useState } from "react";

const Footer = () => {
  const [currentYear] = useState(() => new Date().getFullYear());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.body.offsetHeight;
      const threshold = pageHeight - 300; // 300px до конца страницы
      
      if (scrollPosition > threshold) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="bg-gray-900 text-white">
      <div 
        className={`container py-12 grid gap-8 md:grid-cols-3 transition-all duration-1000 transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div>
          <h3 className="text-xl font-bold mb-4">БыстроЕда</h3>
          <p className="text-gray-400 mb-4">
            Быстрая еда не значит неполезная! Мы готовим только из свежих ингредиентов высокого качества.
          </p>
          <div className="flex space-x-4">
            {[
              { icon: "ri-facebook-fill", label: "Facebook" },
              { icon: "ri-instagram-line", label: "Instagram" },
              { icon: "ri-vk-fill", label: "VK" }
            ].map((social) => (
              <a
                key={social.label}
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors duration-300 animate-float"
                aria-label={social.label}
              >
                <i className={social.icon}></i>
                {/* Эмуляция иконок через текст для примера */}
                {social.label === "Facebook" && "f"}
                {social.label === "Instagram" && "i"}
                {social.label === "VK" && "v"}
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold mb-4">Контакты</h3>
          <p className="flex items-center text-gray-400 hover:text-white transition-colors">
            <span className="mr-2">📍</span> ул. Ленина, 42, Москва
          </p>
          <p className="flex items-center text-gray-400 hover:text-white transition-colors">
            <span className="mr-2">📞</span> +7 (495) 123-45-67
          </p>
          <p className="flex items-center text-gray-400 hover:text-white transition-colors">
            <span className="mr-2">✉️</span> info@bistroeda.ru
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Часы работы</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="flex justify-between">
              <span>Понедельник - Пятница:</span>
              <span>9:00 - 22:00</span>
            </li>
            <li className="flex justify-between">
              <span>Суббота:</span>
              <span>10:00 - 23:00</span>
            </li>
            <li className="flex justify-between">
              <span>Воскресенье:</span>
              <span>10:00 - 22:00</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 py-6">
        <div className="container text-center text-gray-500">
          <p>&copy; {currentYear} БыстроЕда. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
