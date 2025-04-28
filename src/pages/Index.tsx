import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuSection from "@/components/MenuSection";
import Hero from "@/components/Hero";

const Index = () => {
  const foodItems = [
    {
      id: 1,
      name: "Сосиска в тесте классическая",
      description: "Сочная сосиска в хрустящем тесте с нотками зелени и специй",
      price: 80,
      image: "https://images.unsplash.com/photo-1619740455993-9e612b50538e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      isPopular: true
    },
    {
      id: 2,
      name: "Сосиска в тесте с сыром",
      description: "Классическая сосиска в тесте с добавлением плавленого сыра внутри",
      price: 100,
      image: "https://images.unsplash.com/photo-1620322547877-47c21c93660c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "Бутерброд XXL",
      description: "Огромный бутерброд с тремя видами колбасы, сыром и свежими овощами",
      price: 170,
      image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      isPopular: true
    }
  ];

  const drinkItems = [
    {
      id: 4,
      name: "Чай черный",
      description: "Крепкий черный чай с возможностью добавления сахара по вашему вкусу",
      price: 40,
      image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      name: "Лимонад",
      description: "Освежающий газированный напиток собственного приготовления с лимоном и мятой",
      price: 70,
      image: "https://images.unsplash.com/photo-1556881286-fc6915169721?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      isPopular: true
    },
    {
      id: 6,
      name: "Вода минеральная",
      description: "Бутилированная очищенная вода, газированная или негазированная на выбор",
      price: 30,
      image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      
      <main className="flex-grow container py-8">
        <div id="menu" className="pt-8">
          <h1 className="text-3xl font-bold text-center mb-12">Наше меню</h1>
          <MenuSection title="Закуски" items={foodItems} />
          <MenuSection title="Напитки" items={drinkItems} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
