import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48 overflow-hidden bg-muted">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              {item.isPopular && (
                <Badge className="absolute top-2 right-2 bg-red-500">Хит!</Badge>
              )}
            </div>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg">{item.name}</h3>
                <span className="font-bold text-primary">{item.price} ₽</span>
              </div>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
