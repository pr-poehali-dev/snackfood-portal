
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface SweetCategoryTabsProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const SweetCategoryTabs = ({ selectedCategory, onSelectCategory }: SweetCategoryTabsProps) => {
  const categories = [
    { id: "all", label: "Все сладости" },
    { id: "chocolate", label: "Шоколад" }
  ];

  return (
    <div className="flex justify-center">
      <Tabs 
        defaultValue="all" 
        value={selectedCategory} 
        onValueChange={onSelectCategory}
        className="w-full max-w-md"
      >
        <TabsList className="grid grid-cols-2 w-full">
          {categories.map((category) => (
            <TabsTrigger 
              key={category.id} 
              value={category.id}
              className="data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};

export default SweetCategoryTabs;
