
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FoodItem } from "@/types/food";
import FoodCard from "@/components/FoodCard";

interface FoodCategoryTabsProps {
  activeTab: string;
  setActiveTab: (value: string) => void;
  foodItems: FoodItem[];
}

const FoodCategoryTabs = ({ activeTab, setActiveTab, foodItems }: FoodCategoryTabsProps) => {
  // Фильтрация блюд по категориям
  const filteredItems = activeTab === "all" 
    ? foodItems 
    : foodItems.filter(item => item.category === activeTab);

  return (
    <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
      <div className="flex justify-center mb-8">
        <TabsList className="grid grid-cols-4 w-full max-w-md">
          <TabsTrigger value="all" className="rounded-full">Все</TabsTrigger>
          <TabsTrigger value="main" className="rounded-full">Основные</TabsTrigger>
          <TabsTrigger value="salad" className="rounded-full">Салаты</TabsTrigger>
          <TabsTrigger value="snack" className="rounded-full">Закуски</TabsTrigger>
        </TabsList>
      </div>
      
      <TabsContent value={activeTab} className="mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <FoodCard key={item.id} item={item} delay={index} />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default FoodCategoryTabs;
