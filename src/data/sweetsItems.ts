
import { SweetItem } from "@/types/food";

export const sweetsItems: SweetItem[] = [
  {
    id: 1,
    name: "Молочный шоколад",
    description: "Нежный молочный шоколад с высоким содержанием какао-бобов и добавлением ванили",
    price: 120,
    image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isPopular: true,
    calories: 550,
    weight: "100 гр",
    category: "chocolate"
  },
  {
    id: 2,
    name: "Горький шоколад",
    description: "Изысканный горький шоколад с содержанием какао 70%, обладает богатым вкусом и ароматом",
    price: 150,
    image: "https://images.unsplash.com/photo-1522942762826-0b9b4559a80f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    calories: 520,
    weight: "100 гр",
    category: "chocolate"
  },
  {
    id: 3,
    name: "Шоколад с фундуком",
    description: "Молочный шоколад с цельными обжаренными орехами фундука, придающими неповторимый вкус",
    price: 170,
    image: "https://images.unsplash.com/photo-1589566661803-5a36265edec9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isPopular: true,
    calories: 600,
    weight: "100 гр",
    category: "chocolate"
  }
];
