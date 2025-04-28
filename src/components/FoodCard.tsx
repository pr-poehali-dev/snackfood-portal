
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

type FoodItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  isPopular?: boolean;
  calories?: number;
  preparationTime?: string;
};

type FoodCardProps = {
  item: FoodItem;
  delay: number;
};

const FoodCard = ({ item, delay }: FoodCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      <Card 
        className="overflow-hidden transition-all duration-500 ease-out transform hover:shadow-lg hover:-translate-y-1"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-48 overflow-hidden bg-muted">
          <img
            src={item.image}
            alt={item.name}
            className={`w-full h-full object-cover transition-transform duration-500 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          />
          {item.isPopular && (
            <Badge className="absolute top-2 right-2 bg-red-500 animate-pulse">Хит продаж!</Badge>
          )}
          {item.calories && (
            <Badge variant="outline" className="absolute bottom-2 left-2 bg-white/80">
              {item.calories} ккал
            </Badge>
          )}
        </div>
        <CardContent className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-bold text-lg">{item.name}</h3>
            <span className="font-bold text-primary">{item.price} ₽</span>
          </div>
          <p className="text-sm text-muted-foreground">{item.description}</p>
          
          {item.preparationTime && (
            <div className="flex items-center mt-2 text-xs text-muted-foreground">
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
              Время приготовления: {item.preparationTime}
            </div>
          )}
          
          <Button 
            className="mt-4 w-full group relative overflow-hidden"
            variant="default"
          >
            <span className="relative z-10 transition-transform duration-500 group-hover:-translate-y-20">
              Заказать
            </span>
            <span className="absolute inset-0 flex items-center justify-center translate-y-20 transition-transform duration-500 group-hover:translate-y-0">
              В корзину
            </span>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default FoodCard;
