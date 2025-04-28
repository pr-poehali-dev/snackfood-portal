
interface FoodMenuHeaderProps {
  isLoaded: boolean;
}

const FoodMenuHeader = ({ isLoaded }: FoodMenuHeaderProps) => {
  return (
    <div
      className={`text-center mb-12 pt-16 transition-all duration-500 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'
      }`}
    >
      <h1 className="text-4xl font-bold mb-4">Наши блюда</h1>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        Наслаждайтесь разнообразием вкусных домашних блюд, приготовленных с любовью из свежих продуктов
      </p>
    </div>
  );
};

export default FoodMenuHeader;
