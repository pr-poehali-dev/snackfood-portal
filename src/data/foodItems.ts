
import { FoodItem } from "@/types/food";

// Данные о блюдах
export const foodItems: FoodItem[] = [
  {
    id: 1,
    name: "Гречка с сосиской",
    description: "Ароматная гречневая каша с сочной отварной сосиской и сливочным маслом",
    price: 150,
    image: "https://images.unsplash.com/photo-1683125695361-395ac8f8d8e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isPopular: true,
    calories: 420,
    preparationTime: "15 минут",
    category: "main"
  },
  {
    id: 2,
    name: "Макароны с сыром и ветчиной",
    description: "Макароны в сливочном соусе с добавлением тертого сыра и кубиков нежной ветчины",
    price: 180,
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    calories: 550,
    preparationTime: "20 минут",
    category: "main"
  },
  {
    id: 3,
    name: "Овощной салат из огурцов и помидоров",
    description: "Свежие огурцы и помидоры с заправкой из оливкового масла и специй",
    price: 120,
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isPopular: true,
    calories: 120,
    preparationTime: "5 минут",
    category: "salad"
  },
  {
    id: 4,
    name: "Сосиска в тесте классическая",
    description: "Сочная сосиска в хрустящем тесте с нотками зелени и специй",
    price: 80,
    image: "https://images.unsplash.com/photo-1619740455993-9e612b50538e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    calories: 320,
    preparationTime: "10 минут",
    category: "snack"
  },
  {
    id: 5,
    name: "Бутерброд XXL",
    description: "Огромный бутерброд с тремя видами колбасы, сыром и свежими овощами",
    price: 170,
    image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    calories: 480,
    preparationTime: "7 минут",
    category: "snack"
  },
];
