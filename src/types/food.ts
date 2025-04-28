
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
};
