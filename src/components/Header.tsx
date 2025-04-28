import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-primary py-4 shadow-md sticky top-0 z-10">
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-primary-foreground">🌭 ФастФуд №1</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#menu" className="text-primary-foreground hover:text-opacity-80 font-medium">
            Меню
          </a>
          <a href="#contacts" className="text-primary-foreground hover:text-opacity-80 font-medium">
            Контакты
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="secondary" size="sm" className="gap-2">
            <Phone size={16} /> Заказать
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
