
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface FoodCardProps {
  item: {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    isPopular?: boolean;
    calories?: number;
    preparationTime?: string;
  };
  delay: number;
}

const FoodCard = ({ item, delay }: FoodCardProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100 + delay * 150);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <Card 
      className={`overflow-hidden group cursor-pointer transition-all duration-500 transform ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      } hover:shadow-lg`}
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {item.isPopular && (
          <Badge className="absolute top-3 right-3 animate-pulse bg-primary text-white">
            Хит продаж
          </Badge>
        )}
      </div>
      
      <CardContent className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{item.name}</h3>
          <div className="font-bold text-primary">{item.price} ₽</div>
        </div>
        
        <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
        
        {(item.calories || item.preparationTime) && (
          <div className="flex gap-4 text-xs text-muted-foreground">
            {item.calories && (
              <div className="flex items-center gap-1">
                <span>🔥</span>
                <span>{item.calories} ккал</span>
              </div>
            )}
            
            {item.preparationTime && (
              <div className="flex items-center gap-1">
                <span>⏱️</span>
                <span>{item.preparationTime}</span>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default FoodCard;
