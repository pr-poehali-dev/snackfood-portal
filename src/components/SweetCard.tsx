
import { SweetItem } from "@/types/food";

interface SweetCardProps {
  sweet: SweetItem;
  index: number;
}

const SweetCard = ({ sweet, index }: SweetCardProps) => {
  return (
    <div 
      id={sweet.id.toString()}
      className="opacity-0 animate-fade-in"
      style={{ animationFillMode: 'forwards', animationDelay: `${index * 100 + 200}ms` }}
    >
      <div 
        className="rounded-lg bg-white shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
      >
        <div className="relative h-48 overflow-hidden">
          <img 
            src={sweet.image} 
            alt={sweet.name} 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
          />
          {sweet.isPopular && (
            <div className="absolute top-2 right-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
              Хит!
            </div>
          )}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <h3 className="text-white font-bold text-lg">{sweet.name}</h3>
          </div>
        </div>
        <div className="p-4">
          <p className="text-gray-600 text-sm mb-3">{sweet.description}</p>
          <div className="flex justify-between items-center mb-3">
            <span className="text-primary font-bold text-xl">{sweet.price} ₽</span>
            <span className="text-sm text-gray-500">{sweet.weight}</span>
          </div>
          
          {/* Информация о калориях */}
          {sweet.calories && (
            <div className="flex items-center text-sm text-gray-500 mb-3">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 mr-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" 
                />
              </svg>
              {sweet.calories} ккал
            </div>
          )}
          
          <button 
            className="w-full bg-primary text-white px-3 py-2 rounded-md hover:bg-primary/90 transition-colors"
          >
            В корзину
          </button>
        </div>
      </div>
    </div>
  );
};

export default SweetCard;
