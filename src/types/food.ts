
// Типы для блюд
export type FoodItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  isPopular?: boolean;
  calories?: number;
  preparationTime?: string;
  category: string;
  nutrition?: {
    calories: number;
    protein?: number;
    fat?: number;
    carbs?: number;
  };
  cookTime?: number;
};

// Типы для сладостей
export type SweetItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  isPopular?: boolean;
  calories?: number;
  weight: string;
  category: string;
};
