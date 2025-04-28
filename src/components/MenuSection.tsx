import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect, useRef } from "react";

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  isPopular?: boolean;
};

type MenuSectionProps = {
  title: string;
  items: MenuItem[];
};

const MenuSection = ({ title, items }: MenuSectionProps) => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  // Наблюдаем за пересечением с viewport для анимации появления элементов
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Сначала показываем заголовок секции с небольшой задержкой
          setTimeout(() => {
            // Затем постепенно с интервалом показываем карточки
            const timer = setInterval(() => {
              setVisibleItems((prev) => {
                const nextIndex = prev.length;
                if (nextIndex >= items.length) {
                  clearInterval(timer);
                  return prev;
                }
                return [...prev, items[nextIndex].id];
              });
            }, 150);
            
            // Очистка на случай размонтирования компонента
            return () => clearInterval(timer);
          }, 200);
          
          // Прекращаем наблюдение после срабатывания
          observer.unobserve(sectionRef.current!);
        }
      },
      { threshold: 0.1 } // Срабатывает, когда 10% секции видно
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [items]);

  return (
    <section ref={sectionRef} className="py-8">
      <h2 className="text-2xl font-bold mb-6 opacity-0 transition-all duration-500 ease-out animate-fade-in" style={{ animationFillMode: 'forwards' }}>
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <Card 
            key={item.id} 
            className={`overflow-hidden transition-all duration-500 ease-out transform ${
              visibleItems.includes(item.id) 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-20"
            } hover:shadow-lg hover:-translate-y-1`}
          >
            <div className="relative h-48 overflow-hidden bg-muted group">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {item.isPopular && (
                <Badge className="absolute top-2 right-2 bg-red-500 animate-pulse-light">Хит!</Badge>
              )}
            </div>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg">{item.name}</h3>
                <span className="font-bold text-primary">{item.price} ₽</span>
              </div>
              <p className="text-sm text-muted-foreground">{item.description}</p>
              <button 
                className="mt-4 text-sm font-medium text-primary hover:text-primary/80 transition-colors relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                Заказать
              </button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
