
interface NutritionInfoProps {
  isLoaded: boolean;
}

const NutritionInfo = ({ isLoaded }: NutritionInfoProps) => {
  return (
    <div
      className={`mt-16 bg-muted rounded-xl p-8 transition-all duration-500 delay-300 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <h2 className="text-2xl font-bold mb-4">Информация о питании</h2>
      <p className="mb-6">
        Все наши блюда готовятся из свежих продуктов. Мы указываем примерную калорийность и время приготовления для каждого блюда.
      </p>
      
      <div className="grid md:grid-cols-3 gap-4 text-center">
        <InfoCard 
          emoji="🍲"
          title="Домашние рецепты"
          description="Все блюда готовятся по традиционным рецептам"
        />
        
        <InfoCard 
          emoji="🥦"
          title="Свежие ингредиенты"
          description="Мы используем только свежие продукты"
        />
        
        <InfoCard 
          emoji="⏱️"
          title="Быстрое приготовление"
          description="Не заставим вас долго ждать"
        />
      </div>
    </div>
  );
};

interface InfoCardProps {
  emoji: string;
  title: string;
  description: string;
}

const InfoCard = ({ emoji, title, description }: InfoCardProps) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="text-3xl text-primary mb-2">{emoji}</div>
      <h3 className="font-medium mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

export default NutritionInfo;
